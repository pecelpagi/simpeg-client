import { METHOD_TYPE } from "./enums";
import { getToken } from "../utils";

const getQueryString = (params) => {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join("&");
};

const fetchApi = async (endPoint, payload = {}, method = METHOD_TYPE.GET, options = {
    queryString: undefined,
}) => {
    let apiUrl = endPoint;

    switch (method) {
        case METHOD_TYPE.GET:
            if (options.queryString) {
                apiUrl = `${endPoint}?${getQueryString(options.queryString)}`;
            }
            break;
        default:
        // do nothing
    }

    const token = getToken();

    const authorization = {};

    if (token) Object.assign(authorization, { 'X-API-TOKEN': `${token}` });

    let fetchOptions = {
        method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...authorization,
        },
    };

    if (method !== METHOD_TYPE.GET) {
        fetchOptions = {
            ...fetchOptions,
            body: JSON.stringify(payload),
        };
    }

    const response = await fetch(apiUrl, fetchOptions);

    const retval = await response.json();

    if (response.ok) return retval;

    throw retval;
};

export default fetchApi;
import * as apiService from "../../../data";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ payload, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getDepartments(payload);

        const { paging, data } = res;

        setState({
            total: paging.totalElements,
            data,
            pageSize: payload.size,
            pageNumber: payload.page,
            loading: false,
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}
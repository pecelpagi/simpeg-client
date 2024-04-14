import moment from "moment";
import * as apiService from "../../data";
import { catchError } from "../../utils";

export const handleFetchData = async ({ payload, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getNotifications(payload);

        const { paging, data } = res;
        
        setState({
            total: paging.totalElements,
            data: data.map(x => ({ ...x, createdAt: moment(x.createdAt).format('DD MMM YYYY, HH:mm:ss') })),
            pageSize: payload.size,
            pageNumber: payload.page,
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    } finally {
        setState({
            loading: false,
        })
    }
}

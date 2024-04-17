import * as apiService from "../../../data";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getEducationsRecap();

        const { data } = res;

        setState({
            data: data.map((x, i) => ({ ...x, sequenceNumber: i + 1 })),
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        });
    } finally {
        setState({
            loading: false,
        });
    }
}
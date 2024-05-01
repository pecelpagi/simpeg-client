import moment from "moment";
import * as apiService from "../../../data";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const startDate = moment().format("YYYY-MM-DD");
        const endDate = moment().add(30, 'days').format("YYYY-MM-DD");
        
        const res = await apiService.getContractsReminder({ startDate, endDate });

        const { data } = res;

        setState({
            data: data.map((x, i) => ({
                ...x, sequenceNumber: i + 1,
                contractLengthMonthText: `${x.contract_length_month} Bulan`,
            })),
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
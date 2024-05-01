import moment from "moment";
import * as apiService from "../../data";
import { catchError } from "../../utils";

const handleFetchContractReminder = async ({ onShowMessager }) => {
    let contractReminder = [];

    try {
        const startDate = moment().format("YYYY-MM-DD");
        const endDate = moment().add(30, 'days').format("YYYY-MM-DD");

        const res = await apiService.getContractsReminder({ startDate, endDate });

        const { data } = res;

        contractReminder = data.map((x, i) => ({
            ...x, sequenceNumber: i + 1,
            contractLengthMonthText: `${x.contract_length_month} Bulan`,
        }));
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        });
    }

    return contractReminder;
}

const handleFetchDepartmentRecap = async ({ onShowMessager }) => {
    let departmentRecap = [];
    
    try {
        const res = await apiService.getDepartmentsRecap();

        const { data } = res;

        departmentRecap = data.map((x, i) => ({ ...x, sequenceNumber: i + 1 }));
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        });
    }

    return departmentRecap;
}

export const handleFetchData = async ({ onShowMessager, setState }) => {
    setState({ loading: true });

    const fetchingDepartmentRecap = handleFetchDepartmentRecap({ onShowMessager });
    const fetchingContractReminder = handleFetchContractReminder({ onShowMessager });

    const departmentRecap = await fetchingDepartmentRecap;
    const contractReminder = await fetchingContractReminder;

    const data = {
        departmentRecap, contractReminder
    }

    setState({ data, loading: false });
}
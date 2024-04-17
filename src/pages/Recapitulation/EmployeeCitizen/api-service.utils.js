import * as apiService from "../../../data";
import { catchError, staticData } from "../../../utils";

const getCitizenObject = () => {
    let retval = {};

    staticData.citizen.forEach((x) => {
        retval = {
            ...retval,
            [x.value]: x.text
        }
    });

    return retval;
}

export const handleFetchData = async ({ onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const citizenObject = getCitizenObject();
        const res = await apiService.getEmployeeCitizenRecap();

        const { data } = res;

        setState({
            data: data.map((x, i) => ({ ...x, sequenceNumber: i + 1, name: citizenObject[x.citizen] })),
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
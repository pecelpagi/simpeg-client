import * as apiService from "../../../data";
import { catchError, staticData } from "../../../utils";

const getReligionObject = () => {
    let retval = {};

    staticData.religions.forEach((x) => {
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
        const religionObject = getReligionObject();
        const res = await apiService.getEmployeeReligionRecap();

        const { data } = res;

        setState({
            data: data.map((x, i) => ({ ...x, sequenceNumber: i + 1, name: religionObject[x.religion] })),
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
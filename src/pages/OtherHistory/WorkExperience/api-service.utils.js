import * as apiService from "../../../data";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ payload, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getWorkExperiences(payload);

        const { paging, data } = res;

        const formattedData = data.map(x => ({
            ...x,
            employeeName: x.employee.name,
            employeePositionName: x.employeePosition.name,
        }))

        setState({
            total: paging.totalElements,
            data: formattedData,
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

export const handleCreateData = async ({ onShowMessager, refCollections, formModel, onRefreshData }) => {
    try {
        await apiService.createWorkExperience(formModel);

        refCollections.dialog.current.close();
        onRefreshData();
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        });
    }
}

export const handleUpdateData = async ({ onShowMessager, refCollections, formModel, selectedId, onRefreshData }) => {
    try {
        await apiService.updateWorkExperience({ ...formModel, id: selectedId });

        refCollections.dialog.current.close();
        onRefreshData();
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        });
    }
}

export const handleDeleteData = async ({ messager, setState, selectedId, onRefreshData }) => {
    setState({ loading: true });

    try {
        await apiService.deleteWorkExperience({ id: selectedId });

        onRefreshData();
    } catch (err) {
        messager.alert({
            title: "Error",
            icon: "error",
            msg: catchError(err),
            result: () => { }
        });
    } finally {
        setState({ loading: false });
    }
}

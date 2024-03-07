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
        await apiService.createDepartment(formModel);

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
        await apiService.updateDepartment({ ...formModel, id: selectedId });

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
        await apiService.deleteDepartment({ id: selectedId });

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

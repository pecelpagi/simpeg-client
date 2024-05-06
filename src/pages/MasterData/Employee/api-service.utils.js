import * as apiService from "../../../data";
import * as uploaderService from "../../../uploader.utils";
import { catchError } from "../../../utils";
import { getParentStatusObject } from "./utils";

const parentStatusObject = getParentStatusObject();

export const handleFetchData = async ({ payload, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getEmployees(payload);

        const { paging, data } = res;

        const formattedData = data.map(x => ({
            ...x,
            departmentName: x.department.name,
            employeePositionName: x.employeePosition.name,
            birthdateAndPlace: `${x.birthplace}, ${x.birthdate}`
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

export const handleFetchDetail = async ({ employeeId, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getEmployeeDetail(employeeId);

        const { data } = res;

        const formattedParents = data.parents.map(x => ({
            ...x,
            birthdateAndPlace: `${x.birthplace}, ${x.birthdate}`,
            status: parentStatusObject[x.parentStatus]
        }));

        const newData = {
            ...data,
            parents: formattedParents
        }

        setState({
            employeeDetail: newData
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
        await apiService.createEmployee(formModel);

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
        await apiService.updateEmployee({ ...formModel, id: selectedId });

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
        await apiService.deleteEmployee({ id: selectedId });

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

export const handleExportEmployee = async ({ messager, setState }) => {
    setState({ exporting: true });

    try {
        await apiService.exportEmployee();
    } catch (err) {
        messager.alert({
            title: "Error",
            icon: "error",
            msg: catchError(err),
            result: () => { }
        });
    } finally {
        setState({ exporting: false });
    }
}

export const handleUploadFile = async ({ files, messager, onChange, setState }) => {
    if (files.length === 0) return;

    setState({ isUploading: true });

    try {

        let file = files[0];

        const response = await uploaderService.uploadImage(file);
        onChange('profilePicture', response.data.filename);
    } catch (err) {
        messager.alert({
            title: "Error",
            icon: "error",
            msg: catchError(err),
            result: () => { }
        });
    } finally {
        setState({ isUploading: false });
    }
}

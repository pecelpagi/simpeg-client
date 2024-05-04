import moment from "moment";
import * as apiService from "../../../data";
import * as uploaderService from "../../../uploader.utils";
import { catchError } from "../../../utils";

export const handleFetchData = async ({ payload, onShowMessager, setState }) => {
    setState({ loading: true });

    try {
        const res = await apiService.getContracts(payload);

        const { paging, data } = res;

        const formattedData = data.map(x => ({
            ...x,
            employeeName: x.employee.name,
            contractStatusName: x.contractStatus === "C" ? "Kontrak" : "Tetap",
            contractLengthMonthText: x.contractStatus === "C" ? `${x.contractLengthMonth} Bulan` : "-",
            endDate: x.contractStatus === "C" ? moment(x.startDate, 'YYYY-MM-DD').add(x.contractLengthMonth, 'months').format('YYYY-MM-DD') : "-",
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
        await apiService.createContract(formModel);

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
        await apiService.updateContract({ ...formModel, id: selectedId });

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
        await apiService.deleteContract({ id: selectedId });

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

export const handleUploadFile = async ({ files, messager, onChange, setState }) => {
    if (files.length === 0) return;

    setState({ isUploading: true });

    try {

        let file = files[0];

        const response = await uploaderService.uploadPdf(file);
        onChange('attachment', response.data.filename);
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
import * as apiService from "../data";
import { catchError } from "../utils";

export const handleFetchExportEmployeeStatus = async ({ onShowMessager, setState }) => {
    try {
        const res = await apiService.getExportEmployeeStatus();

        const { data } = res;

        setState({
            isExportingEmployees: data === 'IS_EXPORTING',
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}

export const handleFetchExportWarningReportStatus = async ({ onShowMessager, setState }) => {
    try {
        const res = await apiService.getExportWarningReportStatus();

        const { data } = res;

        setState({
            isExportingWarningReport: data === 'IS_EXPORTING',
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}

export const handleFetchUnreadNotificationCount = async ({ onShowMessager, setState }) => {
    try {
        const res = await apiService.getUnreadNotificationCount();

        const { data } = res;

        setState({
            unreadNotificationCount: data,
        });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}

export const handleReadNotification = async ({ onShowMessager, setState }) => {
    try {
        await apiService.readNotification();

        handleFetchUnreadNotificationCount({ onShowMessager, setState });
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}
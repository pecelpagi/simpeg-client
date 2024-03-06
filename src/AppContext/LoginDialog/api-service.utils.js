import * as apiService from "../../data";
import { catchError, setToken, removeToken } from "../../utils";

export const handleLogin = async ({ onShowMessager, refCollections, formModel }, onSuccessCallbackFn) => {
    try {
        const res = await apiService.login(formModel);

        setToken(res.data.token);
        refCollections.dialog.current.close();
        onSuccessCallbackFn();
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}

export const handleLogout = async ({ onShowMessager, refCollections }, onSuccessCallbackFn) => {
    try {
        await apiService.logout();

        removeToken();
        refCollections.dialog.current.open();
        onSuccessCallbackFn();
    } catch (err) {
        onShowMessager({
            title: "Error",
            icon: "error",
            msg: catchError(err)
        })
    }
}
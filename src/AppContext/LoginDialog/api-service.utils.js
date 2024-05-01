import * as apiService from "../../data";
import { catchError, setToken, removeToken } from "../../utils";

export const handleLogin = async ({ onShowMessager, refCollections, formModel, setState }, onSuccessCallbackFn) => {
    setState({ isSaving: true });

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
        });
    } finally {
        setState({ isSaving: false });
    }
}

export const handleLogout = async ({ refCollections }, onSuccessCallbackFn) => {
    try {
        await apiService.logout();
    } catch (err) {
        console.error(err);
    } finally {
        removeToken();
        refCollections.dialog.current.open();
        onSuccessCallbackFn();
    }
}
const BASE_KEY = "SIMPEG";

export const getToken = () => localStorage.getItem(`${BASE_KEY}::usertoken`);

export const setToken = (token) => { localStorage.setItem(`${BASE_KEY}::usertoken`, token); };

export const removeToken = () => { localStorage.removeItem(`${BASE_KEY}::usertoken`); };

export const catchError = (e) => {
    let message = "Unknown error";

    if (Object.prototype.hasOwnProperty.call(e, "error")) {
        ({ error: message } = e);
    } else if (Object.prototype.hasOwnProperty.call(e, "errors")) {
        ({ errors: message } = e);
    } else {
        message = e.toString();
    }

    return message;
};
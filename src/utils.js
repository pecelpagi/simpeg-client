const BASE_KEY = "SIMPEG";

export const getToken = () => localStorage.getItem(`${BASE_KEY}::usertoken`);

export const setToken = (token) => { localStorage.setItem(`${BASE_KEY}::usertoken`, token); };

export const removeToken = () => { localStorage.removeItem(`${BASE_KEY}::usertoken`); };

export const catchError = (e) => {
    debugger;
    let message = "Unknown error";
    if (typeof e === "string") message = e;
    if (Object.prototype.hasOwnProperty.call(e, "errors")) ({ errors: message } = e);
    return message;
};
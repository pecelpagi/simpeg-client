import { METHOD_TYPE } from "./enums";
import fetchApi from "./ApiService";

export const login = async (payload) => {
  const response = await fetchApi("/api/auth/login", payload, METHOD_TYPE.POST);

  return response;
};

export const logout = async () => {
  const response = await fetchApi("/api/auth/logout", {}, METHOD_TYPE.DELETE);

  return response;
};

export const getDepartments = async (payload) => {
  const response = await fetchApi("/api/departments", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}
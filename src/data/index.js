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

export const createDepartment = async (payload) => {
  const response = await fetchApi("/api/departments", payload, METHOD_TYPE.POST);

  return response;
}

export const updateDepartment = async (payload) => {
  const response = await fetchApi(`/api/departments/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteDepartment = async (payload) => {
  const response = await fetchApi(`/api/departments/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}

export const getEmployees = async (payload) => {
  const response = await fetchApi("/api/employees", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const createEmployee = async (payload) => {
  const response = await fetchApi("/api/employees", payload, METHOD_TYPE.POST);

  return response;
}

export const updateEmployee = async (payload) => {
  const response = await fetchApi(`/api/employees/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteEmployee = async (payload) => {
  const response = await fetchApi(`/api/employees/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}

export const getEmployeePositions = async (payload) => {
  const response = await fetchApi("/api/employee_positions", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const getContracts = async (payload) => {
  const response = await fetchApi("/api/contracts", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const createContract = async (payload) => {
  const response = await fetchApi("/api/contracts", payload, METHOD_TYPE.POST);

  return response;
}

export const updateContract = async (payload) => {
  const response = await fetchApi(`/api/contracts/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteContract = async (payload) => {
  const response = await fetchApi(`/api/contracts/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}

export const getSpouses = async (payload) => {
  const response = await fetchApi("/api/spouses", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const createSpouse = async (payload) => {
  const response = await fetchApi("/api/spouses", payload, METHOD_TYPE.POST);

  return response;
}

export const updateSpouse = async (payload) => {
  const response = await fetchApi(`/api/spouses/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteSpouse = async (payload) => {
  const response = await fetchApi(`/api/spouses/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}

export const getChildren = async (payload) => {
  const response = await fetchApi("/api/children", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const createChildren = async (payload) => {
  const response = await fetchApi("/api/children", payload, METHOD_TYPE.POST);

  return response;
}

export const updateChildren = async (payload) => {
  const response = await fetchApi(`/api/children/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteChildren = async (payload) => {
  const response = await fetchApi(`/api/children/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}

export const getParents = async (payload) => {
  const response = await fetchApi("/api/parents", {}, METHOD_TYPE.GET, { queryString: payload });

  return response;
}

export const createParent = async (payload) => {
  const response = await fetchApi("/api/parents", payload, METHOD_TYPE.POST);

  return response;
}

export const updateParent = async (payload) => {
  const response = await fetchApi(`/api/parents/${payload.id}`, payload, METHOD_TYPE.PUT);

  return response;
}

export const deleteParent = async (payload) => {
  const response = await fetchApi(`/api/parents/${payload.id}`, payload, METHOD_TYPE.DELETE);

  return response;
}


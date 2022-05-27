import {
  GET_EMPLOYEES,
  GET_EMPLOYEE,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "./actionType";

export const getEmployees = (query) => {
  return {
    type: GET_EMPLOYEES,
    payload: query,
  };
};
export const getEmployee = (id) => {
  return {
    type: GET_EMPLOYEE,
    payload: id,
  };
};
export const addEmployee = (data) => {
  return {
    type: ADD_EMPLOYEE,
    payload: data,
  };
};
export const updateEmployee = (data) => {
  return {
    type: UPDATE_EMPLOYEE,
    payload: data,
  };
};
export const deleteEmployee = (id) => {
  return {
    type: DELETE_EMPLOYEE,
    payload: id,
  };
};

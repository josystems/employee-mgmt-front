import { put, call, takeEvery } from "redux-saga/effects";
import * as actionType from "../actions/actionType";
import {
  getEmployeesAPI,
  getEmployeeAPI,
  addEmployeeAPI,
  updateEmployeeAPI,
  deleteEmployeeAPI,
} from "../../services/api";

export function* employeeSaga() {
  yield takeEvery(actionType.ADD_EMPLOYEE, addEmployee);
  yield takeEvery(actionType.UPDATE_EMPLOYEE, updateEmployee);
  yield takeEvery(actionType.DELETE_EMPLOYEE, deleteEmployee);
  yield takeEvery(actionType.GET_EMPLOYEES, getEmployees);
  yield takeEvery(actionType.GET_EMPLOYEE, getEmployee);
}

function* addEmployee(action) {
  console.log(action);
  try {
    const response = yield call(addEmployeeAPI, action.payload);
    yield put({ type: actionType.ADDED_EMPLOYEE, payload: response });
  } catch (err) {
    console.log(err);
  }
}
function* updateEmployee(action) {
  console.log(action);
  try {
    const response = yield call(updateEmployeeAPI, action.payload);
    yield put({ type: actionType.UPDATED_EMPLOYEE, payload: response });
  } catch (err) {
    console.log(err);
  }
}
function* deleteEmployee(action) {
  try {
    const employeeResponse = yield call(deleteEmployeeAPI, action.payload);
    yield put({ type: actionType.DELETED_EMPLOYEE, payload: employeeResponse });
  } catch (err) {
    console.log(err);
  }
}
function* getEmployees(action) {
  try {
    console.log(getEmployeesAPI, "promise?");
    const employeeResponse = yield call(getEmployeesAPI, action.payload);
    console.log(employeeResponse, "xXx");
    yield put({
      type: actionType.GOT_EMPLOYEES,
      payload: employeeResponse?.data?.data,
    });
  } catch (err) {
    console.log(err);
  }
}
function* getEmployee(action) {
  console.log(action);
  try {
    const employeeResponse = yield call(getEmployeeAPI, action.payload);
    yield put({ type: actionType.GOT_EMPLOYEES, payload: employeeResponse });
  } catch (err) {
    console.log(err);
  }
}

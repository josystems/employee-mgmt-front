import * as actionType from "../actions/actionType";

const initialState = {
  deleted: [""],
  updated: [],
  created: [""],
  employees: [],
  error: "",
};
export default function employeeReducer(state = initialState, action) {
  console.log("reducer payload", action.payload);
  switch (action.type) {
    case actionType.ADDED_EMPLOYEE:
      return { ...state, created: [...state.created, action.payload] };
    case actionType.UPDATED_EMPLOYEE:
      return { ...state, updated: [...state.updated, action.payload] };
    case actionType.DELETED_EMPLOYEE:
      return { ...state, deleted: [...state.deleted, action.payload] };
    case actionType.GOT_EMPLOYEES:
      return { ...state, employees: action.payload };
    case actionType.GOT_EMPLOYEE:
      return { ...state, employee: action.payload };
    default: {
      return { ...state };
    }
  }
}

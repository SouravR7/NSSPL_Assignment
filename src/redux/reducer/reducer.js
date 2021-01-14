import * as actionTypes from "../actions/actionTypes";
import INIT_STATE from "./initialState";

export function EmployeeReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actionTypes.STORE_EMPLOYEE:
      let storeEmployee = [...state.employee];
      storeEmployee = action.employee;
      return Object.assign({}, state, {
        employee: storeEmployee,
      });
    // case actionTypes.DELETE_EMPLOYEE:
    //   let Employee = [...state.employee]
    //        let emp = Employee.filter((emp) => )
    //   getAnEmployee = action.employee;
    //   return Object.assign({}, state, {
    //     employeeDetails: getAnEmployee,
    //   });
    default:
      return state;
  }
}

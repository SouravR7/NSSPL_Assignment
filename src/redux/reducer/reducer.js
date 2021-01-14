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
    case actionTypes.DELETE_EMPLOYEE:
      var Employee = [...state.employee];
      Employee = Employee.filter(
        (emp) => emp.login !== action.deletepayload.login
      );
      console.log(Employee);
      return Object.assign({}, state, {
        employee: Employee,
      });
    case actionTypes.ADD_EMPLOYEE:
      var addEmployee = [...state.employee];
      let newObj = {
        name: action.addpayload.name,
        avatar_url: action.addpayload.url,
        location: action.addpayload.location,
        login: action.addpayload.login,
        node_id: action.addpayload.node_id,
      };
      addEmployee.push(newObj);
      console.log(addEmployee);
      return Object.assign({}, state, {
        employee: addEmployee,
      });
    case actionTypes.EDIT_EMPLOYEE:
      var editEmployee = [...state.employee];
      editEmployee = editEmployee.map((emp) => {
        if (emp.id === action.editpayload.id) {
          emp.login = action.editpayload.login;
          emp.node_id = action.editpayload.node_id;
        }
        console.log(editEmployee);
        return Object.assign({}, state, {
          employee: editEmployee,
        });
      });
    default:
      return state;
  }
}

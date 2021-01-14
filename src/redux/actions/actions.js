import * as actionTypes from "./actionTypes";

export function addEmployee(addpayload) {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    addpayload,
  };
}

export function storeEmployee(employee) {
  return {
    type: actionTypes.STORE_EMPLOYEE,
    employee,
  };
}

export function getEmployee(employee) {
  return {
    type: actionTypes.GET_EMPLOYEE,
    employee,
  };
}

export function deleteEmployee(deletepayload) {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    deletepayload,
  };
}

export function editEmployee(editpayload) {
  return {
    type: actionTypes.EDIT_EMPLOYEE,
    editpayload,
  };
}

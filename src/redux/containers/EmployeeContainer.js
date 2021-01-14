import { connect } from "react-redux";
import * as apis from "../../api/api";
import * as actions from "../actions/actions";
import EmployeeList from "../../Component/EmployeeList";
import { deleteEmployee } from "../actions/actions";
const mapStateToProps = (state, ownProps) => {
  return {
    employee: state.EmployeeReducer.employee,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEmployees: () => {
      dispatch(apis.getEmployees());
    },
    deleteEmployee: (deletepayload) => {
      dispatch(actions.deleteEmployee(deletepayload));
    },
    addEmployee: (addpayload) => {
      dispatch(actions.addEmployee(addpayload));
    },
    editEmployee: (editpayload) => {
      dispatch(actions.editEmployee(editpayload));
    },
  };
};

const EmployeeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList);

export default EmployeeContainer;

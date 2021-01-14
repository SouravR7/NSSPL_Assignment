import * as actions from "../redux/actions/actions";
import fetch from "cross-fetch";

const api = "https://api.github.com/users";

export function getEmployees() {
  return function (dispatch) {
    return fetch(`${api}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) =>
      response.json().then((js) => {
        //console.log(js);
        dispatch(actions.storeEmployee(js));
      })
    );
  };
}

// export function getOneEmployees(employee) {
//   return function (dispatch) {
//     return fetch(`${api}/${employee.url}`, {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((response) =>
//       response.json().then((js) => {
//         //console.log(js);
//         dispatch(actions.getAnEmployee(js));
//       })
//     );
//   };
// }

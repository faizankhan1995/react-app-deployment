import Constants from '../constants'

function updateEmployee(employee: any){
  return{
      type: Constants.UPDATE_EMPLOYEE,
      payload: employee
  }
}

function setEmployees(employeeList: [any]){
    return{
        type: Constants.SET_EMPLOYEES,
        payload: employeeList
    }
}
function addEmployees(employeeList: [any]){
  return{
      type: Constants.ADD_EMPLOYEES,
      payload: employeeList
  }
}
function removeEmployees(employeeList: [any]){
  return{
      type: Constants.REMOVE_EMPLOYEES,
      payload: employeeList
  }
}
const employeeActions = {
  updateEmployee : updateEmployee,
  setEmployees : setEmployees,
  addEmployees : addEmployees,
  removeEmployees: removeEmployees
}
export default employeeActions;
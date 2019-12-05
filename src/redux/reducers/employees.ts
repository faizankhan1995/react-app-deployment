import Constants from '../constants'

function compareEmployees( firstEmployee:any, secondEmployee:any ) {
  if ( firstEmployee._id < secondEmployee._id ){
    return -1;
  }
  if ( firstEmployee._id > secondEmployee._id ){
    return 1;
  }
  return 0;
}

export default function employees(state = [], action: any) {

	switch (action.type) {
    case Constants.UPDATE_EMPLOYEE:
      let updatedEmployee = action.payload;
      let otherEmployees = state.filter((employee: any) => employee._id !== updatedEmployee._id);
      return [...otherEmployees, updatedEmployee].sort(compareEmployees);
		
    case Constants.SET_EMPLOYEES:
      let newEmployees = action.payload; 
			return newEmployees.slice().sort(compareEmployees);
		
    case Constants.ADD_EMPLOYEES:
      let moreEmployees = action.payload;
			return [...state, ...moreEmployees].sort(compareEmployees);
		
    case Constants.REMOVE_EMPLOYEES:
      let employeesToRemove = action.payload;
      console.log("Employee to Remove : ");
      console.log(employeesToRemove);
			return state.filter((employee: any) => employeesToRemove.find( (employeeToDelete:any) => employee._id !== employeeToDelete._id));
		
		default:
			return state;
	}
}
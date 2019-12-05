import EmployeeImageCard from './employee-image-card-view'
import { connect } from 'react-redux'
import actions from '../../../../../redux/actions';


function mapDispatchToProps(disptach: any) {
  return {
    toogleEmployeeSelect(employee: any) {
      let temp = { ...employee };
      temp.isSelected = temp.isSelected ? false : true ;
      disptach(
        actions.employeeActions.updateEmployee(temp)
      )
    },
    removeEmployee(employee: any) {
      console.log("Dispatching Remove Employee");
      disptach(
        actions.employeeActions.removeEmployees([employee])
      )
    }
  }
}
  
export default connect(null, mapDispatchToProps)(EmployeeImageCard)  

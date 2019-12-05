import AddEmployeeModal from './add-employee-modal-view'
import { connect } from 'react-redux'
import actions from "../../../../../redux/actions";
function mapStateToProps(state: any){
  return {
      selectedCampaign: state.campaigns.find((campaign: any) => campaign.isSelected)
  }
}

const mapDispatchToProps = (disptach:any) => 
  ({
    addEmployee(employee:any) {
      disptach(
        actions.employeeActions.addEmployees([employee])
      )
    }
  })  

export default connect(mapStateToProps,mapDispatchToProps)(AddEmployeeModal)  

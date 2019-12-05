import EmployeeContentView from './employee-content-view'
import { connect } from 'react-redux'
import actions from '../../../redux/actions';

function mapStateToProps(state: any){
  return {
    selectedCampaign: state.campaigns.find((campaign: any) => campaign.isSelected)
  }
}

function mapDispatchToProps(disptach: any) {
  return {
    setEmployees(employees: [any]) {
      disptach(
        actions.employeeActions.setEmployees(employees)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContentView)  

import CampaignEmployeeGrid from './campaign-employee-grid-view'
import { connect } from 'react-redux'
import actions from '../../../../redux/actions';


const mapStateToProps = (state:any) => 
  ({
    selectedCampaign: state.campaigns.find((campaign: any) => campaign.isSelected),
    filteredEmployees: state.employees.filter((employee: any) => employee.personalInfo.firstName.toLowerCase().includes(state.filters.searchText.toLowerCase())),
    selectedCount: state.employees.filter((employee: any) => employee.isSelected).length,
    searchText: state.filters.searchText
  })

function mapDispatchToProps(disptach: any) {
  return {
    toogleEmployeeSelect(employee: any) {
      let temp = { ...employee };
      temp.isSelected = temp.isSelected ? false : true ;
      disptach(
        actions.employeeActions.updateEmployee(temp)
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignEmployeeGrid)  

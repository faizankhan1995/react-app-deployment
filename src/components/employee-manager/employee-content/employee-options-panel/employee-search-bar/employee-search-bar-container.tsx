import EmployeeSearchBar from './employee-search-bar-view'
import { connect } from 'react-redux'
import actions from '../../../../../redux/actions';

const mapDispatchToProps = (disptach:any) => 
({
  updateFilterText(text: string) {
    disptach(
      actions.filterActions.updateFilterText(text)
    )
  }
})  
export default connect(null, mapDispatchToProps)(EmployeeSearchBar)  

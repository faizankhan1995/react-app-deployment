import CampaignListItem from './campaign-list-item-view'
import { connect } from 'react-redux'
import actions from '../../../../../redux/actions';

const mapDispatchToProps = (disptach: any) => 
  ({
    selectCampaign(campaign: any) {
      disptach(
        actions.campaignActions.selectCampaign(campaign)
      )
    },
    removeCampaigns(campaigns: [any]) {
      disptach(
        actions.campaignActions.removeCampaigns(campaigns)
      )
    },
    setEmployees(employees: [any]) {
      disptach(
        actions.employeeActions.setEmployees(employees)
      )
    }
  })  

export default connect(null, mapDispatchToProps)(CampaignListItem)  

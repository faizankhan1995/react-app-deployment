import CampaignPanel from './campaign-panel-view'
import { connect } from 'react-redux'
import actions from '../../../redux/actions';

const mapStateToProps = (state:any) => 
  ({
    campaigns: state.campaigns
  })

const mapDispatchToProps = (disptach:any) => 
  ({
    setCampaigns(campaigns:[any]) {
      disptach(
        actions.campaignActions.setCampaigns(campaigns)
      )
    },
    addCampaigns(campaigns:[any]) {
      disptach(
        actions.campaignActions.addCampaigns(campaigns)
      )
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(CampaignPanel)  

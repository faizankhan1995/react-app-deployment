import CampaignListContent from './campaign-list-content-view'
import { connect } from 'react-redux'
import actions from '../../../../redux/actions';

const mapStateToProps = (state:any) => 
  ({
    campaigns: state.campaigns
  })

const mapDispatchToProps = (disptach:any) => 
  ({
    selectCampaign(campaign:any) {
      disptach(
        actions.campaignActions.selectCampaign(campaign)
      )
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListContent)  

import EmployeeOptionsPanel from './employee-options-panel-view'
import { connect } from 'react-redux'
import actions from '../../../../redux/actions';

function mapStateToProps(state: any){
  return {
      selectedCampaign: state.campaigns.find((campaign: any) => campaign.isSelected)
  }
}

const mapDispatchToProps = (disptach:any) => 
  ({
    selectCampaign(campaign:any) {
      disptach(
        actions.campaignActions.selectCampaign(campaign)
      )
    }
  })  

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeOptionsPanel)  

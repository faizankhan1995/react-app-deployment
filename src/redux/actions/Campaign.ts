import Constants from '../constants'

function selectCampaign(campaign: any) {
    return {
        type: Constants.SELECT_CAMPAIGN,
        payload: campaign
    }
}
function updateCampaign(campaign: any) {
    return {
        type: Constants.UPDATE_CAMPAIGN,
        payload: campaign
    }
}

function setCampaigns(campaignList: [any]) {
    return {
        type: Constants.SET_CAMPAIGNS,
        payload: campaignList
    }
}
function addCampaigns(campaignList: [any]) {
    return {
        type: Constants.ADD_CAMPAIGNS,
        payload: campaignList
    }
}
function removeCampaigns(campaignList: [any]) {
    return {
        type: Constants.REMOVE_CAMPAIGNS,
        payload: campaignList
    }
}

const campaignActions = {
  selectCampaign : selectCampaign,
  updateCampaign : updateCampaign,
  setCampaigns : setCampaigns,
  addCampaigns : addCampaigns,
  removeCampaigns : removeCampaigns
  }
export default campaignActions;

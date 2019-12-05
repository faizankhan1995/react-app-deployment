import Constants from '../constants'


function compareCampaigns( firstCampaign:any, secondCampaign:any ) {
  if ( firstCampaign._id < secondCampaign._id ){
    return -1;
  }
  if ( firstCampaign.albumID > secondCampaign.albumID ){
    return 1;
  }
  return 0;
}
export default function campaigns(state = [] , action: any) {

	switch (action.type) {
    case Constants.UPDATE_CAMPAIGN:
      let updatedCampaign = action.payload;
			let otherCampaigns = state.filter((campaign: any) => campaign._id !== updatedCampaign._id);
			return [...otherCampaigns, updatedCampaign].sort(compareCampaigns);

    case Constants.SET_CAMPAIGNS:
      let newCampaigns = action.payload; 
			return newCampaigns.slice().sort(compareCampaigns);
	
    case Constants.ADD_CAMPAIGNS:
      let moreCampaigns = action.payload;
			return [...state, ...moreCampaigns].sort(compareCampaigns);

    case Constants.REMOVE_CAMPAIGNS:
      let campaignsToRemove = action.payload;
			return state.filter((campaign: any) => campaignsToRemove.find( (campaignToRemove: any) => campaignToRemove._id === campaign._id) );

		case Constants.SELECT_CAMPAIGN:
      let campaigns = [...state];
      let campaignToSelect = action.payload;
			campaigns.forEach( (campaign:any)=>{
				if (campaign._id === campaignToSelect._id)
          campaign.isSelected = true;
				else
          campaign.isSelected = false;
			} )
			return campaigns;
		default:
			return state;
	}
}

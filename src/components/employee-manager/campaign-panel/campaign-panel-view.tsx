import React, { useState , MouseEvent, useEffect } from 'react';
import { notification, Skeleton, Button, Icon } from 'antd';
import CampaignListContent from './campaign-list-content';
import './campaign-panel.css';
import * as CampaignApiHandler from "../../../dataProvider/campaign-api-handler";

const CampaignPanel: React.FC = (props:any) => {

  let {
    campaigns,
    setCampaigns,
    addCampaigns
  } = props;

  // const [campaigns, setCampaigns] = useState(new Array());
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetch Campaigns from API and set campaigns variable
   */
  useEffect( () => {

    (async function anyNameFunction() {
      try{
        let fetchedCampaigns = await CampaignApiHandler.getAllCampaigns();
        setCampaigns(fetchedCampaigns);
        setIsLoading(false);
      }catch(err){
        console.log(err);
        notification['error']({
          message: 'Error Fetching Campaigns',
          description:
            `${err.message}.`,
        });
      }
      })();
    }, []);  // [] means effect function should be called once: after the first mount/render only.

  async function createCampaign_OnClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    console.log('Create Campaign clicked.');

    let campaignName = campaigns? 'Campaign ' + campaigns.length : 'Campaign 1';
    
    // axios.interceptors.request.use(request => {
    //   console.log('Starting Request', request)
    //   return request
    // })

    // Send API POST Request to Add Campaign
    let newCampaign = { 
        name: campaignName,
      };
    try{
      newCampaign = await CampaignApiHandler.addCampaign(newCampaign);
      console.log("Campaign Added.");
      console.log(newCampaign);
      if(newCampaign){
        // Handle Success
        addCampaigns([newCampaign]);
        notification['success']({
          message: 'Campaign Added',
          description:
            `${newCampaign.name}.`,
        });
      }
    }catch(err){
      console.log(err);
      notification['error']({
        message: 'Error',
        description:
          `${err.message}`,
      });
    }
  }

 
  return (
    
    <div className="CampaignPanel">
      <Skeleton loading={isLoading} active className="campaign-skeleton" paragraph={{ rows: 10 }} >
        <div style={{ textAlign: 'right', margin: '6px 20px 6px 20px' }}>
          <Button onClick={createCampaign_OnClick}>
          <Icon type="plus-circle" />
            <span>Add Campaign</span>
          </Button>
        </div>
          <CampaignListContent />
      </Skeleton>
    </div>
  );
}

export default CampaignPanel;

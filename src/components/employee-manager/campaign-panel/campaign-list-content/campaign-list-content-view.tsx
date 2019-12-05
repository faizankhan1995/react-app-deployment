import React from 'react';
import { Menu, Empty, Icon } from 'antd';
import CampaignListItem from "./campaign-list-item";
import './campaign-list-content.test';

const CampaignListContent: React.FC<any> = (props: any) => {
  let { 
    campaigns,
    selectCampaign,
  } = props;
  
  /**
   * Event on an campaign being clicked from menu.
   * @param event 
   */
  function singleCampaign_OnClick(event: any) {
    // Update Employee Content to Show All Employees of selected campaign  
    let campaign = campaigns[event.key];
    selectCampaign(campaign);    
  }

  if (!campaigns || !campaigns.length) {
    return (
      <Empty 
        style={{ marginTop: '60%' }}
        description={"No Campaigns"} />
    ); 
  }

  return (
    <div className="CampaignListContent">
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }} >
          {
            campaigns.map((campaign: any, key: number) => (
              <Menu.Item key={key} >
                <CampaignListItem campaign={campaign}/> 
              </Menu.Item>
            ))
          }
      </Menu>
    </div>
  );
}

export default CampaignListContent;

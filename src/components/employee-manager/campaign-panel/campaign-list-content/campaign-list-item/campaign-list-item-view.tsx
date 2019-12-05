import React, { useEffect, useState } from 'react';
import { Input, notification, Icon, Popconfirm } from 'antd';
import './campaign-list-item.css';
import * as campaignApiHandler from "../../../../../dataProvider/campaign-api-handler";
import * as employeeApiHandler from "../../../../../dataProvider/employee-api-handler";
const CampaignListItem: React.FC<any> = (props: any) => {
  let {
    campaign,
    selectCampaign,
    removeCampaigns,
    setEmployees
  } = props;
  let [actionsVisibility, setActionsVisibility] = useState(false);
  let [isEditable, setIsEditable] = useState(false);
  let editInputRef: any = React.createRef();
  let [campaignName, updateCampaignName] = useState(campaign.name);

  useEffect(() => {
    // if (campaign.name == "Default")
    //   setActionsVisibility(false);
    if(isEditable)
      editInputRef.current.focus()
  })

  async function singleCampaign_OnClick(event: any) {
    selectCampaign(campaign);

    let fetchedEmployees = await employeeApiHandler.getEmployeesByCampaign(campaign._id);
    setEmployees(fetchedEmployees);

  }
  
  function singleCampaign_OnMouseEnter(event: any) {
    setActionsVisibility(true);
  }
  
  function singleCampaign_OnMouseLeave(event: any) {
    setActionsVisibility(false);
  }
  
  function campaignName_OnChange(event: any) {
    updateCampaignName(event.target.value);
  }

  function editCampaign_OnClick(event: any) {
    event.stopPropagation();
    setIsEditable(true);
  }

  async function confirmEdit_OnClick(event: any) {
    // Create updated Campaign Object from current (Not updating current campaign incase update fails)
    let updatedCampaign = campaign;
    updatedCampaign.name = campaignName;
    try {
      setIsEditable(false);
      await campaignApiHandler.updateCampaign(updatedCampaign);
      updateCampaignName(campaignName);
      notification['success']({
        message: 'Success!',
        description:
          `Campaign Name Updated.`,
      });
    }catch (error) {
      updateCampaignName(campaign.name);
    }
  }

  function cancelEdit_OnClick(event: any) {
    event.stopPropagation();
    setIsEditable(false);
    updateCampaignName(campaign.name);
  }

  function deleteCampaign_OnClick(event: any) {
    event.stopPropagation();
  }

  async function deleteCampaign_OnConfirm(event: any) {
    event.stopPropagation();
    // Delete Campaign by sending an API Call.
    try {
      let res = await campaignApiHandler.deleteCampaign(campaign);
      console.log("Remove Campaign Response");
      console.log(res);
      removeCampaigns([campaign]);
      
      notification['success']({
        message: 'Success.',
        description:`Campaign ${campaign.name} Deleted!`,
        });

    } catch (error) {
        notification['error']({
        message: 'Error.',
        description:`${error.message}`,
        });
    }
  }

  function deleteCampaign_OnCancel(event: any) {
    event.stopPropagation();
  }

  return (
   <div onMouseLeave={singleCampaign_OnMouseLeave} 
        onMouseEnter={singleCampaign_OnMouseEnter} 
        onClick={singleCampaign_OnClick}
        style={{display:"flex", flexDirection:"row"}} >
     <div style={{flexGrow:3}}>
        <Icon type="cluster" />
        {
        isEditable
        ? <Input  value={campaignName}
                  onChange={campaignName_OnChange}
                  ref={editInputRef}
                  allowClear 
                  style={{width:"140px", border:"none", padding:"0px"}}/>
        : <span>{campaign.name}</span>  
        }
      </div>
      {
      actionsVisibility
      ? <div style={{flexGrow:1, textAlign:"right"}}>
          {isEditable
          ? ( <div style={{marginLeft:40}}>
                <a onClick={confirmEdit_OnClick} >
                  <Icon type="check" 
                        key="confirmEditCampaign"
                        title="Confirm Edit Campaign Name"
                        style={{fontSize:15, marginRight:20}}/>
                </a>
                  <a onClick={cancelEdit_OnClick}>
                    <Icon type="close" 
                          key="cancelEditCampaign"
                          title="Cancel Edit Campaign"
                          style={{fontSize:15, color:"red"}}/>
                  </a>
              </div> )
          : ( 
              <div style={{marginLeft:40}}> 
                <a onClick={editCampaign_OnClick} >
                  <Icon type="edit" 
                        key="editCampaign"
                        title="Edit Campaign Name"
                        style={{fontSize:15, marginRight:20}}/>
                </a>
                <Popconfirm title={`${campaign.name} & its Employees will be deleted. Are you sure?`}
                okText="Yes"
                cancelText="No"
                onConfirm={deleteCampaign_OnConfirm}
                onCancel={deleteCampaign_OnCancel} >     
                    <a onClick={deleteCampaign_OnClick}>
                      <Icon type="delete" 
                            key="deleteCampaign"
                            title="Delete Campaign"
                            style={{fontSize:15, color:"red"}}/>
                    </a>
              </Popconfirm>
            </div> )
          }
        </div>
        : null
        }
   </div>
  );
}

export default CampaignListItem;

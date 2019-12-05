import React, { useState, useEffect } from 'react';
import { Layout, notification } from 'antd';
import CampaignEmployeeGrid from './campaign-employee-grid';
import EmployeeOptionsPanel from './employee-options-panel';
import './employee-content.css';
import * as EmployeeApiHandler from "../../../dataProvider/employee-api-handler";
const { Content } = Layout;

const EmployeeContent: React.FC = (props:any) => {
  let {
    selectedCampaign,
    setEmployees
  } = props;
  const [viewStyle, setViewStyle] = useState("grid");
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Fetch Employees from API and set enmployees variable
   */
  useEffect( () => {
    (async function dummyFunction() {
      try {
        if (selectedCampaign)
        {
          setIsLoading(true);
          let fetchedEmployees = await EmployeeApiHandler.getEmployeesByCampaign(selectedCampaign._id);
          setEmployees(fetchedEmployees);
          setIsLoading(false);
        }
      }catch(err){
        console.log(err);
        notification['error']({
          message: 'Error Fetching Campaign Employees',
          description:
            `${err.message}.`,
        });
      }
      })();
    }, []);  // [] means effect function should be called once: after the first mount/render only.


  function viewStyle_OnClick(event: any) {
    setViewStyle(event.key);
  }
  
  return (
    <div className="EmployeeContent">
      <EmployeeOptionsPanel viewStyle={viewStyle}
                            viewStyle_OnClick={viewStyle_OnClick} />

      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 750,
        }} >
        <CampaignEmployeeGrid isLoading={isLoading} />
      </Content>
    </div>
  );
}

export default EmployeeContent;

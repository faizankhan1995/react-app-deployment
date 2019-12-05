import React, { useState, useEffect } from 'react';
import { Card, Icon, Popconfirm, Checkbox, Spin, notification } from 'antd';
import EmployeeDetailsDrawer from './employee-details-drawer';
import ImagePreviewModal from './image-preview-modal';
import * as employeeApiHandler from "../../../../../dataProvider/employee-api-handler";
import './employee-image-card.css';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';


const { Meta } = Card;

const EmployeeImageCard: React.FC<any> = (props: any) => {
  
  let {
    index,
    employee,
    toogleEmployeeSelect,
    removeEmployee,
  } = props;
  
  const [imagePreviewUrl, setImagePreviewUrl] = useState();
  const [employeeDetailsVisibility, setEmployeeDetailsVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [checkboxVisiblility, setcheckboxVisiblility] = useState(employee.isSelected);

  employee.profileImageURL = "https://scontent.fisb3-1.fna.fbcdn.net/v/t1.0-0/c200.0.600.600a/p600x600/72262137_2893917777302324_2298028208844439552_n.jpg?_nc_cat=110&_nc_eui2=AeGkoMPZMTfRSFjBFoRl2rXcSy1icwxoCiNSyUZAuSyd01VVWHYl1UXhZvF-USFnptrmxEObBDnQLugb_T0BlAlO01fTzN3rh3X-OjExEvi5lA&_nc_ohc=G68U0--0uxoAQm9HgCUQLhk6hGAA7EWPRYf6W03bltgshwSvCATu3u6rQ&_nc_ht=scontent.fisb3-1.fna&oh=c8c8e6880f04bb74eb828904a9b95277&oe=5E442BB1"

  useEffect(()=>{
    console.log("updating item");
    setcheckboxVisiblility(employee.isSelected);
  }, [employee]);

  function employeeDetails_OnClick(event: any) {
    setEmployeeDetailsVisibility(true);
  };
  
  function employeeDetails_OnClose(event: any) {
    setEmployeeDetailsVisibility(false);
  };
  
  function editEmployee_OnClick(event: any) {
    setEmployeeDetailsVisibility(true);
  };
  
  function previewImage_OnClick(event: any) {
    if (employee) {
      let url = employee.profileImageURL;
      setImagePreviewUrl(url);
      console.log(employee);
    }
  };
  
  function imagePreview_OnCancel(event: any) {
    setImagePreviewUrl(null);
  };

  async function deleteEmployee_OnConfirm(event: any) {
    try {
      await employeeApiHandler.deleteEmployee(employee._id)

      notification['success']({
        message: 'Employee Deleted',
        description:
          `Successfully deleted ${employee.personalInfo.firstName},${employee.personalInfo.lastName}.`,
      });

      // Also remove employee from visible Grid 
      removeEmployee(employee);

    } catch (error) {
      notification['error']({
        message: 'Failed to deleted Employee.',
        description:
          `${error.message}.`,
      });
    }

  }
  function onItemSelectionChanged(event: CheckboxChangeEvent) {
    console.log(event);
    //e.target.checked;

    if (event.target.checked) {
      setcheckboxVisiblility(true);
      if(!employee.isSelected)
        toogleEmployeeSelect(employee)
    }
    else {
      setcheckboxVisiblility(false);
      if(employee.isSelected)
        toogleEmployeeSelect(employee)
    }
  }

  return (
    <div className="EmployeeImageCard">
      <Checkbox
        checked={checkboxVisiblility}
        onChange={onItemSelectionChanged}
        value={index}
        style={{
          marginLeft: 3,
          position: 'absolute',
          zIndex: 1
        }} />
      <Card hoverable
            cover={
              isLoading ?
                <Spin style={{padding:15}} indicator = {<Icon type="loading" style={{ fontSize: 34 }}  /> }/>
              :
                 <img alt={employee.personalInfo.firstName} 
                    src={employee.profileImageURL}
                    onClick={previewImage_OnClick} />
            }
            actions={[
              // <Icon type="edit" 
              //       key="edit" 
              //       title="Edit Employee Details"
              //       onClick={editEmployee_OnClick} />,
              <Popconfirm title={`Are you sure delete ${employee.personalInfo.firstName}?`}
                          onConfirm={deleteEmployee_OnConfirm}
                          okText="Yes"
                          cancelText="No" >
                <Icon type="delete" 
                      key="delete" 
                      title="Delete Employee"  />
              </Popconfirm>,
              <Icon type="info-circle" 
                    key="info-circle" 
                    title="Employee Details"
                    onClick={employeeDetails_OnClick} />,
        ]} >
        <Meta title={employee.personalInfo.firstName + "," + employee.personalInfo.lastName}/>
      </Card>
      
      <ImagePreviewModal  imagePreviewUrl={imagePreviewUrl}
                          imagePreview_OnCancel={imagePreview_OnCancel}
                          employee={employee} />

      <EmployeeDetailsDrawer  employeeDetailsVisibility={employeeDetailsVisibility}
                              employeeDetails_OnClose={employeeDetails_OnClose}
                              employee={employee} />

    </div>
  );
}

export default EmployeeImageCard;

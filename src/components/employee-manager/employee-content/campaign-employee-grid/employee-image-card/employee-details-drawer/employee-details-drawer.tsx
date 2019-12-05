import React from 'react';
import { Drawer, Descriptions, Tooltip, Button } from 'antd';
import './employee-details-drawer.css';

const EmployeeDetailsDrawer: React.FC<any> = (props: any) => {
  let {
    employeeDetailsVisibility, 
    employeeDetails_OnClose,
    employee
      } = props;

  return (
    <div className="EmployeeDetailsDrawer">
      <Drawer
          width={400}
          placement="right"
          closable={false}
          onClose={employeeDetails_OnClose}
          visible={employeeDetailsVisibility}
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <img alt="Test"
               src={employee.profileImageURL}
            height="300" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin:"10px" }}>
        <Tooltip title="Edit Employee Details">
          <Button icon="edit" type="primary" shape="circle" />
        </Tooltip>
        </div>
          <Descriptions
          layout="horizontal"
          bordered
          title={employee.companyInfo.employmentStatus + " : " + employee.personalInfo.firstName + ", " + employee.personalInfo.lastName}
          column={1}
          style={{
            marginTop: 30
          }} >
          <Descriptions.Item label="First Name">{employee.personalInfo.firstName}</Descriptions.Item>
          <Descriptions.Item label="Last Name">{employee.personalInfo.lastName}</Descriptions.Item>
          <Descriptions.Item label="Address">{employee.personalInfo.address}</Descriptions.Item>
          <Descriptions.Item label="Primary Contact">{employee.personalInfo.primaryContact}</Descriptions.Item>
          <Descriptions.Item label="Emergency Contact">{employee.personalInfo.emergencyContact}</Descriptions.Item>
          <Descriptions.Item label="CNIC">{employee.personalInfo.cnic}</Descriptions.Item>
          <Descriptions.Item label="Bank Account">{employee.personalInfo.bankAccountNumber}</Descriptions.Item>
          <Descriptions.Item label="Email">{employee.companyInfo.email}</Descriptions.Item>
          <Descriptions.Item label="Attendence Id">{employee.companyInfo.attendanceId}</Descriptions.Item>
          <Descriptions.Item label="HRMS Id">{employee.companyInfo.hrmsId}</Descriptions.Item>
          <Descriptions.Item label="Salary">{employee.companyInfo.basicSalary}</Descriptions.Item>
          <Descriptions.Item label="Sales Target">{employee.companyInfo.salesTarget}</Descriptions.Item>
        </Descriptions>
      </Drawer>
    </div>
  );
}

export default EmployeeDetailsDrawer;

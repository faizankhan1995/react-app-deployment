import React, { useState } from 'react';
import { Steps, Button, Upload, Icon, Input, Form } from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import AvatarImage from "../image-avatar";
import './personal-details-form.css';
import {EmployeeContext} from '../../add-employee-modal';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const PersonalDetailsForm: React.FC<any> = (props: any) => {
  let {
    getFieldDecorator
  } = props.form;

  let [employeePersonalInfo, setEmployeePersonalInfo]: any[] = React.useContext(EmployeeContext);
  
  function handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;

    setEmployeePersonalInfo({
      ...employeePersonalInfo,
      [name]: value
    });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    props.form.validateFields((err:any, values:any) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
  return (
    <Form {...formItemLayout} layout="horizontal" onSubmit={handleFormSubmit}>
      <h3> Personal Details</h3>
      <Form.Item label="First Name" >
        {getFieldDecorator('firstName', {
          initialValue: employeePersonalInfo.firstName,
          rules: [{ required: true, message: `Please input employee's firstname!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="First Name"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="Last Name" >
        {getFieldDecorator('lastName', {
          initialValue: employeePersonalInfo.lastName,
          rules: [{ required: true, message: `Please input employee's lastname!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Last Name"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="Address" >
        {getFieldDecorator('address', {
          initialValue: employeePersonalInfo.address,
          rules: [{ required: true, message: `Please input employee's address!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Address"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="Primary Contact" >
        {getFieldDecorator('primaryContact', {
          initialValue: employeePersonalInfo.primaryContact,
          rules: [{ required: true, message: `Please input employee's contact!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Contact Number"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="Emergency Contact" >
        {getFieldDecorator('emergencyContact', {
          initialValue: employeePersonalInfo.emergencyContact,
          rules: [{ required: true, message: `Please input emergency Contact!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Emergency Contact Number"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="CNIC" >
        {getFieldDecorator('cnic', {
          initialValue: employeePersonalInfo.cnic,
          rules: [{ required: true, message: `Please input employees CNIC!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="CNIC"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
      <Form.Item label="Bank Account Number" >
        {getFieldDecorator('bankAccountNumber', {
          initialValue: employeePersonalInfo.bankAccountNumber,
          rules: [{ required: true, message: `Please input Bank Account Number!` }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Bank Account Number"
            onChange={handleInputChange}
          />,
        )}
      </Form.Item>
    </Form>
);
}

export default Form.create()(PersonalDetailsForm);;
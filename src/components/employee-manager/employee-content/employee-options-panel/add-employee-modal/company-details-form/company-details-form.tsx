import React from 'react';
import { Form, Input, DatePicker, Radio, Icon } from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import './company-details-form.css';
import { EmployeeContext } from '../../add-employee-modal';

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

const CompanyDetailsForm: React.FC<any> = (props: any) => {
  let {
    getFieldDecorator
  } = props.form;
  let [employeeCompanyInfo, setEmployeeCompanyInfo]: any[] = React.useContext(EmployeeContext);

  function handleDateChange(event: any) {
    console.log("Date Changed : ");
    console.log(event);
  }

  function handleInputChange(event: any) {
    const target = event.target;
    console.log(target);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    console.log(`Input Changed\n Name: ${name} -- Value: ${value}`);
    setEmployeeCompanyInfo({
      ...employeeCompanyInfo,
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
    <h3> Company Details</h3>
    <Form.Item label="Email" >
        {getFieldDecorator('email', {
        initialValue: employeeCompanyInfo.email,
        rules: [{ required: true, message: `Please input employee's email!` }],
        })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Company Email"
          onChange={handleInputChange}
            />,
          )}
      </Form.Item>
      <Form.Item label="Attendance Id">
        {getFieldDecorator('attendanceId', {
        initialValue: employeeCompanyInfo.attendanceId,
        rules: [{ required: true, message: `Please input employee's Attendence Id!` }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Attendence Id"
          onChange={handleInputChange}
        />,
      )}
      </Form.Item>

      <Form.Item label="HRMS Id">
        {getFieldDecorator('hrmsId', {
        initialValue: employeeCompanyInfo.hrmsId,
        rules: [{ required: true, message: `Please input employee's Attendence Id!` }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="HRMS Id"
          onChange={handleInputChange}
        />,
      )}
      </Form.Item>
      <Form.Item label="Basic Salary" >
        {getFieldDecorator('basicSalary', {
        initialValue: employeeCompanyInfo.basicSalary,
        rules: [{ required: true, message: `Please input employee's basic Salary!` }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Basic Salary"
          onChange={handleInputChange}
        />,
      )}
      </Form.Item>
      <Form.Item label="Sales Target" >
        {getFieldDecorator('salesTarget', {
        initialValue: employeeCompanyInfo.salesTarget,
        rules: [{ required: true, message: `Please input employee's sales Target!` }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Sales Target"
          onChange={handleInputChange}
        />,
      )}
      </Form.Item>
      <Form.Item label="Appointment Date" >
        {getFieldDecorator('appointmentDate', {
        
        rules: [{ required: true, message: `Please input employee's appointment Date!` }],
      })(
        <DatePicker placeholder="Appointment Date"
                    format={"YYYY/MM/DD"}
                    onChange={handleDateChange} />,
      )}
      </Form.Item>
      <Form.Item label={employeeCompanyInfo.employmentStatus}>
        {getFieldDecorator('employmentStatus', {
        initialValue: employeeCompanyInfo.employmentStatus,
        rules: [{ required: true, message: `Please select employee's current Status!` }],
      })(
        <Radio.Group id="employmentStatus"
          onChange={handleInputChange} >
          <Radio value={1}>
            Employed
          </Radio>
          <Radio value={2}>
            Terminated
          </Radio>
          <Radio value={3}>
            Resigned
          </Radio>
        </Radio.Group>,
      )}
      </Form.Item>
      <Form.Item label="Documentation" >
        {getFieldDecorator('isDocumented', {
        initialValue: employeeCompanyInfo.isDocumented,
        rules: [{ required: true, message: `Please select if employee is documented!` }],
      })(
        <Radio.Group 
            onChange={handleInputChange} >
        <Radio value={true}>
          Yes
        </Radio>
        <Radio value={false}>
          No
        </Radio>
      </Radio.Group>,
      )}
      </Form.Item>
      <Form.Item label="Employee Card" >
        {getFieldDecorator('isEmployeeCardHolder', {
        initialValue: employeeCompanyInfo.isEmployeeCardHolder,
        rules: [{ required: true, message: `Please select if employee has Employee Card!` }],
      })(
        <Radio.Group
          onChange={handleInputChange} >
        <Radio value={true}>
          Yes
        </Radio>
        <Radio value={false}>
          No
        </Radio>
      </Radio.Group>,
      )}
      </Form.Item>
      <Form.Item label="Insurance Card" >
        {getFieldDecorator('isInsuranceCardHolder', {
        initialValue: employeeCompanyInfo.isInsuranceCardHolder,
        rules: [{ required: true, message: `Please select if employee has insurance Card!` }],
      })(
        <Radio.Group
          onChange={handleInputChange} >
        <Radio value={true}>
          Yes
        </Radio>
        <Radio value={false}>
          No
        </Radio>
      </Radio.Group>,
      )}
      </Form.Item>
  </Form>

  );
}

export default Form.create()(CompanyDetailsForm);
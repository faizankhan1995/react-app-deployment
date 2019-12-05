import React, { useState } from 'react';
import { Steps, Button, message, Modal, Icon, notification } from 'antd';
import './add-employee-modal.css';
import PersonalDetailsForm from "./personal-details-form";
import CompanyDetailsForm from "./company-details-form";
import AvatarImage from "./image-avatar";
import * as emoloyeeApiHandler from "../../../../../dataProvider/employee-api-handler";
import * as fs from 'fs'

const dummyEmployee = {
  personalInfo: {
    firstName: "",
    lastName: "",
    address: "",
    primaryContact: "",
    emergencyContact: "",
    cnic: "",
    bankAccountNumber: "",
  },
  companyInfo: {
    email: "@allstar.com",
    campaignId: "",
    hrmsId: "",
    employmentStatus: "Pakistan",
    attendanceId: "",
    basicSalary: "",
    salesTarget: "",
    appointmentDate: (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear(),
    isDocumented: false,
    isEmployeeCardHolder: false,
    isInsuranceCardHolder: false,
  },
  attachmentFiles: [],
}

const { Step } = Steps;
const steps = [
  {
    title: 'Personal',
    contentId: 1,
    icon: 'user',
  },
  {
    title: 'Company',
    contentId: 2,
    icon: 'idcard',
  },
  {
    title: 'Verify',
    contentId: 3,
    icon: 'save',
  },
];
export const EmployeeContext = React.createContext([{}, () => { }]);

const AddEmployeeModal: React.FC<any> = (props: any) => {
  let {
    selectedCampaign,
    addEmployee,
    addEmployeeModalModalVisibility,
    addEmployeeModal_OnCancel,
    addEmployeeModal_OnOk,
  } = props;

  let [current, setCurrent] = useState(0);
  let [employeePersonalInfo, setEmployeePersonalInfo] = useState(dummyEmployee.personalInfo);
  let [employeeCompanyInfo, setEmployeeCompanyInfo] = useState(dummyEmployee.companyInfo);
  let [filesToUpload, setFilesToUpload] = useState([]);

  function next() {
    setCurrent(current + 1);
  }

  function prev() {
    setCurrent(current - 1);
  }
  function reset() {
    setFilesToUpload([]);
    setEmployeePersonalInfo(dummyEmployee.personalInfo);
    setEmployeeCompanyInfo(dummyEmployee.companyInfo);
    setCurrent(0);
  }

  function base64_encode(file: File) {
    // read binary data
    var bitmap = fs.readFileSync(file.name, 'base64');
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
  }
  async function submitEmployee() {
    let employee = {
      personalInfo: employeePersonalInfo,
      companyInfo: employeeCompanyInfo,
      attachmentFiles: filesToUpload
    }
    employee.companyInfo.campaignId = selectedCampaign._id;
    // TODO: Upload Files
    // if (filesToUpload.length > 0) {
    //   // @ts-ignore
    //   let file = filesToUpload[0].originFileObj;
    //   console.log(file);
    //   let image = base64_encode(file);
    //   console.log(image);
    // }
    // return;

    // TODO: API Call to Add new Employee
    try {
      
    let addedEmployee = await emoloyeeApiHandler.addNewEmployee(employee);

    // To Show Newly added Employee on Grid.
    addEmployee(addedEmployee);

      notification['success']({
        message: 'Success!',
        description:
          `Employee Added Successfully.`,
      });
      reset();
    }
    catch (error) {
      notification['error']({
        message: 'Error!',
        description:
          `Failed to Add Employee. ${error.message}`,
      });
    }
    addEmployeeModal_OnCancel(); // Hide Modal 
  }
  function renderForm(index: number) {
    switch (index) {
      case 1:
        return (
          <EmployeeContext.Provider value={[employeePersonalInfo, setEmployeePersonalInfo]}>
            <PersonalDetailsForm />
          </EmployeeContext.Provider>
        );
      case 2:
        return (
          <EmployeeContext.Provider value={[employeeCompanyInfo, setEmployeeCompanyInfo]}>
            <CompanyDetailsForm />
          </EmployeeContext.Provider>
        );
      default:
        return <h1> {selectedCampaign.name} </h1>
    }
  }
  return (
    <div className="AddEmployeeModal">
      <Modal className="add-employee-modal"
        visible={addEmployeeModalModalVisibility}
        okText={"Submit"}
        width="50%"
        onOk={addEmployeeModal_OnOk}
        onCancel={addEmployeeModal_OnCancel}
        footer={[]} >
        <div className="avatar-image">
          <AvatarImage setFilesToUpload={setFilesToUpload}
            filesToUpload={filesToUpload} />
        </div>

        <div className="steps-content">
          {/* Show Forms based on index*/
            renderForm(steps[current].contentId)
          }
        </div>

        <div className="add-employee-steps">
          <Steps current={current} >
            {steps.map(item => (
              <Step key={item.title} title={item.title} icon={<Icon type={item.icon} />} />
            ))}
          </Steps>

          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={next}>
                Next
            </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={submitEmployee}>
                Save
            </Button>
            )}
            {current > 0 && (
              <Button style={{ marginLeft: 8 }} onClick={prev}>
                Previous
            </Button>
            )}

          </div>

        </div>
      </Modal>
    </div>
  );
}

export default AddEmployeeModal;

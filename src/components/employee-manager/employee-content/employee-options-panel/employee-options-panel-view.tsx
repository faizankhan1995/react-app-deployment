import React, { useState, MouseEvent } from 'react';
import { Breadcrumb, Row, Col, Icon, notification, Dropdown, Menu, Button } from 'antd';
import Add from '../../../../assets/icons/add';
import AddEmployeeModal from './add-employee-modal';
import EmployeeSearchBar from  './employee-search-bar';
import './employee-options-panel.css';

const viewStyleOptions = [
  {
    "Name" : "Grid",
    "Key" : "grid",
    "Icon" : "appstore"
  },
  {
    "Name" : "Map",
    "Key" : "map",
    "Icon" : "global"
  }
];

const EmployeeOptionsPanel: React.FC<any> = (props: any) => {
  const [addEmployeeModalModalVisibility, setAddEmployeeModalModalVisibility] = useState(false);
  let { 
        selectedCampaign,
        viewStyle,
        viewStyle_OnClick,
      } = props;

  let selectedViewStyle = viewStyleOptions.filter(obj => { return obj.Key === viewStyle})[0];

  function addEmployeeModal_OnClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    //Show Upload Image Dialog
    setAddEmployeeModalModalVisibility(true);  
  }

  async function addEmployeeModal_OnOk(event: any) {
    setAddEmployeeModalModalVisibility(false);
  }

  function addEmployeeModal_OnCancel(event: any) {
    //Hide add employee Dialog
    setAddEmployeeModalModalVisibility(false);

  };

  if (!selectedCampaign) {
    return (
      <div></div>
    );
  }

  return (
    <div className="EmployeeOptionsPanel">
      <Row style={{ background: 'white', marginBottom: 6 }}>
        <Col span={8}>
          <Breadcrumb style={{ margin: '16px 0', marginLeft: 20, fontSize: 16 }}>
            <Breadcrumb.Item>{selectedCampaign.name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col span={8} style={{ marginTop: 6 }}>
          <EmployeeSearchBar />
        </Col>
        <Col span={8} style={{textAlign: 'right', marginTop: 6, paddingRight: 20}}>
          <Button title="Add New Employee" style={{marginLeft: 5}} onClick={addEmployeeModal_OnClick}>
          <Icon type="plus" style={{fill: 'white', fontSize: 18, marginRight: 5, marginBottom: -2}}/>
            <Add style={{fill: 'white', width: 16, marginRight: 5, marginBottom: -2}} />
            <span>Add Employee</span>
          </Button>
          
          <Dropdown placement="bottomCenter" 
                    overlay={
                      <Menu multiple={false} 
                            selectedKeys={[ viewStyle ]}
                            onClick={ viewStyle_OnClick }>
                        {
                          viewStyleOptions.map((item) => {
                            return (
                              <Menu.Item key={item.Key} 
                                         style={{ width: 120 }}>
                                <Icon type={item.Icon}
                                      style={{ marginRight: 10 }} />
                                {item.Name}
                              </Menu.Item>
                            );
                          })
                        }
                      </Menu>
                    }>
            <Button
                    title="View Style"
                    style={{marginLeft: 5}}>
              <Icon type={selectedViewStyle.Icon} 
                    style={{ fontSize: 16, verticalAlign: 'middle' }} />
            </Button>
          </Dropdown>
        </Col>
      </Row>

      <AddEmployeeModal addEmployeeModalModalVisibility={addEmployeeModalModalVisibility}
                        addEmployeeModal_OnCancel={addEmployeeModal_OnCancel}
                        addEmployeeModal_OnOk={addEmployeeModal_OnOk} />
    </div>
  );
}

export default EmployeeOptionsPanel;

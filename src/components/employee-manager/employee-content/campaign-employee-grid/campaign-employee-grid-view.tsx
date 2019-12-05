import React from 'react';
import { Empty, List, Checkbox, Skeleton } from 'antd';
import EmployeeImageCard from './employee-image-card'
import './campaign-employee-grid.css';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const CampaignEmployeeGrid: React.FC<any> = (props: any) => {
  let { 
    selectedCampaign,
    filteredEmployees,
    searchText,
    selectedCount,
    isLoading,
    toogleEmployeeSelect
  } = props;

  let selectionText;
  let selectAllStateIndeterminate;
  let selectAllStateChecked;

    // Text on UI => " {visibleItems} items "
    if (selectedCount == 0) {
      if (searchText.length > 0) {
        selectionText = filteredEmployees.length + " items";
      }
      else { // No Filter Text applied
        selectionText = filteredEmployees.length + " items";
      }
      selectAllStateChecked = false;
      selectAllStateIndeterminate = false;
    }
    // Text on UI => "{selectednumber}/{visibleItems} items"
    else {
      if (searchText.length > 0) {
        selectionText = `${selectedCount}/${filteredEmployees.length} items`;
        let filteredSelectedCount = filteredEmployees.filter((employee:any) => { return employee.isSelected; }).length
        
        if (filteredSelectedCount === filteredEmployees.length) {
          selectAllStateIndeterminate = false;
          selectAllStateChecked = true;
        }
        else{
          selectAllStateIndeterminate = true;
          selectAllStateChecked = false;
        }
      }
      // Else: No Search Text Applied
      else {
        selectionText = `${selectedCount}/${filteredEmployees.length} items`;
        if (filteredEmployees.length > selectedCount) {
          // If Some employees are selected.
          selectAllStateIndeterminate = true;
          selectAllStateChecked = false; // Don't Remove
        }
        else {
          // All employees are selected
          selectAllStateIndeterminate = false;
          selectAllStateChecked = true;
        }
      }
    }
    
    function onSelectAllChanged(event: CheckboxChangeEvent) {
      if (event.target.checked) {
        filteredEmployees.forEach((employee:any) => {
          if (!employee.isSelected) {
            toogleEmployeeSelect(employee); // Select Image
          }
        });
      }
      else {
        // Select All Unchecked
        filteredEmployees.forEach((employee:any) => {
          if (employee.isSelected) {
            toogleEmployeeSelect(employee); // de select Image
          }
        });
      }
  }
  

  if (isLoading === false) {

    if (!selectedCampaign){
      return (
        <Empty
          style={{ marginTop: '10%' }}
          description={"Please Select Campaign"} />
      );
    }

    if (!filteredEmployees || !filteredEmployees.length) {
      return (
        <Empty 
          style={{ marginTop: '10%' }}
          description={"No Employees"} />
      );
    }
  }

  return (
    <div className="CampaignEmployeeGrid">
      <Skeleton loading={isLoading} active paragraph={{ rows: 10 }} >
      <div>
          <Checkbox style={{ marginLeft: 3, marginBottom: 20 }}
            indeterminate={selectAllStateIndeterminate}
            onChange={onSelectAllChanged}
            checked={selectAllStateChecked}
          >
            {selectionText}
          </Checkbox>
          <List
            grid={{ gutter: 16, column: 8 }}
            dataSource={filteredEmployees}
            renderItem={(employee: any, index: number) => (
              <List.Item key={index}>
                <EmployeeImageCard  index={index} 
                                    employee={employee} />
              </List.Item>
            )}
          />
        </div>
        </Skeleton>
    </div>
  );
}

export default CampaignEmployeeGrid;

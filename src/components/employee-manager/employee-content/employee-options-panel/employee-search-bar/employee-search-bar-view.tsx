import React from 'react';
import { AutoComplete, Input, Icon, Button as AntButton } from 'antd';
import './employee-search-bar.css';

const EmployeeSearchBar: React.FC<any> = (props: any) => {
  let {
    updateFilterText
  } = props;

  function handleSearch(value: string) {
    updateFilterText(value);
  };

  return (
    <div className="EmployeeSearchBar">
      <div className="global-search-wrapper" style={{ width: 450 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          placeholder="Search employees"
          optionLabelProp="text"
          onSearch = {handleSearch}
        >
          <Input
              suffix={
                <AntButton
                  className="search-btn"
                  style={{ marginRight: -12 }}
                  size="large"
                  type="primary"
                >
                  <Icon type="search" />
                </AntButton>
              }
            />
        </AutoComplete>
      </div>
    </div>
  );
}

export default EmployeeSearchBar;

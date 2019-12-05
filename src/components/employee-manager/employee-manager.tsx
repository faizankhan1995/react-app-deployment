import React from 'react';
import { Layout } from 'antd';
import CampaignPanel from './campaign-panel';
import EmployeeContent from './employee-content';
import './employee-manager.css';

const { Sider } = Layout;

const EmployeeManager: React.FC = (props) => {

  return (
    <div className="EmployeeManager">
      <Layout style={{ marginTop: 64 }}>
        <Sider width={300} style={{ background: '#fff' }}>
          <CampaignPanel />
        </Sider>

        <Layout style={{ padding: '0 0 0 6px' }}>
          <EmployeeContent />
        </Layout>
      </Layout>
    </div>
  );
}

export default EmployeeManager;
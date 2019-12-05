import React from 'react';
import { Menu } from 'antd';
// import { Title } from '@bentley/bwc-react/core';
import './avatar-popup-content.css';

const AvatarPopupContent: React.FC = () => {
  return (
    <div>
      {/* <Title>Greg Bentley</Title> */}
      <Menu selectable={false} style={{ border: 'none' }}>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/#">
            My Account
          </a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="/#">
            Logout
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default AvatarPopupContent;

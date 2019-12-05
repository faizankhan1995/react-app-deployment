import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Row, Col, Popover, PageHeader  } from 'antd';
import logoTransparent from '../../assets/images/logo-transparent.png'
import './navbar.css';
import AvatarPopupContent from './avatar-popup-content'

const NavBar: React.FC = (props) => {
  return (
    <div className="NavBar">
      <Row type="flex" align="middle">
        <Col span={18} style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <PageHeader title="HRMS"
              subTitle="AllStar HR Portal"/>
          </Link>
        </Col>

        <Col span={6} style={{ textAlign: 'right' }}>
          <Popover placement="bottomLeft" content={AvatarPopupContent(props)} trigger="hover">
            <Avatar style={{ backgroundColor: "#56aa1c", verticalAlign: 'middle', cursor: 'pointer' }} size="large">
              HA
            </Avatar>
          </Popover>
        </Col>
      </Row>
    </div>
  );
}

export default NavBar;

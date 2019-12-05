import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeDetailsDrawer from './employee-details-drawer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeDetailsDrawer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

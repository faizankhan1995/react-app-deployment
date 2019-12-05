import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeManager from './employee-manager';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeManager />, div);
  ReactDOM.unmountComponentAtNode(div);
});

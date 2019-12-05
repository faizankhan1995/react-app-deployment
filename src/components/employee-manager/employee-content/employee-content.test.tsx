import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeContent from './employee-content-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

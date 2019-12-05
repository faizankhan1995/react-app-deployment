import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeOptionsPanel from './employee-options-panel-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeOptionsPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

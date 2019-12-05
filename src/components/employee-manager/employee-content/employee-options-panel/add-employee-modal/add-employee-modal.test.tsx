import React from 'react';
import ReactDOM from 'react-dom';
import AddEmployeeModal from './add-employee-modal-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddEmployeeModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

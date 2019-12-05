import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeImageCard from './employee-image-card-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeImageCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

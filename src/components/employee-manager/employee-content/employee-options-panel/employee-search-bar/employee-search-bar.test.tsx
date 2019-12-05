import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeSearchBar from './employee-search-bar-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmployeeSearchBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

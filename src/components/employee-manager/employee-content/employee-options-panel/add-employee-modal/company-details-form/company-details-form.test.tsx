import React from 'react';
import ReactDOM from 'react-dom';
import CompanyDetailsForm from './company-details-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CompanyDetailsForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

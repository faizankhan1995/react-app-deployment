import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDetailsForm from './personal-details-form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDetailsForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

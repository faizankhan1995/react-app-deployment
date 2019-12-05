import React from 'react';
import ReactDOM from 'react-dom';
import CampaignEmployeeGrid from './campaign-employee-grid-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CampaignEmployeeGrid />, div);
  ReactDOM.unmountComponentAtNode(div);
});

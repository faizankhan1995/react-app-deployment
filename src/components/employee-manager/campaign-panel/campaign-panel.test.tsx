import React from 'react';
import ReactDOM from 'react-dom';
import CampaignPanel from './campaign-panel-container';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CampaignPanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});

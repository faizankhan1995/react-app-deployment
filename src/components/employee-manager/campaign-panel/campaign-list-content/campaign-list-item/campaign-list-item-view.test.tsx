import React from 'react';
import ReactDOM from 'react-dom';
import CampaignListItem from './campaign-list-item-view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CampaignListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

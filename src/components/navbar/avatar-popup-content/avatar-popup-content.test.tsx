import React from 'react';
import ReactDOM from 'react-dom';
import AvatarPopupContent from './avatar-popup-content';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvatarPopupContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
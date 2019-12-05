import React from 'react';
import ReactDOM from 'react-dom';
import AvatarImage from './avatar-image';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvatarImage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

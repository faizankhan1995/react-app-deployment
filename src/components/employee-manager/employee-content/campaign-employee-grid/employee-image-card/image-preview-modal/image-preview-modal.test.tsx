import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreviewModal from './image-preview-modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImagePreviewModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});

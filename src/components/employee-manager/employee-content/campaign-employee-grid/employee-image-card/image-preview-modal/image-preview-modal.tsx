import React from 'react';
import { Modal } from 'antd';
import './image-preview-modal.css';

const ImagePreviewModal: React.FC<any> = (props: any) => {
  let {
    imagePreviewUrl,
    imagePreview_OnCancel,
  } = props;

  return (
    <div className="ImagePreviewModal">
      <Modal className="image-preview-modal"
        footer={null}
        visible={imagePreviewUrl ? true : false}
        onCancel={imagePreview_OnCancel}>
        <img src={imagePreviewUrl}
          alt="Preview" />
      </Modal>
    </div>
  );
}

export default ImagePreviewModal;

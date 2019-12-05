import React, { useState } from 'react';
import { Upload, message, Icon } from "antd";
import './avatar-image.css';

const AvatarImage: React.FC<any> = (props: any) => {

  let {
    filesToUpload,
    setFilesToUpload
  } = props;
  // let [imagesToUpload, setImagesToUpload] = useState([{}]);

  /**
   * Used to solve the upload on file select issue.
   * Reference: https://stackoverflow.com/a/51519603/2077741
   */
  // @ts-ignore
  function dummyRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }
  function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  function handleChange(info: any) {
    setFilesToUpload(info.fileList);
  }
  return (
    <div className="justify-content-center">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={true}
          multiple={true}
          beforeUpload={beforeUpload}
          customRequest={dummyRequest}
          onChange={handleChange}
      >
        { (filesToUpload.length < 1) &&
        (<div>
        <Icon type='plus' />
        <div className="ant-upload-text">Profile Image</div>
      </div>)}
        </Upload>
    </div>
    );
}
export default AvatarImage;

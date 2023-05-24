import { Upload,Typography, Alert } from "antd";

import type { UploadProps } from 'antd';
import { validateExcelData } from "./ValidateExcellFile";
import { FC, useState } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
const { Text} = Typography;

const {Dragger}=Upload

const DraggerUpload = ({templateHeader}:{templateHeader:string[]}) => {
  const [status, setStatus] = useState('');
  const [showAlert, setShowAlert] = useState();

  const props: UploadProps = {
    accept:'.xlsx',
    beforeUpload(file) {
        validateExcelData(file,templateHeader)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(`There is a blank space at ${err}`))
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        
      } else if (status === 'error') {
     
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  

    return (  
      <div>
    <Dragger 
    // showUploadList={false}
    {...props} >

        <div className="my-8 flex flex-col justify-center items-center">
       
        <CloudUploadOutlined style={{ fontSize: '32px', color:'blue'}}/>
        <div className="mt-8 flex items-center space-x-2">
        <p>  Drag and drop filed here or </p>
         <Text className="text-primary">Browse</Text> 
        
        </div>
        </div> 
        </Dragger> 
          {/* <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          closable
        /> */}
        </div> );
}
 
export default DraggerUpload;
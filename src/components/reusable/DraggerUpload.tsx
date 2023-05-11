import { Upload,Typography } from "antd";
import CloudUploadIcon from "../customicons/CloudUploadIcon";
import type { UploadProps } from 'antd';
import { validateExcelData } from "./ValidateExcellFile";
import { FC, useState } from "react";
const { Text} = Typography;

const {Dragger}=Upload

const DraggerUpload = ({templateHeader}:{templateHeader:string[]}) => {
  const [status, setStatus] = useState('');

  const props: UploadProps = {
    accept:'.xlsx',
    beforeUpload(file) {
        validateExcelData(file,templateHeader)
        .then((res)=> console.log(res))
        .catch((err)=> console.log(err))
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
    <Dragger {...props} >

        <div className="my-8 flex flex-col justify-center items-center">
        <CloudUploadIcon/>
        <div className="mt-8 flex items-center space-x-2">
        <p >
        Drag and drop filed here or </p>
      
          <Text className="text-primary">Browse</Text> 
        
        </div>
        </div> 
        </Dragger>  );
}
 
export default DraggerUpload;
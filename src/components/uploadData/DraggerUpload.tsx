import { Upload,Typography, Alert, Button, Spin } from "antd";

import type { UploadProps } from 'antd';
import { validateExcelData } from "./ValidateExcellFile";
import {  FC, useState } from "react";
import { CloudUploadOutlined } from "@ant-design/icons";
import usePost from "@/hooks/usePost";
import { CheckCircleIcon, CheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
import DataPreview from "./PreviewData";
const { Text} = Typography;

const {Dragger}=Upload

type DraggerProps={
  templateHeader:string[];
  endpoint:string;
  uploadFunc:()=>void
}

const DraggerUpload = ({templateHeader,endpoint,uploadFunc}:DraggerProps) => {
  const [status, setStatus] = useState('');
  const [validate, setValidate] = useState<{
    status:string;
    icon:React.ReactNode;
    message:string}>()
  const [data, setData] = useState<any>([])
  const [headers, setHeaders] = useState<string[]>();
  const [showAlert, setShowAlert] = useState('');

  const handleUpload=()=>{
    
    console.log('upload in dragger')
    uploadFunc();
    // setValidate({
    //   status:'uploading',
    //   icon:<Spin/>,
    //   message:'uploading'
    // })
    // usePost(endpoint,{
    //   business_id:154,
    //   contacts:data
    // })
    // .then(res=>{
    //   setValidate({
    //     status:'success',
    //     icon:<CheckCircleIcon  className="w-12 h-12  text-green-600"/>,
    //     message:'Successfully uploaded'
    //   })
    //   console.log(res)})
    // .catch(err=>{
    //   setValidate({
    //     status:'error',
    //     icon:<XCircleIcon className="w-12 h-12 text-red-600"/>,
    //     message:'File not uploaded, please try again'
    //   })
    //   console.log(err)})
  }

  const props: UploadProps = {
    accept:'.xlsx',
    beforeUpload(file) {
      setValidate({
        status:'validating',
        icon:<Spin/>,
        message:'validating'
      })
      console.log('inside the before upload')
        validateExcelData(file,templateHeader)
        .then((res:any)=> {
          setData(res.data)
          setHeaders(res.headers)
          console.log(res)
          setValidate({
            status:'clean',
            icon:<CheckIcon className="w-16 h-16 text-primary"/>,
            message:'Ready to Upload'
          })
        })
        .catch((err)=>{
          console.log(err)
          setShowAlert(err)
          setValidate(undefined)
        } )
    },
    onChange(info) {
     
      const { status } = info.file;
      if (status === 'uploading') {
        console.log(info.file, info.fileList);
        console.log('onchange uploading')
      }
      if (status === 'done') {
      //  setValidate(undefined)
        console.log('onchange done')
      } else if (status === 'error') {
        console.log('onchange error')
       
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  if (headers){
    return <div className=" w-full  flex flex-col items-center  ">
         <Button
        className="self-end bg-primary text-white"
            key="link"
           disabled={data.length ===0}
            type="primary"
           // loading={loading}
            onClick={handleUpload}
          >
           Upload files to Lisa
          </Button>
        <DataPreview headers={headers} data={data} 
        templateHeaders={templateHeader}
        />
    </div>
  } 
    return (  
      <div className=" w-96 mb-4 flex flex-col items-center space-y-4 ">
        { showAlert !==''?
          <Alert
          className="mb-4 w-full"
          message="Error"
          description={showAlert}
          type="warning"
          showIcon
          closable
        />
        : <></>
        }
          
    <Dragger {...props}
    showUploadList={showAlert !==''} 
    className="w-full h-48"
    >

        <div className="flex flex-col justify-center items-center">
      
       {validate? validate.icon :<CloudUploadOutlined style={{ fontSize: '32px', color:'blue'}}/>}
       {validate? 
        <p className="mt-8 font-medium">{validate.message}</p> 
        :
         <div className="mt-8 flex items-center space-x-2">
        <p>  Drag and drop filed here or </p>
         <Text className="text-primary">Browse</Text> 
        
        </div>
            }
       
        </div> 
        </Dragger> 
     
      
        </div> );
}
 
export default DraggerUpload;
import React,{FC, useState} from 'react'
import { useRouter } from 'next/router'
import { Button, message, Form, Input, Spin } from 'antd';
import { PhoneIcon} from '@heroicons/react/24/solid'
import { Typography } from 'antd';
import usePost from '@/hooks/usePost';

const MakePaymentForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()

    const onFinish=async(values:any)=>{
      setIsLoading(true)
      // try {
      //   await usePost('/',values)
      //   .then((res)=>{
      //       console.log(res);
      //       messageApi.open({
      //         type: 'success',
      //         content: res.message,
      //       });
      //       router.push('/prelaunch/')
      
      //   return setIsLoading(false)
      // }).catch(err=>{
       
      //  messageApi.open({
      //    type: 'error',
      //    content: err,
      //  });
      // })
       
      //  } catch (error) {
        
      //   return  messageApi.open({
      //      type: 'error',
      //      content: 'Transaction failed'+ error,
      //    });
      //  }
    }
    if(isLoading){
        return(
          <div className="bg-white  space-y-8 shadow-xl py-4 px-12  ">
             <Typography.Title level={5}>Waiting to verify ...</Typography.Title>
           <div className='self-center h-40 flex justify-center items-center '>
           <Spin/>
           </div>
          
          </div>
        )
    }
    return (  
        <div className="bg-white  shadow-xl py-4 px-12  ">
        <Form
          name="login"
          className="flex flex-col justify-center "
          layout='vertical'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item className="self-center mt-4">
           <Typography.Title level={5}>Pay KES1299 via M-pesa</Typography.Title>
        
          </Form.Item>
          <Form.Item
             name="phone"
            rules={[ { required: true, message: 'Please input your mpesa number!' },
            { type: 'number', min: 12, message:'Phone number should start with 254' }]}
               >
            <Input 
          prefix={
            <PhoneIcon className="h-4 w-4" />
          } 
        placeholder="254712345678" />
      </Form.Item>
         <Form.Item>

         </Form.Item>
         
          <Form.Item className=' self-center'>
          
             <Button  htmlType="submit" className="bg-primary text-white ">
              Pay now
             </Button>
               
          </Form.Item>
          <Form.Item className=' self-center'>
          <Button  onClick={()=>router.push('/prelaunch/')} className=" text-black ">
              Cancel
             </Button>
          </Form.Item>
         </Form>
        </div>
     );
}
 
export default MakePaymentForm;
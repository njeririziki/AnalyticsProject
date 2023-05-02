import React,{FC, useState} from 'react'
import { useRouter } from 'next/router'
import { Button, message, Form, Input, Spin } from 'antd';
import { EnvelopeIcon} from '@heroicons/react/24/solid'
import { Typography } from 'antd';
import usePost from '@/hooks/usePost';

const ForgotPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()

    const onFinish=async(values:any)=>{
      setIsLoading(true)
      try {
        await usePost('/forgot-password',values)
        .then((res)=>{
            console.log(res);
            messageApi.open({
              type: 'success',
              content: res.message,
            });
            router.push('/authentication/resetpassword')
      
        return setIsLoading(false)
      }).catch(err=>{
       
       messageApi.open({
         type: 'error',
         content: err,
       });
      })
       
       } catch (error) {
        
        return  messageApi.open({
           type: 'error',
           content: 'Forgot password failed'+ error,
         });
       }
    }
    return (  
        <div className="bg-white shadow-xl py-4 px-12  ">
        <Form
          name="login"
          className="flex flex-col justify-center "
       
          initialValues={{ remember: true }}
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item className="self-center mt-4">
           <Typography.Title level={5}> Forgot password</Typography.Title>
        
          </Form.Item>
         
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' },
            { type:'email', message: 'Please enter a valid email!' }]}
          >
            <Input 
            prefix={
                <EnvelopeIcon className="h-4 w-4" />
              } 
              type='email'
            placeholder="email" />
          </Form.Item> 
        
         
          <Form.Item className='w-full self-center'>
          {contextHolder}
            {isLoading?
             <Spin/>
             :
             <Button  htmlType="submit" className="bg-primary text-white w-full">
              Send
             </Button>
             }   
          </Form.Item>
         </Form>
        </div>
    );
}
 
export default ForgotPassword;
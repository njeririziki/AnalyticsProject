import React,{FC, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { Button, message, Form, Input, Spin } from 'antd';
import { LockClosedIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { Typography } from 'antd';
import useAuth from '@/hooks/useAuth';

interface User {
  phone: number;
  name: string;
  email: string;
  password:string
}

const Verify:FC= ()=> {
  
  const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);
  const {verify,login}=useAuth()


 const initiateLogIn= async(user:User|null)=> {
  
  const loginpayload= user?{
    email:user?.email,
    password:user?.password
  }:null;
  console.log('inside the initiate login', loginpayload)
    try{
      await login(loginpayload)
      .then(res=>{
        console.log(res)
        messageApi.open({
            type: 'success',
            content: res.message,
          });
          return router.push('/dashboard')
         }).catch(err=> {
          messageApi.open({
            type: 'error',
            content:err.message,
          });
          return router.push('/authentication/login')
        })
     }catch(error){
      messageApi.open({
        type: 'error',
        content:`error occured ${error}`,
      });
     }
  }
  const onFinish = async (values: any) => {
    setIsLoading(true)
    const userJSON= sessionStorage.getItem('user')
  const user:User | null = userJSON? JSON.parse(userJSON):null;

    const payload = user? {
      ...values, 
      email:user?.email
    }:values;
    console.log('Received values of form: ', user); 
    try {
     await verify( payload)
     .then(async(res)=>{
            messageApi.open({
              type: 'success',
              content: `${res} , please wait as we log you in`,
            });
             initiateLogIn(user)     
            return setIsLoading(false)       
      }).catch(err=>   messageApi.open({
        type: 'error',
        content: err,
      }))
    
    } catch (error) {
      console.error('Verification failed', error);
    }
    setIsLoading(false)
  };

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
       <Typography.Title level={5}> Verify Account</Typography.Title>
    
      </Form.Item>
     
      {/* <Form.Item
        name="email"
        label='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input 
        placeholder="email" />
      </Form.Item> */}
      <Form.Item
        name="otp"
      
        rules={[{ required: true, message: 'Please input your otp!' }]}
      >
        <Input
          prefix={ <LockClosedIcon className="h-4 w-4" /> } 
          type="otp"
          placeholder="otp"
        />
      </Form.Item>
     
      <Form.Item className='w-full self-center'>
        {contextHolder}
        {isLoading?
         <Spin/>
         :
         <Button type="primary" htmlType="submit" className="bg-primary w-full">
          Verify
         </Button>
         } 
     
        
      </Form.Item>
      <Form.Item className='w-full self-center'> 
          <Link href="" className="text-primary">resend code </Link>     
         </Form.Item>
      
      
    </Form>
    </div>
  );
};

export default Verify;
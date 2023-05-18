import { useState,useContext } from "react";
import { EnvelopeIcon,LockClosedIcon } from '@heroicons/react/24/solid'
import { Button, Spin, Form, Input,message } from 'antd';
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";



const LogIn:React.FC= ()=> {
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()
  const {login}=useAuth()
  

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    setIsLoading(true)
    try {
     await login( values)
      .then(res=>{
        console.log(res)
         messageApi.open({
            type: 'success',
            content: res,
          });
          
          return router.push('/prelaunch/')
   
      }).catch(err=> {
          messageApi.open({
            type: 'error',
            content: err,
          });
        })
    
    } catch (error) {
      console.error('Login failed', error);
    }
    setIsLoading(false)
  };

  return (
    <div className="bg-white shadow-xl py-4 px-12  ">
    <Form
      name="login"
      className="flex flex-col justify-center "
      autoComplete="off"
     // initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item className="self-center">
      
        <h1 className="text-primary text-xl font-bold">lisa</h1>
      </Form.Item>
      <Form.Item
        name="email"
       
        rules={[  { type:'email', message: 'Please enter a valid email!' },
        { required: true, message: 'Please input your email!' }]}
      >
        <Input 
        prefix={
          <EnvelopeIcon className="h-4 w-4" />
        } 
        placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' },
        { type: 'string', min: 10, message:'Password should be 10 characters or more' }]}
      >
        <Input.Password
          prefix={<LockClosedIcon className="h-4 w-4" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Link className="text-primary" href='/authentication/forgotpassword'>
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item className="self-center w-full">
      {contextHolder}
      {isLoading?
        <Spin className="self-center  "/>
      :
        <Button  htmlType="submit" className="bg-primary text-white w-full">
          Log in
        </Button>
      } 
      </Form.Item>
      <Form.Item >
         <p>Dont have an account? 
          <Link href="/authentication/signup" className="text-primary">register now!</Link>
         
          </p> 
         </Form.Item>
      
    </Form>
    </div>
  );
};

export default LogIn;
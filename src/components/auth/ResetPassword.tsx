import React,{FC, useState} from 'react'
import { useRouter } from 'next/router'
import { Button, message, Form, Input, Spin } from 'antd';
import { LockClosedIcon,LockOpenIcon} from '@heroicons/react/24/solid'
import usePost from '@/hooks/usePost';
import { Typography } from 'antd';
import { validateConfirmPassword } from '@/utils/validators';

type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

const ResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState<{
      value: string;
      validateStatus?: ValidateStatus;
      errorMsg?: string | null;
    }>();
    const onConfirmPassword = (event: { target: { value: string; }; }) => {
      const cp=event.target.value
      setConfirmPassword({
        ...validateConfirmPassword(cp,password),
        value:cp,
      });
    };
    const onFinish=async(values:any)=>{
      setIsLoading(true)
      try {
        await usePost('/reset-password',values)
        .then((res)=>{
            console.log(res);
            messageApi.open({
              type: 'success',
              content: res.message,
            });
            router.push('/authentication/login')
      
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
         
          initialValues={{ remember: false}}
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item className="self-center mt-4">
           <Typography.Title level={5}> Reset password</Typography.Title>
        
          </Form.Item>
         
          <Form.Item
            name="otp"
            rules={[{ required: true, message: 'Please input your otp!' }]}
          >
            <Input 
            prefix={
                <LockOpenIcon className="h-4 w-4" />
              } 
              autoComplete='false'
            placeholder="otp" />
          </Form.Item> 
          <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' },
        { type: 'string', min: 10, message:'Password should be 10 characters or more' }
      ]}
      >
        <Input.Password
           prefix={
            <LockClosedIcon className="h-4 w-4" />
          } 
          type="password"
          placeholder="Password"
          onChange={(event)=>setPassword(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        rules={[{ required: true, message: 'Please confirm Password!' },
        { type: 'string', min: 10, message:'Password should be 10 characters or more' }
      ]}
      validateStatus={confirmPassword?.validateStatus}
      help={confirmPassword?.errorMsg}
      >
        <Input.Password
          prefix={ <LockClosedIcon className="h-4 w-4" /> }
          type="password"
          placeholder="Confirm Password"
          onChange={onConfirmPassword}
        />
      </Form.Item>
 
         
          <Form.Item className='w-full self-center'>
          {contextHolder}
            {isLoading?
             <Spin/>
             :
             <Button type="primary" htmlType="submit" className="bg-primary text-white w-full">
             Send
             </Button>
             }   
          </Form.Item>
         </Form>
        </div>
    );
}
 
export default ResetPassword;
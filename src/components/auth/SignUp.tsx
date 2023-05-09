import { ChangeEventHandler, useState } from "react";
import { useRouter } from 'next/router'
import { EnvelopeIcon,LockClosedIcon,PhoneIcon,UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { validateConfirmPassword} from "@/utils/validators";
import { Button, Spin, Form, Input,message } from 'antd';
import Link from "next/link";
import useAuth from "@/hooks/useAuth";


type ValidateStatus = Parameters<typeof Form.Item>[0]['validateStatus'];

const SignUp:React.FC= ()=> {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState<{
      value: string;
      validateStatus?: ValidateStatus;
      errorMsg?: string | null;
    }>();
    const [isLoading, setIsLoading] = useState(false);
    const {register} =useAuth()

    const onConfirmPassword = (event: { target: { value: string; }; }) => {
      const cp=event.target.value
      setConfirmPassword({
        ...validateConfirmPassword(cp,password),
        value:cp,
       
      });
    };

  const onFinish = async (values: any) => {
   setIsLoading(true)
    try {
     await register(values)
     .then((res)=>{
         console.log(res);
         sessionStorage.setItem('user',JSON.stringify(values))
         messageApi.open({
           type: 'success',
           content: res,
         });
         router.push('/authentication/verify')
   
     return setIsLoading(false)
   }).catch(err=>{
   
   return messageApi.open({
      type: 'error',
      content: err,
    });
    })
    
    } catch (error) {
      console.error('Login failed', error);
     return  messageApi.open({
        type: 'error',
        content: 'Login failed'+ error,
      });
    }
    setIsLoading(false)
  };

  return (
    <div className="bg-white shadow-xl py-4 px-12 md:w-1/4 ">
    <Form
      name="login"
      className="flex flex-col justify-center "
      layout="vertical"
    //  initialValues={{ remember: true }}
     autoComplete="off"
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item className="self-center">
        {/* <Image src="/images/logo192.png" alt='lisa-logo' 
        width={50} height={50}/> */}
            <h1 className="text-primary text-2xl font-bold">lisa</h1>
     
      </Form.Item>
      <Form.Item 
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input 
        prefix={
          <UserIcon className="h-4 w-4" />
        }
        placeholder="name" />
        
        </Form.Item>
      <Form.Item
        name="email"
        rules={[{ type:'email', message: 'Please enter a valid email!' }
          ,{ required: true, message: 'Please input your email!' }]}
      >
        <Input 
          prefix={
            <EnvelopeIcon className="h-4 w-4" />
          } 
        placeholder="email" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[ { required: true, message: 'Please input your phone number!' },
        { type: 'number', min: 12, message:'Phone number should start with 254' }]}
      >
        <Input 
          prefix={
            <PhoneIcon className="h-4 w-4" />
          } 
        placeholder="254712345678" />
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
        { type: 'string', min: 10, message:'Password should be 10 characters or more' }]}
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
      <Button htmlType="submit"
       disabled={ confirmPassword?.validateStatus !='success'}
       className="bg-primary text-white w-full">
      Sign up
     </Button>
      }
       
        
      </Form.Item>
      <Form.Item >
         <p> Already signed up? 
          <Link href="/authentication/login" className="text-primary"> log in </Link>
         
          </p> 
         </Form.Item>
      
      
    </Form>
    </div>
  );
};

export default SignUp;
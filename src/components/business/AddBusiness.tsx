import { useRouter } from 'next/router'
import { Button, message,Select,Spin, Form, Input } from 'antd';
import usePost from '@/hooks/usePost';
import { Typography } from 'antd';
import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';

interface User {
  id:number;
  phone: number;
  name: string;
  email: string;
  password:string
}

const AddBusinessForm = () => {
   
  const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

  
  

  const onFinish = async (values: any) => {

   console.log('clicked add business',values);
   
    setIsLoading(true)

    try {
      const { data, error } = await supabase.from('Business').insert([values]);
    
     
      if (error) {
        messageApi.open({
          type: 'error',
          content: error.message,
        });
      } else {
        messageApi.open({
          type: 'success',
          content: 'Business added successfully',
        });

        router.push('/setup')
      }
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: 'add business failed' + error,
      });
    } finally {
      setIsLoading(false)
    }
  
  };

  return ( 
 
    <div className="bg-white w-1/3 py-4 px-12  ">
    <Form
      name="add business"
      className="flex flex-col justify-center "
      labelCol={{ span: 9 }}
     // style={{ maxWidth: 600 }}
     // initialValues={{ remember: true }}
      onFinish={onFinish}
      requiredMark={false}
    >
      <Form.Item className="self-center mt-4">
       <Typography.Title level={5}> Add Business</Typography.Title>
    
      </Form.Item>
     
      <Form.Item
        name="business_name"
        label='business name'
        rules={[{ required: true, message: 'Please input your business name!' }]}
      >
        <Input 
        placeholder="business name" />
      </Form.Item>
      {/* <Form.Item
        name="owner"
        label='owner'
        rules={[{ required: true, message: 'Please input your owner!' }]}
      >
        <Input
          type='text'
          placeholder="owner"
        />
      </Form.Item> */}
      <Form.Item
        name="email"
        label='Email'
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input
          type='text'
          placeholder="Email"
        />
      </Form.Item>
      {/* registration_number */}
      <Form.Item
        name="registration_number"
        label='registration no'
        rules={[{ required: true, message: 'Please input your registration number!' }]}
      >
        <Input
          type='text'
          placeholder="registration number"
        />
      </Form.Item>
      {/* <Form.Item
        name="level_of_business"
        label='level of business'
        rules={[{ required: true, message: 'Please input your level of business!' }]}
      >
        <Select>
          <Select.Option value="retail">retail</Select.Option>
        </Select>
        </Form.Item> */}
      <Form.Item
        name="sub_category"
        label='sub category'
        rules={[{ required: true, message: 'Please input your sub category!' }]}
      >
        <Select
         
          options={[
            { value: 'RESTAURANT', label: 'restaurant' },
            { value: 'SERVICES', label: 'services' },
            { value: 'GOODS', label: 'goods' },
            
          ]}
          />
      </Form.Item>
      <Form.Item
        name="operation_location"
        label='location'
        rules={[{ required: true, message: 'Please input your location!' }]}
      >
        <Input 
        placeholder="location" />
      </Form.Item>
      <Form.Item
        name="no_of_employees"
        label='no of employees'
        rules={[{ required: true, message: 'Please input number of employees!' }]}
      >
        <Input 
        placeholder="employees" type='number' />
      </Form.Item>
      <Form.Item className='self-center'>
      {contextHolder}
        {isLoading?
         <Spin/>
         :
        <Button  htmlType="submit" className="bg-primary text-white ">
         Add Business
        </Button>
       }       
      </Form.Item>
    
    </Form>
    </div>
   
  );
};


export default AddBusinessForm;




// const userJSON= sessionStorage.getItem('user')
// const user:User | null = userJSON? JSON.parse(userJSON):null;
// const payload = user? {
//   ...values, 
//   email:user?.email,
//   user_id:user?.id,
//   owner_id:user?.id,
//   owner:user?.name,
//   phone:user?.phone,
//   currency:'KSH',
//   level_of_business:'Retail'
// }:values;
// console.log('Received values of form: ', payload);

// try {
//  await usePost(`/business`, payload)
//  .then(res=>{
//   console.log(res);
//   messageApi.open({
//     type: 'success',
//     content: res.message,
//   });
//   sessionStorage.setItem('business',JSON.stringify(res.jsonData));
//   return router.push('/prelaunch/')
//   }).catch(err=>{
//     // err is data object decode errors
//     messageApi.open({
//       type: 'error',
//       content: err.message,
//     });
//   })

// } catch (error) {
//   messageApi.open({
//     type: 'error',
//     content: 'add business failed' + error,
//   });
// }


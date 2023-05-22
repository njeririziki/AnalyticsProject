import React,{FC, useContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import { Button, message, Form, Input, Spin } from 'antd';
import { PhoneIcon,CheckCircleIcon,XCircleIcon} from '@heroicons/react/24/solid'
import { Typography } from 'antd';
import axiosInstance from '@/utils/AxiosInstance';
import { setTimeout } from 'timers';
import { PaidContext } from '@/context/PaidContext';
import { set } from 'react-hook-form';


const MakePaymentForm = ({endpoint,params}:{endpoint:string,params:any}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [stat, setStat] = useState<string>();
    const [checkId, setCheckId] = useState<string>()
    const [messageApi, contextHolder] = message.useMessage();
    const {setIsPaid} = useContext(PaidContext)

    const router = useRouter()


    const checkStatus=async()=>{
     // console.log(payload)
      try {
        await axiosInstance.post('/check/mpesa/transaction/status',{
          checkoutrequestid:checkId
        })
        .then(res=>{
        
          if(res.data?.ResultCode ){
            if(res.data?.ResultCode==='0'){
              messageApi.open({
                type: 'success',
                content: 'Transaction successfull check your email  ',
              });
              setStat('success');
              setIsPaid(true)
              sessionStorage.setItem("prereg", 'paid');
             return setTimeout(() => { router.push('/prelaunch')},  1000)
              
            }else  {
              messageApi.open({
                type: 'error',
                content: 'Transaction failed please try again',
              });

             setStat('error')
             return setTimeout(() => { setIsLoading(false)}, 1000)
            }
          }
           
        })
        .catch(err=>{
          console.log(err)
          //setStat('error')
        })
       
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
     let subscribe:any;
      if(checkId){
        subscribe= setInterval( ()=>{checkStatus()}, 3000);
        setTimeout(() => {
          clearInterval(subscribe);
          return setStat('error')
        }, 12000);
      }
      return () => {
        clearInterval(subscribe)
      }
    }, [checkId])
    
    const onFinish=async(values:any)=>{
      setIsLoading(true)
   
     // setStat('loading')
      const payload={
         ...values,
        ...params
      }
 
      try {
        await axiosInstance.post(endpoint,payload)
        .then((res)=>{
          
             const mpesa=res.data.mpesaWalletTopup;

                if(mpesa?.CheckoutRequestID){
                  return setCheckId(mpesa?.CheckoutRequestID)
                }else {
                  messageApi.open({
                    type: 'error',
                    content: mpesa.errorMessage, 
                  });
                }
           }).catch(err=>{     
              messageApi.open({
                type: 'error',
                content: err,
              });
              }) 
       } catch (error) {
        return  messageApi.open({
           type: 'error',
           content: 'Transaction failed'+ error,
         });
       }
    }
    if(isLoading){
      switch (stat){
        case 'success':
          return(
            <div className="bg-white  space-y-8 shadow-xl py-4 px-12  ">
               <Typography.Title level={5}>Transaction Successfull</Typography.Title>
             <div className='self-center h-40 flex justify-center items-center '>
             <CheckCircleIcon className='text-green-600 w-20 h-20'/>
             </div>
            </div>
          )
          case 'error':
            return(
              <div className="bg-white  space-y-8 shadow-xl py-4 px-12  ">
                 <Typography.Title level={5}>Transaction Failed</Typography.Title>
               <div className='self-center h-40 flex justify-center items-center '>
               <XCircleIcon className='text-red-600 w-20 h-20'/>
               </div>
              </div>
            )
           
            default:
            return(
              <div className="bg-white  space-y-8 shadow-xl py-4 px-12  ">
                 <Typography.Title level={5}>Waiting to verify ...</Typography.Title>
               <div className='self-center h-40 flex justify-center items-center '>
               <Spin/>
               </div>
              </div>
            )
      }
       
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
            { type:'string' , min: 12, message:'Phone number should start with 254' },
            {max: 12, message:'Phone number should be only 12 digits' }
                ]}
               >
            <Input 
          prefix={
            <PhoneIcon className="h-4 w-4" />
          } 
          max={12}
        placeholder="254712345678" />
      </Form.Item>
         <Form.Item>
         </Form.Item>
          <Form.Item className=' self-center'>
          {contextHolder}
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
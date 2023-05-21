import React, {createContext,ReactNode,useEffect,useState} from 'react'
import { User } from '../types/types'
import axiosInstance from '@/utils/AxiosInstance'

type PaidContextType = {
  
    isPaid: boolean
    doCheck: (uid:string) => void
   
  }

  export const PaidContext = createContext<PaidContextType>({} as PaidContextType)

  export const PaidProvider = ({ children }: { children: ReactNode }) => {
    const [isPaid, setIsPaid] = useState(false)
  
   
     useEffect(() => {

      const prereg=sessionStorage.getItem('prereg')
      
      if(prereg==='paid'){
        setIsPaid(true)  
      }
    
     }, [isPaid]);

       const doCheck= async(uid:string) => {
        
        try {
            await axiosInstance.get(`/check/user/prereg/${uid}`)
            .then(res=>{
           
                if(res.data.responseCode===200){
                   
                   sessionStorage.setItem("prereg", 'paid');
                   return  setIsPaid(true)
               }else{
                sessionStorage.setItem("prereg", 'unpaid');
               }
             }).catch(err=>console.log(err))
           
           } catch (error) {
             alert(error +'Please try again');
           }
     
       
      }
    
    
    return (
        <PaidContext.Provider
          value={{ isPaid,doCheck}}
        >
          {children}
        </PaidContext.Provider>
      )
  }  





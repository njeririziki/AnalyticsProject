import React,{useState,createContext,ReactNode} from 'react'
import axiosInstance from '@/utils/AxiosInstance';


function useAuth() { 
    const [authed, setAuthed] = useState(false); 
   
    const register = (values: any) => {
      return new Promise<string>(async(resolve, reject) => { 
         try {
          await axiosInstance.post(`/register`, values)
          .then(res=>{
           console.log(res)
              if(res.data.success){
                 setAuthed(true)
                 resolve(res.data.message)  
             }else{
              const {APIerror,error_description} = res.data;
                      
              // destructuring the array object to get the error messages 
              let messageArray = Object.values(APIerror)
              console.log(messageArray.toString())
              return reject(APIerror?messageArray.toString():error_description)
            // reject(res.data.APIError)
            }
           }).catch(err=>console.log(err))
         
         } catch (error) {
           console.error('Login failed', error);
         }
        })
       };
         
    const login = (values: any) => {
     return  new Promise<any>(async(resolve, reject) => {
        try {
         await axiosInstance.post(`/login`, values)
         .then(res=>{
          console.log(res)
             if(res.data.success){
                console.log(res.data);
                resolve(res.data.message)
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("username", res.data.jsonData.name);
                sessionStorage.setItem("email", res.data.jsonData.email);
                sessionStorage.setItem('user', JSON.stringify(res.data.jsonData));
                sessionStorage.setItem("businesses",JSON.stringify(res.data.business));
               
            }else{
              const {message} = res.data;
              return reject(message)
            }
          }).catch(err=>console.log(err))
        
        } catch (error) {
          console.error('Login failed', error);
        }
      })
      };
  
      const verify = (values: any) => {
        return new Promise<string>(async(resolve, reject) => {
        try {
            await axiosInstance.post(`/verify-account`, values)
            .then(res=>{
             console.log(res)
                if(res.data.status){
                   console.log(res.data);
                  resolve(res.data.message)
               }
               reject(res.data.message) 
             }).catch(err=>console.log(err))
           
           } catch (error) {
             console.error('Login failed', error);
           }
       })
     
      };
      const useauth = (endpoint:string,values: any) => {
       return new Promise<any>(async(resolve, reject) => {
         try {
             await axiosInstance.post(endpoint, values)
             .then(res=>{
              console.log(res)
                 if(res.data.success){
                    console.log(res.data);
                   resolve(res.data)
                }
                reject(res.data)
               
              }).catch(err=>console.log(err))
            
            } catch (error) {
              console.error('Login failed', error);
            }
        })
      
       };
       const resetpassword = (values: any) => {
        new Promise<void>(async(resolve, reject) => {
         try {
             await axiosInstance.post(`/reset-password`, values)
             .then(res=>{
              console.log(res)
                 if(res.data.success){
                    console.log(res.data);
                   resolve(res.data.message)
                }
                reject(res.data.APIError)
               
              }).catch(err=>console.log(err))
            
            } catch (error) {
              console.error('Login failed', error);
            }
        })
      
       };
      const logout = (values: any) => {
        new Promise<void>(async(resolve, reject) => {
          try {
            await axiosInstance.post(`/register`, values)
            .then(res=>{
              if(res.data.success){
                console.log(res.data);
               resolve(res.data.message)
            }
              reject(res.data.APIError)
              
             }).catch(err=>console.log(err))
          } catch (error) {
            console.error('Logout failed', error);
          }
        })
      }

    return {
        authed,
        login,
        register,
        verify,
        useauth,
        resetpassword,
        logout
      
    }
}



export default useAuth;

// get array in error message 
// else{
//   const {APIerror,error_description} = res.data;
          
//   // destructuring the array object to get the error messages 
//   let messageArray = Object.values(APIerror)
//   console.log(messageArray.toString())
//   return reject(APIerror?messageArray.toString():error_description)
// // reject(res.data.APIError)
// }
import React, { useState, useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { supabase } from "@/utils/supabaseClient";

function useAuth() {
  const { authenticateUser } = useContext(AuthContext);

  const [authed, setAuthed] = useState(false);

  const register = (values: any) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const { data, error } = await supabase.auth.signUp(values);
        setAuthed(true);
        if (error) throw error;
        if (data.user && data.user.id) {
          resolve(data.user.id);
        }
      } catch (error) {
        console.error("Login failed", error);
        return reject(error);
      }
    });
  };

  const login = (values: any) => {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword(values);
        if (data.user && data.user.id) {
          resolve(data.user.id);
          sessionStorage.setItem("token", data?.session?.access_token);
          
          authenticateUser();
        }

        if (error) throw error;
      } catch (error) {
        console.error("Login failed", error);
        return reject(error);
      }
    });
  };
  const logout = (values: any) => {
    new Promise<void>(async (resolve, reject) => {
      try {
        const { error } = await supabase.auth.signOut();

        if (!error) {
          resolve();
        } else {
          throw error;
        }
      } catch (error) {
        console.error("Logout failed", error);
        reject(error);
      }
    });
  };

  const verify = (values: any) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        // await axiosInstance.post(`/verify-account`, values)
        // .then(res=>{
        //  console.log(res)
        //     if(res.data.status){
        //        console.log(res.data);
        //       resolve(res.data.message)
        //    }
        //    reject(res.data.message)
        //  }).catch(err=>console.log(err))
      } catch (error) {
        console.error("Login failed", error);
      }
    });
  };
  const useauth = (endpoint: string, values: any) => {
    return new Promise<any>(async (resolve, reject) => {
      try {
        //  await axiosInstance.post(endpoint, values)
        //  .then(res=>{
        //   console.log(res)
        //      if(res.data.success){
        //         console.log(res.data);
        //        resolve(res.data)
        //     }
        //     reject(res.data)
        // }).catch(err=>console.log(err))
      } catch (error) {
        console.error("Login failed", error);
      }
    });
  };
  const resetpassword = (values: any) => {
    new Promise<void>(async (resolve, reject) => {
      try {
        //  await axiosInstance.post(`/reset-password`, values)
        //  .then(res=>{
        //   console.log(res)
        //      if(res.data.success){
        //         console.log(res.data);
        //        resolve(res.data.message)
        //     }
        //     reject(res.data.APIError)
        //   }).catch(err=>console.log(err))
      } catch (error) {
        console.error("Login failed", error);
      }
    });
  };

  return {
    authed,
    login,
    register,
    verify,
    useauth,
    resetpassword,
    logout,
  };
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

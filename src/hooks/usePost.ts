import axiosInstance from "@/utils/AxiosInstance";

const usePost = (endpoint:string,values: any) => {

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
               alert(error +'Please try again');
             }
         })

}
 
export default usePost;
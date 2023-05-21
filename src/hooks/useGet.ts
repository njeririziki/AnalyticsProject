import axiosInstance from "@/utils/AxiosInstance";

const useGet = (endpoint:string,values: any) => {

        return new Promise<any>(async(resolve, reject) => {
          try {
              await axiosInstance.get(endpoint)
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
 
export default useGet;
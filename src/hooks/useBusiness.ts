import axiosInstance from "@/utils/AxiosInstance";

const useBusiness = () => {
    const addBusiness = (values: any) => {
        new Promise<void>(async(resolve, reject) => {
         try {
            await axiosInstance.post(`/business`, values)
             .then(res=>{
              console.log(res)
                 if(res.data.success){
                    console.log(res.data);
                   resolve(res.data)
                }
                reject(res.data)
               
              }).catch(err=>console.log(err))
            
            } catch (error) {
              alert('add business failed' + error);
            }
        })
      
       };
    return {
       addBusiness
    };
}
 
export default useBusiness;
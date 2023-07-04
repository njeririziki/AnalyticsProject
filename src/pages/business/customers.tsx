import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import useGet from "@/hooks/useGet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from '@/context/AuthContext';


const CustomersPage = () => {
     const {currentUser}=useContext(AuthContext)
  
     const [clientList, setClientList] = useState<object[]>()
     const user_id=16 // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/list-users/${user_id}`)
            .then((res)=>{
              console.log(res.jsonData);
              const data=res.jsonData.map((item:any)=>{
              return{
               name:item.name,
               phone:item.phone,
               email:item.email} 
              })
        return setClientList(data)
          }).catch(err=>{
         
         })
          } catch (error) {
            
          }
       
        }, [])
    return ( 
        <HeaderSiderLayout>
             <div  className="w-5/6  pt-8 h-full ">
             <h2 className="font-semibold text-lg text-black" > Products </h2>
             <div className='pt-8'>
             <SearchableTable/>
             </div>
              
               
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default CustomersPage;
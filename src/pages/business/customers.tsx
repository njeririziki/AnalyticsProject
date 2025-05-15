import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import useGet from "@/hooks/useGet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from '@/context/AuthContext';
import { ColumnsType } from "antd/es/table";



type DataType= {
     key: string;
     name: string;
     phone: string;
     email: string;
   
   }
   
const userDummyData: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    phone: '1234567890',
    email: 'johnbrown@email.com'
  },
  { key: '2',
    name: 'Jim Green',
    phone: '0987654321',
    email: 'greenjim@email.com'
  },
  { key: '3',
    name: 'Joe Black',  
    phone: '1122334455',
    email: 'blackjoe@email.com'
  },
  {
    key: '4', 
    name: 'John Doe',
    phone: '1234567890',
    email: 'doejohn@email.com'
  },
]
        
  // type DataIndex = keyof DataType;
   

   const columns: ColumnsType<DataType> = [
     {
       title: 'Name',
       dataIndex: 'name',
       key: 'name',
       //width: '30%',
      // ...getColumnSearchProps('name'),
     },
     {
       title: 'phone',
       dataIndex: 'phone',
       key: 'phone',
     //   width: '20%',
       //...getColumnSearchProps('age'),
     },
     {
       title: 'Email',
       dataIndex: 'email',
       key: 'email',
      //   getColumnSearchProps('costPrice'),
      // sorter: (a:number, b:number) => a.costPrice.length - b.address.length,
      //sortDirections: ['descend', 'ascend'],
     }
   ];
   


const CustomersPage = () => {
     const {currentUser}=useContext(AuthContext)
  
     const [clientList, setClientList] = useState<DataType[]>([{
             key:'',
              name:'',
               phone:'',
               email:''
          }])
     const user_id=currentUser?.id // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/list-users/${user_id}`)
            .then((res)=>{
              console.log(res.jsonData);
              const data=res.jsonData.map((item:any)=>{
              return{
               key:item.id,
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
             <h2 className="font-semibold text-lg text-black" >Customers </h2>
             <div className='pt-8'>
             <SearchableTable data={userDummyData} columns={columns} />
             </div>
                     
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default CustomersPage;
import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import useGet from "@/hooks/useGet";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from '@/context/AuthContext';
import { ColumnsType } from "antd/es/table";
import { supabase } from "@/utils/supabaseClient";
import { set } from "react-hook-form";


type DataType= {
     key: string;
     name: string;
     phone: string;
     email: string;
   
   }
   
const userDummyData= [
  {
    
    customer_name: 'John Brown',
    phone: '1234567890',
    email: 'johnbrown@email.com',
    business_id: 1,
  },
  { 
    customer_name: 'Jim Green',
    phone: '0987654321',
    email: 'greenjim@email.com',
    business_id: 1,
  },
  { 
    customer_name: 'Joe Black',  
    phone: '1122334455',
    email: 'blackjoe@email.com',
    business_id: 1,
  },
  {
     
    customer_name: 'John Doe',
    phone: '1234567890',
    email: 'doejohn@email.com',
    business_id: 1,
  },
]
        
  // type DataIndex = keyof DataType;
   

   const columns: ColumnsType<DataType> = [
     {
       title: 'Name',
       dataIndex: 'customer_name',
       key: 'customer_name',
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
  
     const [clientList, setClientList] = useState<DataType[]>([])
     //const user_id=currentUser?.id // currentUser?.id

         useEffect(() => {
           const fetchData = async () => {
             try {
               const { data, error } = await supabase
                 .from('Customer')
                 .select('*')
                 .eq('business_id', 1);
               if (error) throw error;
               console.log('Fetched data:', data);
               
                setClientList(data ?? []);

             } catch (err) {
               console.error('Error fetching data:', err);
              setClientList([]);
             }
           };
           fetchData();
         }, []);
  
    return ( 
        <HeaderSiderLayout>
             <div  className="w-5/6  pt-8 h-full ">
             <h2 className="font-semibold text-lg text-black" >Customers </h2>
             <div className='pt-8'>
             <SearchableTable data={clientList} columns={columns} />
             </div>
                     
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default CustomersPage;
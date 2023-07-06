import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { ColumnsType } from "antd/es/table";
import { useState, useEffect, useContext } from "react";

interface DataType {
     key: string;
     name: string;
     age: number;
     address: string;
   }
   
  // type DataIndex = keyof DataType;
   
   const data: DataType[] = [
     {
       key: '1',
       name: 'John Brown',
       age: 32,
       address: 'New York No. 1 Lake Park',
     },
     {
       key: '2',
       name: 'Joe Black',
       age: 42,
       address: 'London No. 1 Lake Park',
     },
     {
       key: '3',
       name: 'Jim Green',
       age: 32,
       address: 'Sydney No. 1 Lake Park',
     },
     {
       key: '4',
       name: 'Jim Red',
       age: 32,
       address: 'London No. 2 Lake Park',
     },
   ];
   const columns: ColumnsType<DataType> = [
     {
       title: 'Name',
       dataIndex: 'name',
       key: 'name',
       width: '30%',
      // ...getColumnSearchProps('name'),
     },
     {
       title: 'Age',
       dataIndex: 'age',
       key: 'age',
       width: '20%',
       //...getColumnSearchProps('age'),
     },
     {
       title: 'Address',
       dataIndex: 'address',
       key: 'address',
    //   ...getColumnSearchProps('address'),
       sorter: (a, b) => a.address.length - b.address.length,
       sortDirections: ['descend', 'ascend'],
     },
   ];
   
const TransactionsPage = () => {
     const {currentUser}=useContext(AuthContext)
     const [transactionsList, setTransactionsList] = useState<object[]>()

     const user_id=16 // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/list-users/${user_id}`)
            .then((res)=>{
              console.log(res);
        //  return setOverviewDetails(res)
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
             <SearchableTable data={data} columns={columns}/>
             </div>
              
               
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default TransactionsPage;
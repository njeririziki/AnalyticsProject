import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { ColumnsType } from "antd/es/table";
import { useState, useEffect, useContext } from "react";

// "sales": 1205,
// "discount": 75,
// "profit": 245,
// "units": "4",
// "day_of_week": "2023-07-03",
// "day": "Monday",
// "day_format": "03-07",
// "created_at": "2023-07-03 13:30:45"
interface DataType {
     key: string;
     transactionId: string;
     amount: number;
     createdBy: string;
     paidvia: string;
     status: string;
   }
   
const transactionsDummyData: DataType[] = [
  {
    key: '1',
    transactionId: '123456',
    amount: 1205,
    createdBy: 'John Doe',
    paidvia: 'mobile money',
    status: 'completed'
  },
  { key: '2',
    transactionId: '654321',
    amount: 1500,
    createdBy: 'Jane Smith',
    paidvia: 'cash',
    status: 'pending'
  },
  { key: '3',
    transactionId: '789012',  
    amount: 2000,
    createdBy: 'Alice Johnson',
    paidvia: 'credit card',
    status: 'failed'
  },
]
  // type DataIndex = keyof DataType;

   const columns: ColumnsType<DataType> = [
     {
       title: ' Transaction Id',
       dataIndex: 'transactionId',
       key: 'transactionId',
       //width: '30%',
      // ...getColumnSearchProps('name'),
     },
     {
       title: 'Amount',
       dataIndex: 'amount',
       key: 'amount',
      // width: '20%',
       //...getColumnSearchProps('age'),
     },
     {
       title: 'Created By',
       dataIndex: 'createdBy',
       key: 'createdBy',
    //   ...getColumnSearchProps('address'),
      // sorter: (a, b) => a.address.length - b.address.length,
      // sortDirections: ['descend', 'ascend'],
     },
     {
      title: 'Paid Via',
      dataIndex: 'paidvia',
      key: 'paidvia',
     // width: '20%',
      //...getColumnSearchProps('age'),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
     // width: '20%',
      //...getColumnSearchProps('age'),
    },
   ];
   
const TransactionsPage = () => {
     const {currentUser}=useContext(AuthContext)
     const [transactionsList, setTransactionsList] = useState<DataType[]>([{
      key: '',
     transactionId: '',
     amount: 0,
     createdBy: '',
     paidvia: '',
     status: '',
   }])

     const user_id=currentUser?.id // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/transactions/${user_id}/daily`)
            .then((res)=>{
              console.log(res);
              const data=res.jsonData.map((item:any)=>{
                return{  
                  key: item.id,
                  transactionId: item.id,
                  amount: item.sales,
                  createdBy: item.created_at,
                  paidvia: 'm-pesa',
                  status: '', 
                } 
                })
          return setTransactionsList(data)
            }).catch(err=>{
         
         })
          } catch (error) {
            
          }
       
        }, [])
    return ( 
        <HeaderSiderLayout>
             <div  className="w-5/6  pt-8 h-full ">
             <h2 className="font-semibold text-lg text-black" > Transactions</h2>
             <div className='pt-8'>
             <SearchableTable data={transactionsDummyData} columns={columns}/>
             </div>
                
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default TransactionsPage;
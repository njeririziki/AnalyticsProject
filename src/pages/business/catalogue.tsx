import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { ColumnsType } from "antd/es/table";
import { useContext, useEffect, useState } from "react";


type DataType= {
     key: string;
     name: string;
     retailPrice: number;
     stock: number;
     costPrice: number;
     value:number
   }
   
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
       title: 'Retail Price',
       dataIndex: 'retailPrice',
       key: 'retailPrice',
     //   width: '20%',
       //...getColumnSearchProps('age'),
     },
     {
       title: 'Cost Price',
       dataIndex: 'costPrice',
       key: 'costPrice',
    //   ...getColumnSearchProps('costPrice'),
      // sorter: (a:number, b:number) => a.costPrice.length - b.address.length,
      //sortDirections: ['descend', 'ascend'],
     },
     {
          title: 'Stock',
          dataIndex: 'stock',
          key: 'stock',
        //   width: '20%',
          //...getColumnSearchProps('age'),
        },
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'value',
        //   width: '20%',
          //...getColumnSearchProps('age'),
        },
   ];
   

const CataloguePage = () => {
     const {currentUser}=useContext(AuthContext)

     const [productList, setProductList] = useState<DataType[]>([{
              key:'',
              name:'',
               stock:0,
               retailPrice:0,
               costPrice:0,
               value:0
     }])
     const user_id=16 // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/list-products/${user_id}`)
            .then((res)=>{
               console.log(res.jsonData);
               const data=res.jsonData.map((item:any)=>{
               return{   
               //key:item.id,
               name:item.product_name,
               stock:item.stock,
               retailPrice:item.selling_price,
               costPrice:item.buying_price,
               value:Number(item.selling_price-item.buying_price)
               } 
               })
         return setProductList(data)
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
             <SearchableTable data={productList} columns={columns}/>
             </div>
              
               
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default CataloguePage;
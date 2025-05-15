import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { ColumnsType } from "antd/es/table";
import { useContext, useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import { set } from "react-hook-form";

type DataType= {
      id: number;
     name: string;
     retail_price: number;
     stock: number;
     cost_price: number;
  value: number,
      created_at: Date;
   }
   
// const productDummyData: DataType[] = [
//   {  
//     name: 'Cashew Nuts',
//     retail_price: 100,
//     stock: 50,
//     cost_price: 80,
//     value:20
//   },
//   { 
//     name: 'Sesame Seeds',
//     retail_price: 200,
//     stock: 30,
//     cost_price: 150,
//     value:50
//   },
//   { 
//     name: 'Almonds',  
//     retail_price: 300,
//     stock: 20,
//     cost_price: 250,
//     value:50
//   }
// ]


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
       dataIndex: 'retail_price',
       key: 'retail_price',
     //   width: '20%',
       //...getColumnSearchProps('age'),
     },
     {
       title: 'Cost Price',
       dataIndex: 'cost_price',
       key: 'cost_price',
    //   ...getColumnSearchProps('cost_price'),
      // sorter: (a:number, b:number) => a.cost_price.length - b.address.length,
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

     const [productList, setProductList] = useState<DataType[]>([])
     const user_id=currentUser?.id // currentUser?.id

  useEffect(() => {

   

    const fetchData = async () => {
      const { data, error } = await supabase.from('Catalogue').select('*')
      console.log({ data, error });
      setProductList(data ?? [])
      if (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
   
    
    }, [])
    //  useEffect(() => {
    //       try {
    //          useGet(`/list-products/${user_id}`)
    //         .then((res)=>{
    //            console.log(res.jsonData);
    //            const data=res.jsonData.map((item:any)=>{
    //            return{   
    //            //key:item.id,
    //            name:item.product_name,
    //            stock:item.stock,
    //            retail_price:item.selling_price,
    //            cost_price:item.buying_price,
    //            value:Number(item.selling_price-item.buying_price)
    //            } 
    //            })
    //      return setProductList(data)
    //       }).catch(err=>{
         
    //      })
    //       } catch (error) {
            
    //       }
       
    //     }, [])
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
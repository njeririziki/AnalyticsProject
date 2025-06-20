import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import CatalogueInsightSection from "@/components/reusable/CatalogueInsightsSection";
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
   
const productDummyData: DataType[] = [
  {
    key: '1',
    name: 'Cashew Nuts',
    retailPrice: 100,
    stock: 50,
    costPrice: 80,
    value:20
  },
  { key: '2',
    name: 'Sesame Seeds',
    retailPrice: 200,
    stock: 30,
    costPrice: 150,
    value:50
  },
  { key: '3',
    name: 'Almonds',  
    retailPrice: 300,
    stock: 20,
    costPrice: 250,
    value:50
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
     const user_id=currentUser?.id // currentUser?.id

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
          <div  className="w-full  flex justify-between gap-8">
             <div  className="w-5/6  pt-8 h-full ">
             <h2 className="font-semibold text-lg text-black" > Products </h2>
             <div className='pt-8'>
             <SearchableTable data={productDummyData} columns={columns}/>
             </div>
              
               
          </div>
          <CatalogueInsightSection >
          <div className="text-black flex flex-col gap-4">
            <h2 className="text-lg font-semibold"> Inventory</h2>
           
              <div className="text-black w-full p-4 border border-gray-300 rounded-md">
              <h2 className="text-md font-semibold text-gray-700"> Available Units</h2>          
              <p className="text-lg font-bold mt-4 "> 5061</p>           
              </div>
              <div className="text-black w-full p-4 border border-gray-300 rounded-md">
              <h2 className="text-md font-semibold text-gray-700"> Sold Units</h2>          
              <p className="text-lg font-bold mt-4 "> 43096</p>           
              </div>
              <div className="text-black w-full p-4 border border-gray-300 rounded-md">
              <h2 className="text-md font-semibold text-gray-700"> Net Worth(Cost)</h2>          
              <p className="text-lg font-bold mt-4 "> $5000</p>           
              </div>
            </div>
          </CatalogueInsightSection>
             </div>
        </HeaderSiderLayout>
     );
} 
export default CataloguePage;
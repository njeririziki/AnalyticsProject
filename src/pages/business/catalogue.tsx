import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import SearchableTable from "@/components/reusable/Table";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { useContext, useEffect, useState } from "react";

// "id": 2021,
// "product_name": "samsung s23 ultra",
// "buying_price": 200000,
// "selling_price": 120000,
// "whole_sale_buying_price": 100000,
// "whole_sale_selling_price": 150000,
// "category_id": 1,
// "created_at": "2023-03-30T18:18:44.000000Z",
// "updated_at": "2023-07-03T15:35:46.000000Z",
// "business_id": 614,
// "image": "This/should/be/a/path",
// "stock": "139232",
// "color": "blue",
// "brand": "samsung",
// "brand_type": "electronics"

const CataloguePage = () => {
     const {currentUser}=useContext(AuthContext)

     const [productList, setProductList] = useState<object[]>()
     const user_id=16 // currentUser?.id

     useEffect(() => {
          try {
             useGet(`/list-products/${user_id}`)
            .then((res)=>{
               console.log(res.jsonData);
               const data=res.jsonData.map((item:any)=>{
               return{
               productname:item.product_name,
               stock:item.stock,
               buyingPrice:item.buying_price,
               sellingPrice:item.selling_price,
               brand:item.brand_type
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
             <SearchableTable/>
             </div>
              
               
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default CataloguePage;
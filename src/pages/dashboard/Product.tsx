import Bars from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/DonutGraphs";
import { donutExpenseData,donutRevenueData } from "@/utils/chartTestData";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import HalfProgress from "@/components/cards/HalfProgress";
import ConversionRate from "@/components/cards/ConversionRate";
import OverviewCard from "@/components/cards/OverviewCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import useGet from "@/hooks/useGet";
import { log } from "console";
//import {supabase} from "@/utils/supabaseClient";


const ProductsTab=()=>{
  const [overviewDetails, setOverviewDetails] = useState<any>(true);

  const {currentUser}=useContext(AuthContext)

  const user_id=currentUser?.id // currentUser?.id

  useEffect(() => {
  
    
       try {
          useGet(`/list-products/${user_id}`)
         .then((res)=>{
           console.log(res.jsonData);
           const data=res.jsonData.map((item:any)=>{
           return{
            key:item.id,
            name:item.name,
            phone:item.phone,
            email:item.email} 
           })
   
       }).catch(err=>{
      
      })
       } catch (error) {
         
       }
    
     }, [])
  // if(overviewDetails){
  //   return(
  //     <div className="w-full px-8">
  //       <h2 className="font-semibold ">You have no data yet. </h2>
        
  //      </div>)
  // }
    return(
      <div className="w-full ">
      <div className="flex space-x-4  ">
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This week</p> 
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This month</p>
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This year</p>
      
        </div >
        <div className="w-5/6 h-[400px]">
        <p className="text-gray-500 mt-4">Quantities sold over time (demand)</p>
        <ParentSize>
          {({ width, height }) => (
            <Bars width={width} height={height} />
               )}
              </ParentSize>
        </div>
       
            {/* <Bars  width={600} height={350}/> */}
            <div className="  w-5/6  flex space-x-4">
          
            <div className="h-full  flex flex-col space-y-4">
            <ConversionRate percent={13} title='Conversion rate'
            text='697K'
            description=" This tell you how quickly your products are selling. 
            We will let you know when this changes.
            "/> 
            <HalfProgress percent={65} title='Customer'
            text='697K'
            description=" This tell you how quickly your products are selling. 
            We will let you know when this changes.
            "/>
           
           
            </div>
            <div className="bg-white p-8 h-full mr-4">
            <h4 className="font-semibold ">Pie</h4>
            <p>This tell you how quickly your products are selling. <br/> 
            We will let you know when this changes.</p>
            <DonutChart data={donutRevenueData} title="Revenue"
              width="370px" height="400px"/>
                 
            </div>
            </div>
    </div>
     
    )}

    export default ProductsTab;
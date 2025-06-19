import Bars from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/DonutGraphs";
import { customerDonutData } from "@/utils/chartTestData";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import HalfProgress from "@/components/cards/HalfProgress";
import ConversionRate from "@/components/cards/ConversionRate";
import OverviewCard from "@/components/cards/OverviewCard";
import { useContext, useEffect, useState } from "react";
import useGet from "@/hooks/useGet";
import { AuthContext } from "@/context/AuthContext";



const CustomersTab=()=>{
  const {currentUser}=useContext(AuthContext)
  const [overviewDetails, setOverviewDetails] = useState<any>(true);
  const user_id=currentUser?.id // currentUser?.id

  useEffect(() => {
       try {
          useGet(`/transactions/${user_id}`)
         .then((res)=>{
           console.log(res.jsonData);
           
       }).catch(err=>{
      
      })
       } catch (error) {
         
       }
    
     }, [])

  // if(overviewDetails){
  //   return(
  //     <div className="w-full px-8">
  //      <h2 className="font-semibold ">You have no data yet. </h2>
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
        <p className="text-gray-500 mt-4">Customer Retention</p>
        <ParentSize>
          {({ width, height }) => (
            <Bars width={width} height={height}  color='#129990'/>
               )}
              </ParentSize>
        </div>
       
            {/* <Bars  width={600} height={350}/> */}
            <div className="  w-5/6  flex space-x-4">
          
            <div className="h-full  flex flex-col space-y-4">
            <HalfProgress color={{ '0%': '#FFFBDE', '100%': '#096B68' }} percent={95} title='Customer'
            text='95'
            description=" This the average number of customer you gain per month. This will be updated periodically
            "/>
            <ConversionRate percent={67} title='Conversion rate' color={'#90D1CA'}
            text='65%'
            description=" This tell you how many customers you gain from marketing. 
            We will let you know when this changes.
            "/>
           
            </div>
            <div className="bg-white p-8 h-full mr-4">
            <h4 className="font-semibold ">Pie</h4>
            <p>This gives you a clear picture or how many customers you gain, loose and retain. <br/> 
            We will let you know when this changes.</p>
            <DonutChart data={customerDonutData} title="Customers"
              width="370px" height="400px"/>
                 
            </div>
            </div>
    </div>
     
    )}

    export default CustomersTab
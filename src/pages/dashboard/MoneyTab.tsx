import Bars from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/DonutGraphs";
import { donutExpenseData,donutRevenueData } from "@/utils/chartTestData";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import HalfProgress from "@/components/cards/HalfProgress";
import ConversionRate from "@/components/cards/ConversionRate";
import OverviewCard from "@/components/cards/OverviewCard";
import useGet from "@/hooks/useGet";
import { useState, useEffect, useContext } from "react";
import usePost from "@/hooks/usePost";
import { AuthContext } from "@/context/AuthContext";


//overview
//transactions/16
// "sales": null,
// "discount": null,
// "profit": null,
// "units": null


//transactions/614/monthly
// "sales": 1205,
//             "discount": 75,
//             "profit": 245,
//             "units": "4",
//             "month": "July",
//             "month_format": "23-07",
//             "month_start": "2023-07-01",
//             "created_at": "2023-07-03 13:30:45",
//             "month_end": "2023-07-31"

 const MoniesTab=()=>{

  const {currentUser}=useContext(AuthContext)
  const [overviewDetails, setOverviewDetails] = useState<any>();
  const [donutStuff, setDonutStuff] = useState<any>();
  const [barStuff, setBarStuff] = useState<any>()
  const user_id=currentUser?.id;

  useEffect(() => {
    try {
       usePost('/get/graph/info',
       {businesses :[user_id]})
      .then((res)=>{
        console.log(res.data)
        const data=res.data;
        const details= {
          refunds: data.refunds,
          debts: data.debts,
          expenses: data.expenses,
          stock: data.weekly_cost_of_goods_sold,
          profit: data.cummilative_weekly_profit,
          units: data.units,
          discounts: data.discounts
        }
    return setOverviewDetails(details)
    }).catch(err=>{
   
   })
    } catch (error) {
      
    }
 
  }, [])
if(overviewDetails){
  return(
    <div className="w-full px-8">
     <h2 className="font-semibold ">You have no data yet. </h2>
     </div>)
}
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
              <Bars 
              width={width} 
              height={height} 
              // data={barStuff}
              // xAccessor={(d:any) => d.month} 
              // yAccessor={(d:any) => d.sales} 
              />
              )}
            </ParentSize>
          </div>
         
              {/* <Bars  width={600} height={350}/> */}
              <div className=" w-5/6 flex space-x-4">
            
              <div className="  flex flex-col space-y-4">
              {/* <OverviewCard 
              percent={100} 
              title='Overview'
              text='697K'
              description=" This tell you how quickly your products are selling. 
              We will let you know when this changes.
              "/> */}
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
                width="350px" height="350px"/>
                   
              </div>
              </div>
      </div>
    )}

    export default MoniesTab
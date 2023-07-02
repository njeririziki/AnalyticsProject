import Bars, { ChartToRender } from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/DonutGraphs";
import { donutExpenseData,donutRevenueData } from "@/utils/chartTestData";
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import HalfProgress from "@/components/cards/HalfProgress";
import ConversionRate from "@/components/cards/ConversionRate";
import OverviewCard from "@/components/cards/OverviewCard";


 const MoniesTab=()=>{
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
              <div className=" w-5/6 flex space-x-4">
            
              <div className="  flex flex-col space-y-4">
              <OverviewCard percent={100} title='Overview'
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
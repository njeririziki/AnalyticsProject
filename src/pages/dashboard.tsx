import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import Bars, { ChartToRender } from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/DonutGraphs";
import InsightSection from "@/components/reusable/Insights";
import { Breadcrumb, Tabs, TabsProps } from "antd";
import { donutExpenseData,donutRevenueData } from "@/utils/chartTestData";

const MoniesTab=()=>{
  return(
    <div className="">
      <div className="flex space-x-4">
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This week</p> 
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This month</p>
        <p className="bg-gray-200 px-4 py-2 rounded-lg text-xs">This year</p>
      
        </div>
        <p className="text-gray-500 mt-4">Quantities sold over time (demand)</p>
     <Bars  width={600} height={350}/>
     <div className="flex space-x-4">
     <DonutChart data={donutExpenseData} title="Expenses"/>
     <DonutChart data={donutRevenueData} title="Revenue"/>
     </div>
     
    </div>
  )}
  const CustomersTab=()=>{
    return(
      <div className="flex flex-col space-y-4">
       {/* <ChartToRender/> */}
      </div>
    )}
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Monies`,
    children: <MoniesTab/>,
  },
  {
    key: '2',
    label: `Products`,
    children: <MoniesTab/>,
  },
  {
    key: '3',
    label: `Customers`,
    children:<CustomersTab/>,
  },
];

const HomePage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return ( 
    <HeaderSiderLayout>
    <div  className="w-full  flex justify-between">
    <div className="py-8 space-y-4">
      <h2 className="font-semibold text-lg text-black" >Hello </h2>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}
       />
    
    </div>

    <InsightSection/>
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;


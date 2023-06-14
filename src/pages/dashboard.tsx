import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import Bars, { ChartToRender } from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/BarGraphs";
import InsightSection from "@/components/reusable/Insights";
import { Breadcrumb, Tabs, TabsProps } from "antd";

const MoniesTab=()=>{
  return(
    <div className="flex flex-col space-y-4">
     <Bars  width={500} height={500}/>
     <DonutChart/>
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
    children: <DonutChart/>,
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
      <h2 className="font-semibold text-lg text-black" >Hello Njeri</h2>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}
       />
    
    </div>

    <InsightSection/>
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;


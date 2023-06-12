import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import Bars from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/BarGraphs";
import InsightSection from "@/components/reusable/Insights";
import { Breadcrumb, Tabs, TabsProps } from "antd";

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Monies`,
    children: <Bars  width={500} height={500}/>,
  },
  {
    key: '2',
    label: `Products`,
    children: <InsightSection/>,
  },
  {
    key: '3',
    label: `Customers`,
    children: `Content of Tab Pane 3`,
  },
];

const HomePage = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return ( 
    <HeaderSiderLayout>
    <div  className="w-full  flex justify-between">
    <div className="py-8 space-y-8">
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

const MoniesTab=()=>{
  return(
    <div className="flex flex-col space-y-4">
     
    </div>
  )
}
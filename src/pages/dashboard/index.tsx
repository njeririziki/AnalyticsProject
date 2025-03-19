import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import InsightSection from "@/components/reusable/Insights";
import { Tabs, TabsProps } from "antd";
import CustomersTab from "./CustomerTab";
import MoniesTab from "./MoneyTab";
import ProductsTab from "./Product";

 
const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Monies`,
    children: <MoniesTab/>,
  },
  {
    key: '2',
    label: `Products`,
    children: <ProductsTab/>,
  },
  {
    key: '3',
    label: `Customers`,
    children:<CustomersTab/>,
  },
];

const HomePage = () => {
  
  return ( 
    <HeaderSiderLayout>
    <div  className="w-full  flex justify-between">
    <div className="w-full py-8 space-y-4">
      <h2 className="font-semibold text-lg text-black" >Hello </h2>
      <Tabs defaultActiveKey="1" items={items}/>
     </div>

    <InsightSection/>
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;


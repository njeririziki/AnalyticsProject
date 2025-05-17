import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import InsightSection from "@/components/reusable/Insights";
import { Tabs, TabsProps } from "antd";
import CustomersTab from "./CustomerTab";
import MoniesTab from "./MoneyTab";
import ProductsTab from "./Product";
import { useEffect,useState } from "react";
import { supabase } from "@/utils/supabaseClient";
 import { Business } from "@/types/types";


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

  const [business, setBusiness] = useState<Business>({} as Business)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Business')
        .select('*')
        .eq('id', 1)
        .single();
  
      if (error) {
       return  console.error('Error fetching business data:', error);
      }
        setBusiness(data ? data : {});
      
    };

    fetchData();
  }, []);
  
  return ( 
    <HeaderSiderLayout>
    <div  className="w-full  flex justify-between">
    <div className="w-full py-8 space-y-4">
      <h2 className="font-semibold text-lg text-black" > Hello {business.business_name} </h2>
      <Tabs defaultActiveKey="1" items={items}/>
     </div>

    <InsightSection/>
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;


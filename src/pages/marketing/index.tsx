import CustomTabs from "@/components/ReusableComps/CustomTabs";
import HeaderSiderLayout from "../../components/layouts/HeaderSiderLayout";
import MarketingInsightSection from "@/components/reusable/MarketingInsights";
import { Tabs, TabsProps } from "antd";
import CustomerLeadsList from "@/components/lists/CustomerLeadsList";
import CustomerEmailtemplate from "@/components/templates/CustomerEmailTemplate";



const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'New Leads (4)',
    children:  <CustomerLeadsList />,
  },
  {
    key: '2',
    label: 'Follow Up',
    children: <div><h4>No data yet</h4></div>,
  }
 
];


const MarketingDash = () => {

  

  return (
    <HeaderSiderLayout>
      <div className="w-full  pt-8 h-full ">
        <h2 className="font-semibold text-lg text-black"> Marketing</h2>
        <div className=" w-full h-full flex flex-row  pt-8 ">
          <div className="w-3/4 h-5/6 border-2 border-gray-200 rounded-lg  flex flex-row mr-8 gap-4">
            <div className="w-1/2  h-full bg-white border-r border-gray-200 pl-4 flex flex-col justify-between" >
                <Tabs defaultActiveKey="1" items={items}/>
             
            </div>
            <div className="w-1/3 p-4 ">
              
              <h4 className="font-semibold text-lg text-black">
                {" "}
                Email Template
              </h4>
              <div className="w-full  bg-gray-100">
               <CustomerEmailtemplate/>
              </div>
               
            </div>
          </div>
          <div className="w-1/4 flex flex-row justify-end pr-8">
            <MarketingInsightSection />
          </div>
        </div>
      </div>
    </HeaderSiderLayout>
  );
};
export default MarketingDash;

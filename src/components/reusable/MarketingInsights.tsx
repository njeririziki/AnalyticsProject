import usePost from "@/hooks/usePost";
import { Avatar, Button, List } from "antd";
import router from "next/router";
import { useEffect, useState } from "react";
import { number } from "yup";
const data = [
    {
      title: 'Conversion Rate',
        color: 'primary', //#6fffe9'
      number: '65.71%'
    },
    {
      title: 'Sent Messages',
        color: 'green',//'#70e000'
       number: '136'
    },
    {
      title: 'Read Messages',
        color: 'yellow-500',//'#fee440'
       number: '73'
    }
  ];
const MarketingInsightSection = () => {
  const [insight, setInsight] = useState<string[]>([]);

  useEffect(() => {
     usePost('insights/get/paymentmethod',{
      businesses:[4]
     }).then((res)=>{
    
      setInsight([
          res.expense_insight,
          res.payment_method_insight,
          res.revenue_insight , 
      ])
     }).catch((err)=>{
      console.log(`err`, err);
     })
    return () => {
      
    };
  }, []);
    return (
        <div className="w-1/3 min-h-screen space-y-8 bg-white p-8 ">
         
            
            <div className="mt-12 w-full p-4 border text-black border-gray-300 rounded-md">
                <div className="w-full flex flex-row justify-between ">
                    <h3 className=" font-semibold text-lg">Scheduled Messages</h3>
                    {/* <p className="text-primary cursor-pointer"
                      onClick={() => router.push('/prelaunch/prepay')}>renew now</p> */}
                </div>
            
                <p className="text-sm mt-4 text-gray-500">Hi [user], we have curated some messages for 20
                    of your customers, please review them. The messages are scheduled for tomorrow
                    
             </p>
            </div>
            <div className="text-black ">
            
                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta          
                    title={<h3 className="font-semibold">{item.title}</h3>}
                            description={
                                <h2 className="font-semibold text-xl text-black">
                       {item.number}
                   </h2>}
                    />
                </List.Item>
                )}
                />
            </div>

            <div className="w-full p-4 text-black bg-gray-100 rounded-md space-y-4">
            <h2 className="text-lg font-semibold">Do more with Cyvil</h2>
            <p className="text-sm mt-4 text-gray-600">Upload your data to Cyvil today and stay
             productive with the newest app versions and security updates.
             </p>
             <button className="bg-primary py-2 px-4 text-white rounded"
               onClick={() => router.push('/setup')}
               >Upload Data</button>
            </div>

        </div>
      );
}
 
export default MarketingInsightSection;
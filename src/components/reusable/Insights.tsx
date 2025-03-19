import usePost from "@/hooks/usePost";
import { Avatar, Button, List } from "antd";
import router from "next/router";
import { useEffect, useState } from "react";
const data = [
    {
      title: 'Payment',
      color:'primary' //#6fffe9'
    },
    {
      title: 'Revenue changes',
      color:'green'//'#70e000'
    },
    {
      title: 'Expenses',
      color: 'yellow-500'//'#fee440'
    }
  ];
const InsightSection = () => {
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
        <div className="w-1/3 min-h-screen space-y-8 bg-white p-8">
            <button className="bg-teal-100  text-blue-700 py-2 px-4 rounded"
              onClick={() => router.push('/setup')}>
                Upload Data
            </button>
            
            <div className="w-full p-4 border text-black border-gray-300 rounded-md">
                <div className="w-full flex flex-row justify-between ">
                    <h3 className=" font-semibold text-orange-500">Renew Subscription</h3>
                    <p className="text-primary"
                      onClick={() => router.push('/prelaunch/prepay')}>renew now</p>
                </div>
            
            <p className="text-sm mt-4 text-gray-500">Renew your Cyvil subscription today and stay
             productive with the newest app versions and security updates.
             </p>
            </div>
            <div className="text-black">
            <div className="w-full flex flex-row justify-between ">  
                <h2 className="font-semibold">Insights</h2>
                <p className="text-sm text-orange-600">clear insights</p>
                </div>
                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar shape="square" className={`bg-${item.color} `} 
                    />}
                    title={item.title}
                   description={insight[index]}
                    />
                </List.Item>
                )}
                />
            </div>

            <div className="w-full mt-8  p-6  text-black bg-gray-100 rounded-md space-y-4">
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
 
export default InsightSection;
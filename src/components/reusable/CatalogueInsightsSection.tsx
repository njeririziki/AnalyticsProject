import usePost from "@/hooks/usePost";
import { Avatar, Button, List } from "antd";
import router from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { ReactNode } from "react";


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




const CatalogueInsightSection = ({children}:{children:React.ReactNode}) => {
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
                  onClick={() => router.push('/setup')}
                  >Upload Data</button>
            
           
            <div>
           
                {children}
            </div>

            <div className="self-end  w-full mt-8  p-6  text-black bg-gray-100 rounded-md space-y-4">
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
 
export default CatalogueInsightSection;
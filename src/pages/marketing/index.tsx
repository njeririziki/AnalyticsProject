import CustomTabs from '@/components/ReusableComps/CustomTabs';
import HeaderSiderLayout from '../../components/layouts/HeaderSiderLayout'
import MarketingInsightSection from '@/components/reusable/MarketingInsights';
import CustomerEmailtemplate from '@/components/templates/CustomerEmailTemplate';




const MarketingDash = () => {
    return ( 
     <HeaderSiderLayout>
     <div className="w-full flex justify-between">
     <div className="w-full  pt-8 h-full ">
       <h2 className="font-semibold text-lg text-black"> Marketing</h2>
       <div className=" w-full h-full flex flex-row  pt-8 ">
         <div className="w-full h-full bg-white border-2 border-gray-200 rounded-lg  flex flex-row mr-8 gap-4">
           <div className="w-1/2 border-r border-gray-200 px-4 ">
               <CustomTabs />
               </div>
           
           <div className="w-1/2 p-4 ">
             
             <h4 className="font-semibold text-lg text-black">
               {" "}
               Email Template
             </h4>
             
              <CustomerEmailtemplate/>
            
              
           </div>
         </div>
       
       </div>
       </div>
      
         <MarketingInsightSection />
         
       </div>
   </HeaderSiderLayout>
     );
} 
export default MarketingDash;
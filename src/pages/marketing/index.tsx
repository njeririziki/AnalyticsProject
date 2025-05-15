import CustomTabs from '@/components/ReusableComps/CustomTabs';
import HeaderSiderLayout from '../../components/layouts/HeaderSiderLayout'
import MarketingInsightSection from '@/components/reusable/MarketingInsights';

const MarketingDash = () => {
    return ( 
        <HeaderSiderLayout>
             <div  className="w-full  pt-8 h-full ">
                   <h2 className="font-semibold text-lg text-black" > Marketing</h2>
                   <div className=' w-full h-full flex flex-row  pt-8 '>
              <div className='w-3/4 h-5/6 border-2 border-gray-200 rounded-lg  flex flex-row mr-8 gap-4'>          
             <div className='w-1/2  h-full bg-white border-r border-gray-200 pl-4' >
             <CustomTabs />
                        </div>              
                             <div className='w-1/3 p-4' >
                                  
                                  <h4 className="font-semibold text-lg text-black" > Email Template</h4>
                                  <div className='w-full  bg-gray-100'>
                                       <p className=' w-full text-sm text-gray-600 pt-4'>
                                            Dear [Customer's Name],
                                            <br />
                                            <br/>
I am excited to share with you a list of items that I have curated especially for you. Based on your previous purchases and preferences, I have selected a unique set of products that I believe you will love.
                                            Here is the list of items that I have handpicked for you:
                                            <br/>
                                            <br />
                                            <div className='  bg-gray-200 p-2 rounded-md'>
                                                  [ Item 1 ]<br />
                                                  [ Item 2 ]<br />
                                                  [ Item 3 ]<br />
                                                  [ Item 4 ]<br />
                                                  [ Item 5 ]<br />
                                            </div>
                                            <br/>
                                            <br/>
                                            Thank you for choosing our store, and we look forward to serving you soon.
                                            <br/>  <br/>
Best regards,   <br/>  <br/>
Lisa
                                       </p> 
                                  </div>
                             </div>
                             </div>
                        <div className='w-1/4 flex flex-row justify-end pr-8'>
                            <MarketingInsightSection/>
                        </div>
              </div>
               
             </div>
            
        </HeaderSiderLayout>
     );
} 
export default MarketingDash;
import { Button } from "antd";
import CountDownTimer from "../reusable/CountdownTimer";
import { useRouter } from 'next/router';

const PrelaunchLayout = () => {
  const router = useRouter();

    return ( 
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 g w-screen h-screen">
       
          <div className="bg-white  h-screen flex flex-col justify-center ">
          <div  className="w-4/5 h-3/5 self-center flex flex-col justify-between ">
          <h5 className="text-3xl text-black font-medium leading-relaxed">
           <span className="font-bold  ">Congratulations!</span> You are now signed up for Cyvil beta!
          </h5>
         
          <div className="gap-y-8">
          <p className="text-orange-500 mb-4 italic ">Here is your offer, expires 12th May 2023</p>
           <div className="  bg-background text-black w-full p-4 px-8 flex justify-between items-center">
             <div className="flex flex-col gap-y-4">
             <p className="font-medium text-xs">Get 2 months free when you pay for one!!!</p>
             <h3 className="text-xl font-semibold"> KES1299</h3>
             <p className="text-xs font-thin text-gray-800"> Renews at KES1499 in the 4th month</p>
             </div>
             <Button type="primary" size="large" 
              className="bg-primary font-medium flex items-center " 
              onClick={() => router.push('/prelaunch/prepay')}
              >
              PAY NOW
             </Button>
           </div>
          </div>
          
          </div>
          </div>
          <div className="bg-primary text-white h-screen flex flex-col justify-center items-center ">
          <div  className="h-1/2  text-white flex flex-col gap-y-8
           items-center justify-between">
            <div>
          <h5 className="text-xl mb-8  font-medium italic  ">
            Cyvil goes live in ...
          </h5>
          <CountDownTimer targetDate="08/12/2023"/>
            </div> 
             <button  className=" bg-gray-400 py-4 px-8 rounded-none
              text-lg font-medium  text-primary " 
             // onClick={() => router.push('/about')}
               >
              Take me to Cyvil
             </button>
          </div>
          </div>
        </div>
        </>
     );
}
 
export default PrelaunchLayout;

 {/* <div className="gap-y-8">
          <p className="text-primary mt-8 italic">
            Check your email for further instructions
          </p></div> */}
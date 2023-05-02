import { ArrowDownRightIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";



const PrelaunchLayout = () => {
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 g w-screen h-screen">

          <div className="bg-white  h-screen flex flex-col justify-center ">
          <div  className="w-3/4 h-2/3 self-center flex flex-col justify-between ">
          <div className="gap-y-8">
          <h5 className="text-3xl text-black font-medium">
           <span className="font-bold ">Congratulations!</span> You are now signed up for lisa beta!
          </h5>
          <p className="text-primary mt-8 italic">
            Check your email for further instructions
          </p></div>
          <div className="gap-y-8">
          <p className="text-orange-500 mb-4 italic ">Here is your offer, expires 12th May 2023</p>
           <div className="  bg-background text-black w-full p-4 px-8 flex justify-between items-center">
             <div className="flex flex-col gap-y-4">
             <p className="font-medium text-xs">Get 2 months free when you pay for one!!!</p>
             <h3 className="text-xl font-semibold"> KES1299</h3>
             <p className="text-xs font-thin text-gray-600"> Renews at KES1499 in the 4th month</p>
             </div>
             <Button type="primary" size="large" 
              className="bg-primary font-medium flex items-center ">
              PAY NOW
             </Button>
           </div>
          </div>
          
          </div>
          </div>
          <div className="bg-primary text-white h-screen flex flex-col justify-center items-center ">
          <div  className="w-1/2 h-1/2  text-white flex flex-col gap-y-8
           items-center justify-between">
            <div>
          <h5 className="text-xl mb-8  font-medium italic  ">
            Lisa goes live in ...
          </h5>
             <h1 className="text-6xl tracking-wider font-extrabold  "> 12.12.38</h1>
             </div> 
             <button  className=" bg-gray-400 py-4 px-8 rounded-none
              text-lg font-medium  text-primary " >
              Take me to Lisa
             </button>
          </div>
          </div>
        </div>
     );
}
 
export default PrelaunchLayout;
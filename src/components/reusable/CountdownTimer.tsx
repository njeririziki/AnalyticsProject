import React,{ useEffect, useState,FC } from "react";

interface CountDownProps {
    targetDate:string
}

const CountDownTimer:FC<CountDownProps> = ({targetDate}) => {
   
    const getRemaingTime=()=>{
        const now = new Date();
        // const launchDate=new Date(targetDate) ;
       
        const difference= Date.parse(targetDate)-Date.parse(now.toString())
        console.log(difference)
        const minutes=Math.floor((difference/1000/60) %60);
        const hours=Math.floor((difference/ (1000 * 60 * 60)) % 24 );
        const days=Math.floor(difference/(1000 * 60 * 60 * 24));
         return { difference,
            days:days.toString().padStart(2, '0'), 
            hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0')}
       }
    const [countdown, setCountdown] = useState(getRemaingTime());
  

   useEffect(() => {
    const refresh=setInterval(()=>{
     setCountdown(getRemaingTime())
    }, 60000)
    return () => {
       clearInterval(refresh)
    };
   }, []);
   

    return ( 
    <div>
       
        <h1 className="text-7xl tracking-wider font-extrabold  ">
        {countdown?.difference <=0? '00.00.00'
        :
       ` ${countdown?.days}.${countdown?.hours}.${countdown?.minutes}`
    }
     </h1>
        
    
             
    </div> );
}
 
export default CountDownTimer;
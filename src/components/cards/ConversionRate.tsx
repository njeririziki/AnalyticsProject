import { Progress } from "antd"

type ConversionRateProps={
    percent:number
    title:string
    description:string
    text:string
}
const ConversionRate = ({percent,title,description,text}:ConversionRateProps) => {
    return ( 
        <div className="w-full bg-white">
             <div className=" bg-white p-8 ">
            <h4 className="font-semibold ">{title}</h4>
            <h4 className="font-semibold text-lg mb-4">{percent}%</h4>
             <Progress 
             type="line" percent={percent} 
             strokeLinecap="butt"
             strokeColor='#26F1D9'
             size={[200, 30]}
             showInfo={false}
             />
             <p className="text-sm ">
                {description}
             </p>
        </div>
        </div>
     );
}
 
export default ConversionRate;
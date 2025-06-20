import { Progress } from "antd";

type HalfProgressProps = {
    color?:{}
    percent:number
    title:string
    description:string
    text: string
  
}
const HalfProgress = ({color,percent,title,description,text}:HalfProgressProps) => {
    return ( 
        <div className=" bg-white p-8 space-y-4">
            <h4 className="font-semibold ">{title}</h4>
             <Progress type="dashboard" percent={percent} 
             gapDegree={160} strokeLinecap="butt"
             format={() => `${text}`}
             strokeColor={color ?? { '0%': '#108ee9', '100%': '#87d068' }}
             size={[200, 30]}
             />
             <p className="text-sm ">
                {description}
             </p>
        </div>
     );
}
 
export default HalfProgress;
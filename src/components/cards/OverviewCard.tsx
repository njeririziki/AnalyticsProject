import { Progress, Space, Tag } from "antd"

type OverviewProps={
    percent:number
    title:string
    description:string
    text:string
}
const OverviewCard = ({percent,title,description,text}:OverviewProps) => {
    return ( 
        <div className="w-full bg-white">
        <div className=" bg-white p-8 ">
       <h4 className="font-semibold mb-4">{title}</h4>
        {/* <Progress  steps={5} percent={percent} 
         strokeLinecap="butt"
        format={() => `${text}`}
        strokeColor={['#26F1D9','#ffbf00','#87d068','#f56a00','#7265e6']}
       size={[40, 30]}
        showInfo={false}
        /> */}
            <Space size={0} wrap>
            <Tag color="#f50">200k</Tag>
            <Tag color="#2db7f5">300k</Tag>
            <Tag color="#87d068">250k</Tag>
            <Tag color="#108ee9">300k</Tag>
            </Space>
        <h4 className="font-semibold my-4">Pesa iko wapi</h4>
        
   </div>
   </div>
     );
}
 
export default OverviewCard;
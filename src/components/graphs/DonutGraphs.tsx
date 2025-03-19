import { ResponsivePie } from '@nivo/pie'

type DonutProps={
    data:object[]
    title:string
    width:string
    height:string
}
  

 const DonutChart = ({data,title,width,height}:DonutProps) => (
    <div // className={`w-[${width}] h-[${height}]`} 
     style={{height:`${height}`, width:`${width}`, backgroundColor:'#ffffff'}}
    >
        <p className='mx-4 mt-2'>{title}</p>
    <ResponsivePie
     data={data}
     margin={{ top: 20, right: 70, bottom: 20, left: 20 }}
     innerRadius={0.8}
     padAngle={0.5}
     cornerRadius={3}
     colors={{ scheme: 'paired' }}
     //borderWidth={1}  
    // borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    enableArcLabels={false}
     arcLinkLabelsSkipAngle={10}
     arcLinkLabelsTextColor="#333333"
     arcLinkLabelsThickness={2}
     arcLinkLabelsColor="#ffffff"
     arcLabelsSkipAngle={10}
     arcLabelsTextColor={{
         from: 'color',
         modifiers: [
             [
                 'darker',
                 2
             ]
         ]
     }}
     
     legends={[
         {
             anchor: 'bottom',
             direction: 'row',
             justify: false,
             translateX: 70,
             translateY: 0,
             itemsSpacing: 0,
             itemWidth: 80,
             itemHeight: 20,
            //  itemTextColor: '#999',
             itemDirection: 'left-to-right',
             itemOpacity: 1,
             symbolSize: 12,
             symbolShape: 'circle',
             effects: [
                 {
                     on: 'hover',
                     style: {
                         itemTextColor: '#000'
                     }
                 }
             ]
         }
     ]}
    />
    
</div>
)

export default DonutChart;
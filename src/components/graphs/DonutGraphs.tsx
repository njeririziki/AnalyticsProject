import { ResponsivePie } from '@nivo/pie'

  

 const DonutChart = ({data,title}:{data:object[],title:string}) => (
    <div style={{height:'370px', width:'350px', backgroundColor:'#ffffff'}}>
        <p className='mx-4 mt-2'>{title}</p>
    <ResponsivePie
     data={data}
     margin={{ top: 20, right: 70, bottom: 20, left: 20 }}
     innerRadius={0.8}
     padAngle={0.5}
     cornerRadius={3}
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
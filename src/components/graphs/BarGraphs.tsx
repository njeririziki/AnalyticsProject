import { ResponsivePie } from '@nivo/pie'
const data = [
    {
      "id": "hack",
      "label": "hack",
      "value": 455,
      "color": "hsl(163, 70%, 50%)"
    },
    {
      "id": "sass",
      "label": "sass",
      "value": 244,
      "color": "hsl(107, 70%, 50%)"
    },
    {
      "id": "stylus",
      "label": "stylus",
      "value": 131,
      "color": "hsl(296, 70%, 50%)"
    },
    {
      "id": "rust",
      "label": "rust",
      "value": 507,
      "color": "hsl(312, 70%, 50%)"
    },
    {
      "id": "erlang",
      "label": "erlang",
      "value": 6,
      "color": "hsl(56, 70%, 50%)"
    }
  ]

  
 const DonutChart = () => (
    <div style={{height:'370px', width:'350px', backgroundColor:'#ffffff'}}>
    <ResponsivePie
     data={data}
     margin={{ top: 20, right: 70, bottom: 20, left: 20 }}
     innerRadius={0.6}
     padAngle={0.5}
     cornerRadius={3}
     borderWidth={1}
     borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
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
             anchor: 'top-right',
             direction: 'column',
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
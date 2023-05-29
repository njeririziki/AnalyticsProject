import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import Bars from "@/components/graphs/Bars";
import DonutChart from "@/components/graphs/BarGraphs";

const data = [
  { label: 'Label 1', value: 20 },
  { label: 'Label 2', value: 30 },
  { label: 'Label 3', value: 10 },
  { label: 'Label 4', value: 15 },
  { label: 'Label 5', value: 25 },
];

const HomePage = () => {
  return ( 
    <HeaderSiderLayout>
    <div>
      <h2 className="font-semi6bold text-lg text-black" >Hello Njeri</h2>
      <div className="flex flex-col space-y-4">
       <Bars  width={500} height={500}/>
       <DonutChart/>
       </div>
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;
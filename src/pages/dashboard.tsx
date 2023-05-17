import { DashboardBar } from "@/components/graphs/BarGraphs";
import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";
import { barData } from "@/utils/chartTestData";

const HomePage = () => {
  return ( 
    <HeaderSiderLayout>
    <div>
      <h2 className="font-semi6bold text-lg text-black" >Hello Njeri</h2>
      <div className="w-1/2 h-1/2">
      <DashboardBar data={barData}/>
      </div>
      
    </div>
    </HeaderSiderLayout>

   );
}

export default HomePage;
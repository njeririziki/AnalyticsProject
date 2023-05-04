import AddBusinessForm from "@/components/business/AddBusiness";
import HeaderSiderLayout from "@/components/layouts/HeaderSiderLayout";

const NewUserDash = () => {
  return (    
 <div className='h-screen bg-background flex flex-col justify-center items-center'>
  <AddBusinessForm/>
 </div>
);
}

const HomePage = () => {
  return ( 
    <HeaderSiderLayout>
    <div>
      <h2 className="font-semi6bold text-lg text-black" >Integations</h2>
    </div>
    </HeaderSiderLayout>

   );
}
 
export default NewUserDash;
//export default HomePage;
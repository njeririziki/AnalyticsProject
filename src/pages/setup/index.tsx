import MainHeaderLayout from "@/components/layouts/MainHeaderLayout";
import SetUpList from "@/components/reusable/SetUpList";
import Image from "next/image";


const NewUserSetUP = () => {

    return ( 
      <MainHeaderLayout>
         <div className="bg-white grid grid-cols-1 md:grid-cols-2 py-12">
           
          <SetUpList/>
        <Image src="/images/rafiki.png" alt='user setup'  width={500} height={500}/>
         </div>
      </MainHeaderLayout> 
     );
}
 
export default NewUserSetUP;
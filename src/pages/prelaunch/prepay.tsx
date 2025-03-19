import MainLayout from "@/components/layouts/default";
import MakePaymentForm from "@/components/reusableforms/MakePaymentForm";
import { AuthContext } from '@/context/AuthContext';
import { useContext } from "react";

const PrelaunchPay = () => {
  const {currentUser}=useContext(AuthContext)
  const payload={
    amount:1, 
    email:currentUser?.email,
    user_id:currentUser?.id
  }
    return ( 
        <MainLayout>
          <MakePaymentForm endpoint="/prepay/Cyvil/package" params={payload} />
        </MainLayout>
     );
}
 
export default PrelaunchPay;
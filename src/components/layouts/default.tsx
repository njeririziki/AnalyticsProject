import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";

const MainLayout = ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated}=useContext(AuthContext)
 
  useEffect(() => {
    if(isAuthenticated){
      console.log('authentication is right')
    }
  
  }, [isAuthenticated]);
    return ( 
     <div className='w-screen h-screen overflow-y-auto bg-background flex justify-center items-center  '>
       {children}
     </div>   
     );
}
 
export default MainLayout;
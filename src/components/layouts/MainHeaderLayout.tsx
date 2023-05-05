import { useContext, useEffect,useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import HeaderLayout from "./Header";
import {useRouter} from "next/router";
import { User } from "@/types/types";



const MainHeaderLayout = ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated}=useContext(AuthContext)
 const [url, setUrl] = useState('');
   const router=useRouter()

  useEffect(() => {

    if(isAuthenticated){
      console.log('authentication is right')
      const userJSON= sessionStorage.getItem('user')
      const user:User | null = userJSON? JSON.parse(userJSON):null;
      const url=user?.image? user?.image:'/images/Ellipse 99.png'
      setUrl(url);
    }
    // this part should not be here only authenticated users should see this
    const url='/images/Ellipse 99.png'
    setUrl(url);
    console.log('no authentication authentication')
  }, [isAuthenticated]);
    return ( 
     <div className='w-screen h-screen overflow-y-auto bg-background flex justify-center items-center  '>
       <HeaderLayout url={url}/>
       {children}
     </div>   
     );
}
 
export default MainHeaderLayout;
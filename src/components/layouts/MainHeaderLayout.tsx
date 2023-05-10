import { useContext, useEffect,useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import HeaderLayout from "./Header";
import {useRouter} from "next/router";
import { User } from "@/types/types";
import { Skeleton } from "antd";



const MainHeaderLayout = ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated}=useContext(AuthContext)
 const [url, setUrl] = useState('');
   const {push}=useRouter()

  useEffect(() => {

    if(isAuthenticated){
      console.log('authentication is right')
      const userJSON= sessionStorage.getItem('user')
      const user:User | null = userJSON? JSON.parse(userJSON):null;
      const url=user?.image? user?.image:'/images/Ellipse 99.png'
      setUrl(url);
    }
  //  push('/authentication/login')
    console.log('no authentication authentication')
    // this part should not be here only authenticated users should see this
    // const url='/images/Ellipse 99.png'
    // setUrl(url);
    
  }, [isAuthenticated]);
  //  if(!isAuthenticated){
  //  return  <Skeleton avatar paragraph={{ rows: 4 }} />
  // }
    return ( 
     <div className='w-screen h-screen overflow-y-auto bg-background flex justify-center items-center  '>
       <HeaderLayout url={url}/>
       {children}
     </div>   
     );
}
 
export default MainHeaderLayout;
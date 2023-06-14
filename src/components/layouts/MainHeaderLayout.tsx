import { useContext, useEffect,useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import HeaderLayout from "./Header";
import {useRouter} from "next/router";
import { User } from "@/types/types";
import { Skeleton } from "antd";



const MainHeaderLayout = ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated,currentUser}=useContext(AuthContext)
 const [url, setUrl] = useState('');
   const {push}=useRouter()

  useEffect(() => {

    if(isAuthenticated){
   
      const userJSON= sessionStorage.getItem('user')
      const user:User | null = userJSON? JSON.parse(userJSON):null;
      const url=user?.image? user?.image:'/images/Ellipse 99.png'
      setUrl(url);
    } else{
      // console.log('is unauthenticated')
      // push('/authentication/login')
      
    }
  
    // this part should not be here only authenticated users should see this
    //  const url='/images/Ellipse 99.png'
    //  setUrl(url);
    
  }, [isAuthenticated]);
  //  if(!isAuthenticated){
  //  return (
  //  <div className='w-screen h-screen overflow-y-auto bg-background '>   
  //   <Skeleton avatar paragraph={{ rows: 4 }} />
  //   </div> 
  //  )}
    return ( 
     <div className='w-screen min-h-screen overflow-y-auto bg-background flex justify-center items-center  '>
       <HeaderLayout url={url}/>
       {children}
     </div>   
     );
}
 
export default MainHeaderLayout;
import { useContext, useEffect,useState } from "react";
import HeaderLayout from "./Header";
import {useRouter} from "next/router";
import { User } from "@/types/types";
import { Skeleton } from "antd";



const MainHeaderLayout = ({children}:{children:React.ReactNode}) => {
  //const [isAuthenticated, setIsAuthenticated] = useState(false)
 const [url, setUrl] = useState<string>('');
   const {push}=useRouter()

  useEffect(() => {

    const tk=sessionStorage.getItem('token')
      
      if(tk){
       console.log('header', tk)  
       const userJSON= sessionStorage.getItem('user')
       const user:User | null = userJSON? JSON.parse(userJSON):null;
       const url=user?.image? user?.image:'/images/Ellipse 99.png'
       setUrl(url);
       } else{
      // console.log('is unauthenticated')
      // push('/authentication/login')
      const url='/images/Ellipse 99.png'
      setUrl(url);
    }
    
  }, []);
  //  if(url===''){
  //  return (
  //   <div className='w-screen h-screen overflow-y-auto bg-background 
  //   h-1/2 d-flex justify-center'>   
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
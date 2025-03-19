import { Avatar } from "antd";
import { UserIcon } from "@heroicons/react/24/solid";

const HeaderLayout = ({url}:{url:string}) => {
    return ( 
        <nav className="bg-transparent flex flex-wrap justify-between pt-8 px-8
        fixed w-full z-10 top-0   overflow-clip">
          <div>
          <h1 className="text-primary text-xl font-bold">Cyvil</h1>
          </div>
          <Avatar src={<img src={url} alt="avatar" />} />
    
        </nav>
     );
}
 
export default HeaderLayout;
import { Avatar } from "antd";
import { UserIcon } from "@heroicons/react/24/solid";

const HeaderLayout = () => {
    return ( 
        <nav className="bg-transparent flex flex-wrap justify-between p-4 
        fixed w-full z-10 top-0 space-x-4 wfull overflow-clip">
             <h1 className="text-primary text-xl font-bold">lisa</h1>
             <Avatar size="large" icon={<UserIcon className="w-12 h-12 text-white" />} />
        </nav>
     );
}
 
export default HeaderLayout;
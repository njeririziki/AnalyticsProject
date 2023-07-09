import { useState } from "react";
import { Menu, MenuProps } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  Loading3QuartersOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";



const { SubMenu } = Menu;

const CustomMenu = () => {
  const [current, setCurrent] = useState('');
  const {push}=useRouter()


  const handleClick = (e: any) => {
    console.log(e.key)
    setCurrent(e.key);
  };
 const Logout=()=>{
   sessionStorage.clear()
   push('/authentication/login')
 }
  return (
    <div className="min-h-screen bg-background  pt-20 fixed 
     border border-r-slate-300 flex flex-col justify-between">

    <Menu 
    className="bg-background"
     theme="light"
     mode="inline"
    defaultSelectedKeys={['dashboard']}
    defaultOpenKeys={['SubMenu']}
    onClick={handleClick}
    selectedKeys={[current]}
   >
      
      <Menu.Item key="dashboard" >
      <Link href="/dashboard"> Dashboard </Link>
      </Menu.Item>
      <Menu.Item key="marketing">
      <Link href="/marketing">  Marketing </Link>
      </Menu.Item>
      <SubMenu key="SubMenu"  title="Business manager">
      
          <Menu.Item key="catalogue">
          <Link href="/business/catalogue">Catalogue</Link></Menu.Item>
          <Menu.Item key="transactions">
          <Link href="/business/transactions">Transactions</Link>
            </Menu.Item>
          <Menu.Item key="userroles">User Roles</Menu.Item>
          <Menu.Item key="customers">
          <Link href="/business/customers"> Customers</Link>
           </Menu.Item>
       
      </SubMenu>

    </Menu>
    <Menu className="bg-background">
    <Menu.Item key="articles" >
        <a href="https://" target="_blank" rel="noopener noreferrer">
          Articles
        </a>
      </Menu.Item>
      <Menu.Item key="help" >
        <a href="https://" target="_blank" rel="noopener noreferrer">
          Help
        </a>
      </Menu.Item>
      <Menu.Item key="logout" onClick={Logout}>
        Logout
      </Menu.Item>
    </Menu>
    </div>
    
  );
};

export default CustomMenu;

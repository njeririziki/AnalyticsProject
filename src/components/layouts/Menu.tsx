import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { SubMenu } = Menu;

const CustomMenu = () => {
  const [current, setCurrent] = useState("dashboard");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div className="min-h-screen bg-background  pt-20 fixed 
     border border-r-slate-300 flex flex-col justify-between">

    <Menu 
    className="bg-background"
     theme="light"
    mode="inline"
    onClick={handleClick} selectedKeys={[current]} >
      
      <Menu.Item key="dashboard" >
       Dashboard
      </Menu.Item>
      <Menu.Item key="marketing">
      Marketing 
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
    </Menu>
    </div>
    
  );
};

export default CustomMenu;

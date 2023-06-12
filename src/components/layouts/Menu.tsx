import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const CustomMenu = () => {
  const [current, setCurrent] = useState("dashboard");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu 
   className="min-h-screen bg-background pl-8 "
     theme="light"
    mode="inline"
    onClick={handleClick} selectedKeys={[current]} >
      <div  className='min-h-screen fixed pt-20  '>
        
      <Menu.Item key="dashboard" >
       Dashboard
      </Menu.Item>
      <Menu.Item key="marketing">
      Marketing 
      </Menu.Item>
      <SubMenu key="SubMenu"  title="Business manager">
      
          <Menu.Item key="catalogue">Catalogue</Menu.Item>
          <Menu.Item key="transactions">Transactions</Menu.Item>
          <Menu.Item key="userroles">User Roles</Menu.Item>
          <Menu.Item key="customers">Customers</Menu.Item>
       
      </SubMenu>
   
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
      </div>
      
    </Menu>
  );
};

export default CustomMenu;

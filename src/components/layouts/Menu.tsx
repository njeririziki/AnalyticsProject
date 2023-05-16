import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const CustomMenu = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <Menu 
    className='h-full pt-20 flex flex-col '
    theme="light"
    mode="inline"
    onClick={handleClick} selectedKeys={[current]} >
        <div className="justify-self-start">
      <Menu.Item key="mail" >
       Dashboard
      </Menu.Item>
      <Menu.Item key="app">
        Business
      </Menu.Item>
      <SubMenu key="SubMenu"  title="Marketing ">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      </div>
      <div className="justify-self-end">
      <Menu.Item key="alipay" >
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Articles
        </a>
      </Menu.Item>
      <Menu.Item key="alipay" >
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Help
        </a>
      </Menu.Item>
      </div>
    
    </Menu>
  );
};

export default CustomMenu;

import React from 'react';
import { Breadcrumb, Layout, Menu} from 'antd';
import HeaderLayout from './Header';
import CustomMenu from './Menu';

const { Header, Content, Sider } = Layout;

const HeaderSiderLayout= ({children}:{children:React.ReactNode}) => {
 
  return (
    <Layout className='bg-background'>
      <HeaderLayout url='./images/Ellipse 99.png'/>
        <Layout>
      <Sider
      className='bg-background min-h-screen '
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {console.log(collapsed, type); }}
       >
        <CustomMenu />
      </Sider>
      
        <Layout className='p-8'>
          <Breadcrumb >
            <Breadcrumb.Item>Integrations</Breadcrumb.Item>
            <Breadcrumb.Item>Data</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        <Content >
          <div className='bg-background mt-8 h-full ' >
            {children}
          </div>
        </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default HeaderSiderLayout;
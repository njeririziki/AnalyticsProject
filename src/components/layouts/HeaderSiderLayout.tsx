import React from 'react';
import { Breadcrumb, Layout, Menu} from 'antd';
import HeaderLayout from './Header';

const { Header, Content, Sider } = Layout;

const HeaderSiderLayout= ({children}:{children:React.ReactNode}) => {
 
  return (
    <Layout className='bg-background'>
        <HeaderLayout/>
        <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
     
        <Menu
         // theme="dark"
         className='bg-background h-full min-h-screen'
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[' ','Dashboard','Marekting','Business Manager'].map(
            (item, index) => ({
              key: String(index + 1),
             // icon: React.createElement(icon),
              label: item,
            }),
          )}
        />
      </Sider>
      
        {/* <Header className='bg-background p-0'  /> */}
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
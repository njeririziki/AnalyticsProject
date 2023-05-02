import React from 'react';
import { Layout, Menu} from 'antd';

const { Header, Content, Sider } = Layout;

const HeaderSiderLayout= ({children}:{children:React.ReactNode}) => {
 
  return (
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
        <div className="logo" />
        <Menu
         // theme="dark"
         className='bg-background h-full min-h-screen'
          mode="inline"
          defaultSelectedKeys={['4']}
          items={['Dashboard','Marekting','Business Manager'].map(
            (item, index) => ({
              key: String(index + 1),
             // icon: React.createElement(icon),
              label: item,
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header className='bg-background p-0'  />
        <Content >
          <div className='bg-background p-12 h-full min-h-screen' >
            {children}
          </div>
        </Content>
        
      </Layout>
    </Layout>
  );
};

export default HeaderSiderLayout;
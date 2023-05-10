import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Skeleton} from 'antd';
import HeaderLayout from './Header';
import { AuthContext } from '@/context/AuthContext';
import { User } from '@/types/types';
import { useRouter } from 'next/router';

const { Header, Content, Sider } = Layout;

const HeaderSiderLayout= ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated}=useContext(AuthContext)
  const [url, setUrl] = useState('');
    const {push}=useRouter()
 
   useEffect(() => {
 
     if(isAuthenticated){
       console.log('authentication is right')
       const userJSON= sessionStorage.getItem('user')
       const user:User | null = userJSON? JSON.parse(userJSON):null;
       const url=user?.image? user?.image:'/images/Ellipse 99.png'
       setUrl(url);
     }
    // push('/authentication/login')
     console.log('no authentication authentication')
     // this part should not be here only authenticated users should see this
     // const url='/images/Ellipse 99.png'
     // setUrl(url);
     
   }, [isAuthenticated]);
  //  if(!isAuthenticated){
  //   return  <Skeleton avatar paragraph={{ rows: 4 }} />
  //  }
  return (
    <Layout className='bg-background'>
       <HeaderLayout url={url}/>
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
import React, { useContext, useEffect, useState } from 'react';
import { Breadcrumb, Layout, Menu, Skeleton} from 'antd';
import HeaderLayout from './Header';
import { AuthContext } from '@/context/AuthContext';
import { User } from '@/types/types';
import { useRouter } from 'next/router';
import CustomMenu from './Menu';

const { Header, Content, Sider } = Layout;

const HeaderSiderLayout= ({children}:{children:React.ReactNode}) => {
  const {isAuthenticated}=useContext(AuthContext);
  const [url, setUrl] = useState('');
    const {push}=useRouter()
 
   useEffect(() => {
 
     if(isAuthenticated){
       
       const userJSON= sessionStorage.getItem('user')
       const user:User | null = userJSON? JSON.parse(userJSON):null;
       const url=user?.image? user?.image:'/images/Ellipse 99.png'
       setUrl(url);
     } else{
      push('/authentication/login')
     
    }

   }, [isAuthenticated]);
   if(!isAuthenticated){
    return (
      <div className='w-screen h-screen overflow-y-auto bg-background '>   
      <Skeleton avatar paragraph={{ rows: 4 }} />
      </div> 
    )
   }
  return (
    <Layout className='bg-background'>
       <HeaderLayout url={url}/>
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
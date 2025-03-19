import { NextComponentType } from 'next';
//import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// interface Props {
//     authenticated: boolean;
//   }

 const withAuth = <T extends React.ComponentType<any>>(Component: T)=> {
  const Auth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
        const authenticated =sessionStorage.getItem('token')
     
      if (!authenticated && router.pathname !== '/authentication/login') {
        router.push('/authentication/login');
      }
    }, [router]);

   // return <Component {...props} />;
  };

  return Auth;
};
export default withAuth;
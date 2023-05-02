import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// interface Props {
//     authenticated: boolean;
//   }

const withAuth = ({ Component}: AppProps) => {
  const Auth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
        const authenticated =sessionStorage.getItem('token')
      if (!authenticated) {
        router.push('/login');
      }
    }, []);

    // return <Component {...props} />;
  };

  return Auth;
};

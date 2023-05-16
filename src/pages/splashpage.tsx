import { Button } from 'antd';
import { GetStaticPaths,GetStaticProps } from 'next';
import { useRouter } from 'next/router';

const splashpage = () => {
    const {push}= useRouter()
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
             <h1 className="justify-self-start mt-8 text-primary text-2xl font-bold">lisa</h1>
     
             <div className='space-y-8'>
           
                <h1 className='font-bold text-7xl'>Unsuckify 
                <span className='text-primary'> Analytics</span></h1>
                <p className='font-medium text-xl'> We didn’t reinvent the wheel, only the way
                     investors discover new startups</p>

                     <div className='flex space-x-4'>
                        <Button onClick={()=>push('/authentication/singup')}>
                            Sign Up
                        </Button>
                        <Button onClick={()=>push('/authentication/login')}>
                            Log In
                        </Button>
                     </div>
                 </div> 
           
        </div>
    );
}


export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default splashpage;
import { Button } from 'antd';
import { GetStaticPaths,GetStaticProps } from 'next';

const Splashpage = () => {
   // const {push}= useRouter()
    return (
        <div className='w-screen h-screen flex  flex-col justify-between text-black items-center'>
            <h1  className=" mt-8 text-primary text-2xl font-bold">lisa</h1>

             <div className='self-center flex flex-col  space-y-12 '>
               <h1 className='font-bold text-8xl'>Simply
                <span className='text-primary'> Growth</span></h1>
                <p className='font-bold text-xl text-center'> We didn’t reinvent the wheel, only the way
                     businesses grow </p>   
                                   
                 </div> 
               <div></div>
           
        </div>
    );
}


export const getStaticProps: GetStaticProps = async (ctx) =>{


    return {
        props:{

        }
    }
}

export default Splashpage;


{/* <div className='self-center flex space-x-4'>
<Button size='large' className='bg-primary text-white'
onClick={()=>push('/authentication/signup')}>
    Sign Up
</Button>
<Button 
size='large' className='bg-black hover:bg-gray-600 text-white'
onClick={()=>push('/authentication/login')}>
    Log In
</Button>
</div> */}
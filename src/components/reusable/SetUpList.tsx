import { Button, Typography } from "antd";
import { useRouter } from "next/router";

const { Title,Text, Link } = Typography;
  

const list=[
    '1. Upload your Contacts',
    '2. Upload your catalogue',
    '3. Upload your Sales data/transactions',
    '4. Connect to Whatsapp',
    '5. Download lisa for android',
]
const SetUpList = () => {

    const router= useRouter()

    return ( 
        <div className="  justify-self-center flex flex-col  justify-between">
        <Title level={3}> Let's help you get started</Title>
        <div className="flex flex-col space-y-6 ">
       { list.map(text=> <Text  className="text-black" delete={false}>{text}</Text>
          )}
        </div>
       <Button  className="bg-primary text-white" disabled
        onClick={()=>router.push('/dashboard/')}>
        Proceed to Dashboard
       </Button>
        </div>
     );
}
 
export default SetUpList;
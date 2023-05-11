import { Button, Typography, Upload } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalContainer from "./ModalContainer";
import DraggerUpload from "./DraggerUpload";
import { contactTemplateHeaders } from "@/utils/templateHeaders";
const { Title,Text, Link } = Typography; 
 


const list=[
   { text:'Upload your Contacts',delete:false, disabled:false, active:true,} ,
   { text: 'Upload your catalogue',delete:false, disabled:false, active:false} ,
   { text: 'Upload your Sales data/transactions',delete:false, disabled:false, active:false} ,   
]
const SetUpList = () => {
    const [disableButton, setDisableButton] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const router= useRouter()

   const onClickLink=(index:number)=>{
    setOpenModal(true)
    setModalText( list[index].text)
     list[index]={...list[index],delete:true,disabled:true, active:false }
     
     if(index===2){
        setDisableButton(false)
     }
     list[index+1].active=true
   }

    return ( 
        <div className="  justify-self-center flex flex-col  justify-between">
        <Title level={3}
        > 
        Let's help you get started
        </Title>
        <div className="flex flex-col space-y-6 cursor-pointer ">
       { list.map((item,i)=> 
       <Text  key={i}
          className={item.active?'text-primary':'text-black'} 
          delete={item.delete} 
          onClick={()=>onClickLink(i)}
          disabled={item.disabled}>
          {i+1}. {item.text}
        </Text>
          )}    
            <Text>
              4. Connect to Whatsapp
            </Text>
            <Text 
            className="text-black">
            5. Download lisa for android
            </Text>
        
        </div>
       <Button  className="bg-primary text-white" disabled={disableButton}
        onClick={()=>router.push('/dashboard/')}>
        Proceed to Dashboard
       </Button>
       <ModalContainer title={modalText} open={openModal} onClose={()=>setOpenModal(false)}>
         <DraggerUpload templateHeader={contactTemplateHeaders} />
         </ModalContainer>  
        </div>
     );
}
 
export default SetUpList;
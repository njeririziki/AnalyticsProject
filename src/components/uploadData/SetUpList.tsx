import { Button, Typography, Upload } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalContainer from "../reusable/ModalContainer";
import DraggerUpload from "./DraggerUpload";
import { requiredColumns,contactTemplateHeaders, testContactData } from "@/utils/templateHeaders";
import {DownloadTemplate } from "./CreateTemplate";

type SelectedProps={
  index:number;
  endpoint:string;
  template:string[];
  requiredColumns:string[];
  dummyData:object[]
}
const { Title,Text, Link } = Typography; 
  
const list=[
   { text:'Upload your Contacts',endpoint:'/upload/contacts',
   delete:false, disabled:false, active:true,
   template:contactTemplateHeaders, required:requiredColumns.contacts,dummyData:testContactData } ,
   { text: 'Upload your catalogue',endpoint:'/upload/contacts',delete:false, disabled:false, active:false} ,
   { text: 'Upload your Sales data/transactions',endpoint:'upload/contacts',delete:false, disabled:false, active:false},   
]
const SetUpList = () => {
    const [disableButton, setDisableButton] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [modalText, setModalText] = useState('');
    const [selected, setSelected] = useState<SelectedProps>({
      index:0,
      endpoint:list[0].endpoint,
      template:list[0].template||[],
      requiredColumns:list[0].required||[],
      dummyData:list[0].dummyData ||[]
    })
    const router= useRouter()

   const onClickLink=(index:number)=>{
    setOpenModal(true)
    setModalText( list[index].text)
    setSelected({
      index:index,
      endpoint:list[index].endpoint,
      template:list[index].template||[],
      requiredColumns:list[index].required||[],
      dummyData:list[index].dummyData ||[]
    })
   }
   const uploadFiles=()=>{
       console.log('upload in setup')
      list[selected.index]={...list[selected.index],delete:true,disabled:true, active:false }
     
      if(selected.index<2){
       list[selected.index+1].active=true   
      }
     if(selected.index===2){
       setDisableButton(false)
     }
     setOpenModal(false);
     setDisableButton(false)
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
         <DraggerUpload 
          templateHeader={selected.template}
          endpoint={selected.endpoint}
          uploadFunc={uploadFiles}
          />
         {/* <DownloadTemplate bookName="contacts"
         headers={selected.template} 
         data={selected.dummyData} 
         /> */}
         </ModalContainer>  
        </div>
     );
}
 
export default SetUpList;
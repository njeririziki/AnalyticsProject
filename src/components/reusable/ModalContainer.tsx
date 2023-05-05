import { Modal, Typography } from "antd";
import { type } from "os";
import { useState } from "react";

type ModalProps={
    message:string,
    open:boolean,
    onClose:() => void;
    children?: React.ReactNode;
}

const ModalContainer = ({message,open,onClose,children}:ModalProps) => {
  
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');


    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          onClose();
          setConfirmLoading(false);
        }, 2000);
      };

    return ( 
        <Modal 
        title={message}
        open={open}
        onOk={handleOk}
        onCancel={onClose}
        className="bg-white p-8"
        >
             <p>{modalText}</p>
            
            {children}
        </Modal>
     );
}
 
export default ModalContainer;
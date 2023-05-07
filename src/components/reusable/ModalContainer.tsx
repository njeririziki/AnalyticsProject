import { Modal, Button, Upload } from "antd";
import { useState } from "react";

const { Dragger } = Upload; 

type ModalProps={
    title:string,
    open:boolean,
    onClose:() => void;
    children?: React.ReactNode;
}

const ModalContainer = ({title,open,onClose,children}:ModalProps) => {
  
    const [confirmLoading, setConfirmLoading] = useState(false);
   


    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          onClose();
          setConfirmLoading(false);
        }, 2000);
      };

    return (  
        <Modal 
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={onClose}
        footer={[
          <Button
            key="link"
            href="https://google.com"
            type="primary"
           // loading={loading}
            onClick={handleOk}
          >
           Upload files to Lisa
          </Button>,
        ]}
        >
        {children}
        </Modal>
     );
}
 
export default ModalContainer;
import React, { useEffect, useState} from 'react';
import { List,message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { supabase } from '@/utils/supabaseClient';
import { Customer } from '@/types/types';
import CustomerEmailtemplate from '../templates/CustomerEmailTemplate';
import { render } from "@react-email/render";
import axios from 'axios';

const CustomerLeadsList: React.FC = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('Customer')
          .select('*')
          .eq('business_id', 1);
        if (error) throw error;
        
        setData(data ?? []);
      } catch (err) {
        console.error('Error fetching data:', err);
         setData([]);
      }
    };
    fetchData();
  }, []);

  const handleSendEmail = async ({  subject }: {  subject: string;  }) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_EMAIL_URL}/resend-email`, {
        subject,
        html: render(<CustomerEmailtemplate />)
      },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            "Content-Type": "application/json",
          },
        });
      console.log(res.data);
      if (res.status === 200) {
        messageApi.open({
          type: 'success',
          content: 'Business added successfully',
        });
      } else {
        messageApi.open({
          type: 'error',
          content: res.data.error.message,
        });
      }
    } catch (error) {
      messageApi.open({
        type: 'error',
        content: "Send mail failed"+error,
      });  
    }
  };
  return (
    <>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          actions={[<SendOutlined onClick={() =>
            handleSendEmail({
              subject: `${item.customer_name} Thank you for your continued support`,           
            })} />]}
        >
          <List.Item.Meta
           title={item.customer_name}
            description={item.email}
          />
        </List.Item>
      )}
      />
      {contextHolder}
      </>
  );
};
export default CustomerLeadsList;
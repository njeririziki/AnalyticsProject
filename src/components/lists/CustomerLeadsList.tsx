import React, { useEffect, useState} from 'react';
import { List } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { supabase } from '@/utils/supabaseClient';
import { Customer } from '@/types/types';
import CustomerEmailtemplate from '../templates/CustomerEmailTemplate';


const CustomerLeadsList: React.FC = () => {

  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('Customer')
          .select('*')
          .eq('business_id', 1);
        if (error) throw error;
        console.log('Fetched data:', data);
        

        setData(data ?? []);
      } catch (err) {
        console.error('Error fetching data:', err);
         setData([]);
      }
    };
    fetchData();
  }, []);

  const handleSendEmails = async ({ to, subject, html }: { to: string; subject: string; html: React.ReactElement }) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_EMAIL_URL}/resend-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, subject, html }),
    });
    const data = await res.json();
    return data;
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          actions={[<SendOutlined onClick={() =>
            handleSendEmails({
              to: item.email,
              subject: `${item.customer_name} Thank you for your continued support`,
              html:<CustomerEmailtemplate/>
            })} />]}
        >
          <List.Item.Meta
           title={item.customer_name}
            description={item.email}
          />
        </List.Item>
      )}
    />
  );
};
export default CustomerLeadsList;
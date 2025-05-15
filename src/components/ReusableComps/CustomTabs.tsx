import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import UserList from '../lists/UserList';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'New Leads (4)',
    children: <UserList />,
  },
  {
    key: '2',
    label: 'Follow Up',
    children: <div><h4>No data here</h4></div>,
  },
  {
    key: '3',
    label: 'Closed',
    children: <div><h4>No data here</h4></div>,
  },
];

const CustomTabs: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default CustomTabs;
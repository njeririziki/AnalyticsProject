import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';





interface CustomTabsProps {
  items: TabsProps['items'];
}

const CustomTabs: React.FC<CustomTabsProps> = ({ items }) => <Tabs defaultActiveKey="1" items={items} />;

export default CustomTabs;
import React from 'react';
import { Avatar, Descriptions, List } from 'antd';

const data = [
  {
        title: 'Joshua Ogunleye',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut erat nec nisi facilisis efficitur.',
  },
  {
      title: 'Sharon Njeri',
      description:'Onsetetur adipiscing elit. Quisque ut erat nec nisi facilisis efficitur.',
  },
  {
      title: 'Perseka Mokua',
      description :'Windan et dolor sit amet, consectetur adipiscing elit. ',
  },
  {
      title: 'Damien Gichuki',
      description:'Toewnsetetur adipiscing elit. Quisque ut erat nec nisi facilisis efficitur.',
  },
];

const UserList: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
        //   avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default UserList;
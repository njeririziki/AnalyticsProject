import { Avatar, Button, List } from "antd";
const data = [
    {
      title: 'Top Customers',
    },
    {
      title: 'Revenue changes',
    },
    {
      title: 'Products',
    }
  ];
const InsightSection = () => {
    return (
        <div className="w-1/3 min-h-screen space-y-8 bg-white p-8">
            <button className="bg-teal-100  text-blue-700 py-2 px-4 rounded">
                Upload Data
            </button>
            
            <div className="w-full p-4 border text-black border-gray-300 rounded-md">
                <div className="w-full flex flex-row justify-between ">
                    <h3 className=" font-semibold text-orange-500">Renew Subscription</h3>
                    <p className="text-primary">renew now</p>
                </div>
            
            <p className="text-sm mt-4 text-gray-500">Add the boolean type parameter close. Dropdown to the 
            function clearFilters. 
             </p>
            </div>
            <div className="text-black">
            <div className="w-full flex flex-row justify-between ">  
                <h2 className="font-semibold">Insights</h2>
                <p className="text-sm text-orange-600">clear insights</p>
                </div>
                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background "
                    />
                </List.Item>
                )}
                />
            </div>

            <div className="w-full mt-8  p-6  text-black bg-gray-100 rounded-md space-y-4">
            <h2 className="text-lg font-semibold">Do more with Lisa</h2>
            <p className="text-sm mt-4 text-gray-600">Add the boolean type parameter close. Dropdown to the 
            function clearFilters.
             </p>
             <button className="bg-primary py-2 px-4 text-white rounded">Upload Data</button>
            </div>

        </div>
      );
}
 
export default InsightSection;
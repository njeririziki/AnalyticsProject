import { Table } from "antd";

type PreviewProps={
    headers:string[];
    data:any
}

const DataPreview = ({headers,data}:PreviewProps) => {
    const cols= headers.map(item=>{
       return {
            title: item,
            dataIndex: item,
            key: item,
          }
    })
    return ( 
        <div className="space-y-4">
            <p>Select a column</p>
        <Table dataSource={data} columns={cols}/>
        </div>
     );
}
 
export default DataPreview;
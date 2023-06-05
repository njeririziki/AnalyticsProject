import { Checkbox, MenuProps } from "antd";


type TableProps={
 data:object[],
 columns:string[],
 headers:string[]
}

const CustomTable = ({data,columns,headers}:TableProps) => {
//  headers.map(item=> {
//     label: item,
//     key: item,
//   }) 
   
    return ( 
    <table className="border-collapse rounded-sm ">
    <thead>
      <tr>
        { columns.map(col=>{
          return(
 
            <th className="py-2 px-4  border border-x-slate-300 ">
                           <Checkbox >{col}</Checkbox>

                           </th>

        )
     })}
 
      </tr>
    </thead>
    <tbody>
      {data.map((obj)=>{
    
     return (
     <tr>
      {Object.values(obj).map(data=> <td className="py-2 px-4 w-auto  border border-gray-400">{data}</td>
     )
      }
       </tr>)
      })}
     
      </tbody>
    </table>
 );
}
 
export default CustomTable;
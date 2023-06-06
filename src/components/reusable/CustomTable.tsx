import { Checkbox, MenuProps, Select } from "antd";
import { useEffect, useState } from "react";


type TableProps={
 data:object[],
 columns:string[],
 headers:string[]
}

const CustomTable = ({data,columns,headers}:TableProps) => {
  const [matchedCols, setMatchedCols] = useState<{[key: string]: string }>()
 const headersList= headers.map(item=> {
  return{
    value: item,
    label: item,
  }  
 
  }) 

   const matchColumns= (value: string,col:string) => {
   const matchedObject:{ [key: string]: string } = {};
     matchedObject[col]=value;
    
    setMatchedCols({
    ...matchedCols,
    ...matchedObject
    })
  };
    return ( 
    <table className="border-collapse rounded-sm w-fit">
    <thead>
      <tr>
        { columns.map((col,i)=>{
          return(
 
            <th className="py-2 px-4  border border-x-slate-300 "
                 key={i}>
                          
                           <Select
                            defaultValue={col}
                            style={{ width: 120 }}
                            onChange={(e)=>matchColumns(e,col)}
                            options={headersList}
                          />
                        
                           </th>

        )
     })}
 
      </tr>
    </thead>
    <tbody>
      {data.map((obj,i)=>{
   // for(let i=0,i<10,i++){}
      return (
        <tr key={i}>
         {Object.values(obj).map((data,i)=> 
         <td key={i} className="py-2 px-4 w-auto  border border-gray-400">{data}</td>
        )
        }
       </tr>)
      })}
     
      </tbody>
    </table>
 );
}


 
export default CustomTable;
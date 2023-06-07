import { Checkbox, MenuProps, Select } from "antd";
import { useEffect, useState } from "react";


type TableProps={
 data:object[],
 columns:string[],
 headers:string[]
}

const CustomTable = ({data,columns,headers}:TableProps) => {
  const [matchedCols, setMatchedCols] = useState<{[key: string]: string }>({})
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
  const readyData=()=>{
  const cleanedData= renameKeysInArray(data,matchedCols)
  console.log({cleanedData});
  const {cleaned,removed}=checkForBlanks(cleanedData)
  console.log({cleaned});
  }
  //
    return ( 
      <>
        <button onClick={readyData} className="bg-primary">ready</button>
    <table className="rounded-sm w-fit">
    <thead className="bg-background  border-b-slate-300  ">
      <tr>
        { columns.map((col,i)=>{
          return(
 
            <th className="py-2 px-4  border border-r-slate-300 "
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
     for(i;i<6;i++){
      return (
        <tr key={i} className="border border-b-slate-300 ">
         {Object.values(obj).map((data,i)=> 
         <td key={i} className="py-2 px-4 w-auto ">{data}</td>
        )
        }
       </tr>)
       }
      })}
     
      </tbody>
    
    </table>
    </>
 );
}


 
export default CustomTable;

//replacing the headers and filering the data
function renameKeysInArray(actualData:object[], selected:{ [key: string]: string }):object[] {
  return actualData.map((object:any) => {
    const renamedObject:{ [key: string]: string } = {};

    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        const newKey:string = selected[key] ;
        if(newKey){
          renamedObject[newKey] = object[key];
        }
      }
    }
    return renamedObject;
  });
}

// this function will ensure that the selected columns have no blanks
const checkForBlanks=(data:object[])=>{
  const cleaned:any= []
  const removed:any=[]
  // data.map((item:any,i)=>{
    for(let i=0;i=data.length;i++){
    if (data[i]){
      console.log(data[i])
     cleaned.push(data[i])
    }
    // else{
    //  cleaned.push(data[i])
    // }
    }
  //  })
   console.log(`cleaned`, cleaned);
   return {cleaned,removed}
}
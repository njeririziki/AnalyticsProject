import { Checkbox, MenuProps, Select, Space } from "antd";
import { log } from "console";
import { useEffect, useState } from "react";


type TableProps={
 data:object[],
 columns:string[],
 headers:string[],
 rename:any
}

const CustomTable = ({data,columns,headers,rename}:TableProps) => {
  const [matchedCols, setMatchedCols] = useState<{[key: string]: string }>({})
 const headersList= headers.map(item=> {
  return{
    value: item,
    label: item,
  }  
 
  }) 

  // useEffect(() => {

  // }, [matchedCols])
  
   const matchingColumns= (value: string,col:string) => {
   const matchedObject:{ [key: string]: string } = {};
     matchedObject[col]=value;
    
    setMatchedCols({
    ...matchedCols,
    ...matchedObject
    })
  };
  const readyData=()=>{
    const required=  checkRequiredColumn(matchedCols,'phone_number')
    if(required){
      const cleanedData= renameKeysInArray(data,matchedCols)
      console.log(cleanedData);
      checkForBlanksInRequiredCols(cleanedData,'phone_number')
      rename(cleanedData)
    }
    console.log(matchedCols);
  }
  
    return ( 
      <div className="space-y-4 my-4">
            
      <Space>
      <button onClick={readyData} className="bg-primary text-white p-2 ">ready to upload</button>
    
      <p>Please select the columns that match the data</p>
      
      </Space>
  <table className="rounded-sm w-fit">
    <thead className="  border-b-slate-300  ">
      <tr>
        { columns.map((col,i)=>{
          return(
          <th className="py-2 px-4" key={i}>          
               <Select
                 defaultValue={col}
                // style={{ width: 120 }}
                 onChange={(e)=>matchingColumns(e,col)}
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
    </div>
 );
}


 
export default CustomTable;

//check if the required columns are matched
const checkRequiredColumn=(selectedColumns:{},requiredColumn:string):boolean=>{

 return Object.values(selectedColumns).includes(requiredColumn)
 
//   for (let i = 0; i <values.length; i++) {
//     if (values[i] === requiredColumn) {
//       console.log(values[i]);
//       return true
//     }
   
//   }
//  return false
}

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

const checkForBlanksInRequiredCols=(data:object[],requiredCol:string)=>{
  const cleaned:object[]= []
  const removed:any=[]
  const blanks= new Map();
  // data.map((item:any,i)=>{
    for(let i=0;i<data.length;i++){
      data.map((obj)=>{
        if (obj){
          console.log(data[i])
         cleaned.push(data[i])
        }
        else{
         removed.push(data[i])
        // blanks.set(i+1,data[i])
        }
      })
   
    }
  //  })
  // console.log(`cleaned`, cleaned);
   return {cleaned,removed}
}






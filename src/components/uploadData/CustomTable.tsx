import { Alert, Button, Checkbox, Space, message } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
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
   
  const [showNextCol, setShowNextCol] = useState<number>(0)
  const [readyToUpload, setReadyToUpload] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

 const headersList= headers.map(item=> {
  return{
    value: item,
    label: item,
  }  
 
  }) 

  useEffect(() => {
    console.log(showNextCol)
   },[matchedCols])
   
   const skipUnrequireCol=()=>{
    const valToSkip=headers[showNextCol]
    const required='phone_number'
    if(valToSkip!==required){
      setShowNextCol((showNextCol)=>showNextCol+1)
    }else{
      // give error
      setShowAlert(true)
    }
   }
   const matchingColumns= (col:string) => {
    const last = headersList.length-1
   // console.log()
   console.log(col,headers[showNextCol]);
   const matchedObject:{ [key: string]: string } = {};
   matchedObject[col]=headers[showNextCol];
    
   console.log(matchedObject)
    setMatchedCols({
    ...matchedCols,
    ...matchedObject
    })
    if(showNextCol<last ){
      return setShowNextCol((showNextCol)=>showNextCol+1)
     }else if(showNextCol===last){
      return setReadyToUpload(true)
      }else{
      return +setShowNextCol(0)
    }
  };
  const readyData=()=>{
     const required=checkRequiredColumn(matchedCols,'phone_number');

     const cleanedData= renameKeysInArray(data,matchedCols)
      
     if(required){ 
      const {cleaned,removed} = checkForBlanksInRequiredCols(cleanedData,'phone_number')
      return rename(cleaned)
     }else{
        setShowAlert(true)
       }

  }
  
    return ( 
      <div className="space-y-4 my-4">
            {readyToUpload?
             <Space className=" w-full flex justify-between " >
             <p className="font-medium ">You're all setup</p>
             
              <Button
               className="self-end bg-primary text-white"
                   key="link"
                   type="primary"
                  onClick={readyData} 
                 >
                 Finish Upload
                 </Button>
           
             </Space>
             :
             <Space className=" w-full flex justify-between space-x-8 " >
              <p className="font-medium ">Please select the  "{headers[showNextCol]}" column</p>
              <p className="text-primary text-xs self-end" onClick={skipUnrequireCol}>I do not have "{headers[showNextCol]} " column</p>
              </Space>
              }
      
     

     {showAlert ?
     <Alert message={`the ${headers[showNextCol]} column is a required`} type="warning" />
    :
    <></>} 
    <table className="rounded-sm w-fit overflow-scroll">
    <thead className="  border-b-slate-300  ">
      
      <tr>
        { columns.map((col,i)=>{
          return(
          <th className="py-2 px-4" key={i}>          
               <Checkbox
                // defaultValue={[col]}
                // style={{ width: 120 }}
                 onChange={()=>matchingColumns(col)}
              // options={headersList}
                >
                
                </Checkbox>
            </th>
        )
     })}
 
      </tr>
      <tr className="border border-slate-300 rounded-md ">
        {columns.map((item,i)=>{
          return(
            <th className="py-2 px-4" key={i}>
               {item}
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

 return Object.values(selectedColumns).includes(requiredColumn);
 

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
 // const :any=[]
  const removed= new Map();
 
  //  for(let i=0;i<data.length;i++){ }
      data.map((obj:any,i)=>{
        if (obj[requiredCol]){
           return cleaned.push(obj)
        }
        else{
        // removed.push(data[i])
        return removed.set(i+1,requiredCol)
        }
      })

  // console.log(`cleaned`, cleaned);
   return {cleaned,removed}
}






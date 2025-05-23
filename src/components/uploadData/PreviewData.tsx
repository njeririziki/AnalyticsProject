import { Checkbox, Space, Table } from "antd";
import { useState } from "react";
import CustomTable from "./CustomTable";

const { Column, ColumnGroup } = Table;
type PreviewProps={
    templateHeaders:string[]
    headers:string[]
    data:any
}

const DataPreview = ({templateHeaders,headers,data}:PreviewProps) => {
   const [selectedColumns, setSelectedColumns] = useState<{ [key: string]: string }>({}) 
  
    const cols= headers.map(item=>{
       return {
            title: item,
            dataIndex: item,
            key: item,
          }
    })
    const handleSelected = ( matchedCols:{ [key: string]: string } ) => {
      console.log(`matchedCols`, matchedCols);
      // const renamedKeys=renameKeysInArray(data,matchedCols)
      // console.log({renamedKeys})
    };
    return ( 
        <div className="space-y-4 my-4">
            
       <Space>
       <p>Please select the columns that match the data</p>

       </Space>
       <CustomTable data={data} columns={headers} headers={templateHeaders}
        rename={handleSelected}  />
        </div>
     );
}
 
export default DataPreview;

// function matchHeaders(array1: string[], array2: string[]):{} {
//   // Check if arrays have the same length
//   if (array1.length !== array2.length) {
//     return false;
//   }

//   // Iterate over each element in the arrays
//   for (let i = 0; i < array1.length; i++) {
//     // Compare the strings at the corresponding indexes
//     if (array1[i] !== array2[i]) {
//       console.log(array1[i],array2[i])
//       return false; // Strings are not equal
//     }
//     console.log(array1[i],array2[i])
//   }

//   return true; // All strings are equal
//   } 

    // this function will ensure that the selected columns have no blanks
  //   const checkForBlanks=(ArrayedRows:any)=>{
  //     const blanks= new Map();
  //            const blankRows:number[]=[];
  //            const blankCells:number[]=[]
             
  //           for(let i=0;i<ArrayedRows.length;i++){
  //             const singlerow:any=ArrayedRows[i];
  //             if(singlerow.includes(undefined)){
  //               blankRows.push(i+2);
  //               for(let j=0;j<singlerow.length;j++){
  //                 if (singlerow[j] === undefined || singlerow[j] === null || singlerow[j] === '') {
  //                   blankCells.push(j);
  //                   //create an object of row:cells
  //                   blanks.set(i+2,[j+1])
  //                   console.log(`there are blank spaces in row ${i+2} cell ${j+1}`)
                    
  //                 }
  //               }
  //           }
  //   }
  //   return{blanks,blankRows,blankCells}
  // }
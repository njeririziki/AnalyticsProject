import { Checkbox, Space, Table } from "antd";

const { Column, ColumnGroup } = Table;
type PreviewProps={
    templateHeaders:string[]
    headers:string[];
    data:any
}

const DataPreview = ({templateHeaders,headers,data}:PreviewProps) => {
   
    const cols= headers.map(item=>{
       return {
            title: item,
            dataIndex: item,
            key: item,
          }
    })
    return ( 
        <div className="space-y-4">
            <p>Please select the columns that match column</p>
       <Space>
       
       </Space>
        <Table
        // title={}
        dataSource={data} 
       columns={cols}
       >
 {/* { headers.map((item):any=> <div>
          <Checkbox ></Checkbox>
          <Column title={item} dataIndex={item} key={item} />
        </div>
        )
        } */}
          
        </Table>
        </div>
     );
}
 
export default DataPreview;

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
// this function checks the headers and extract selected data versus the original

function matchHeaders(array1: string[], array2: string[]):{} {
    // Check if arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }
  
    // Iterate over each element in the arrays
    for (let i = 0; i < array1.length; i++) {
      // Compare the strings at the corresponding indexes
      if (array1[i] !== array2[i]) {
        console.log(array1[i],array2[i])
        return false; // Strings are not equal
      }
      console.log(array1[i],array2[i])
    }
  
    return true; // All strings are equal
    } 
  
    // this function will ensure that the selected columns have no blanks
    const checkForBlanks=(ArrayedRows:any)=>{
      const blanks= new Map();
             const blankRows:number[]=[];
             const blankCells:number[]=[]
             
            for(let i=0;i<ArrayedRows.length;i++){
              const singlerow:any=ArrayedRows[i];
              if(singlerow.includes(undefined)){
                blankRows.push(i+2);
                for(let j=0;j<singlerow.length;j++){
                  if (singlerow[j] === undefined || singlerow[j] === null || singlerow[j] === '') {
                    blankCells.push(j);
                    //create an object of row:cells
                    blanks.set(i+2,[j+1])
                    console.log(`there are blank spaces in row ${i+2} cell ${j+1}`)
                    
                  }
                }
            }
    }
    return{blanks,blankRows,blankCells}
  }
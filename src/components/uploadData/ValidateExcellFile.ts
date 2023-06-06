import { headers } from 'next/dist/client/components/headers';
import { read, utils, WorkBook, WorkSheet } from 'xlsx';

type ResponseTypes={
  headers:string[];
  data:any
}
export const validateExcelData = (file:File,template:string[]) => {
  console.log('inside the validate')
     return new Promise((resolve,reject)=>{
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook: WorkBook = read(e.target?.result, { type: 'binary' });
          const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
          // Extract headers
          const headers:any = jsonData.shift(); 
          
       
          // if(compareHeaders(template,headers)){
          // extract data from rows into hashmap
           const formattedData = jsonData.filter((row: any) => row.every((cell: any) => cell !== ''));
         
          //check for blank spaces 
          
          // const {blanks,blankRows,blankCells} = checkForBlanks(formattedData);
          //  if(blankRows.length ===0) {
            const extractedData:object[]= formattedData.map((row: any) => {
              const rowData: any = {};
              headers.forEach((header: any, index: number) => {
                rowData[header] = row[index];
              });
              return rowData;
            });  
            // reject('There is no data')
            const response:ResponseTypes={
              headers:headers,
              data:extractedData
            } 
            
            return resolve(response)
          //  } else{
          //  blanks.forEach((value,key)=>{
          //   const valueAsString = value.join(', ');
          //   blankedRows.push(`row ${key} cells ${valueAsString}`)
          //  })
          //  console.log(blanks.keys())
          //  return reject(`There is a blank space at ${blankedRows.join(', ')}`)
          // }
          // } else{
          //   console.log(compareHeaders(template,headers))
          //   console.log(template) 
          //   console.log(headers) 
           
          //} 
        };
        reader.readAsBinaryString(file);
    
      }
   
     })

  };
  



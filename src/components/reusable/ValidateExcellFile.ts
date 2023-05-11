import { read, utils, WorkBook, WorkSheet } from 'xlsx';


export const validateExcelData = (file:File,template:string[]) => {
     return new Promise((resolve,reject)=>{
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook: WorkBook = read(e.target?.result, { type: 'binary' });
          const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
          // Extract headers
          const headers:any = jsonData.shift(); 
          const compare = JSON.stringify(jsonData[0]) === JSON.stringify(template);
          // extract data from rows into hashmap
          const formattedData = jsonData.filter((row: any) => row.every((cell: any) => cell !== ''));
          //chec for blank spaces 
          const blanked= checkForBlanks(formattedData)
          const extractedData = formattedData.map((row: any) => {
            const rowData: any = {};
            headers.forEach((header: any, index: number) => {
              rowData[header] = row[index];
            });
            return rowData;
          });
          reject(compare)
          resolve(extractedData)
          console.log(template)
          console.log(headers)
          console.log(formattedData);
          console.log(compare) 
          console.log(blanked) 
        };
        reader.readAsBinaryString(file);
    
      }
   
     })

  };
  
  

  const checkForBlanks=(ArrayedRows:any)=>{
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
                  console.log('there are blank Rows in row',i+2,j+1)
                }
              }
          }
  }
  return{blankRows,blankCells}
}


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
          // const compare = JSON.stringify(jsonData[0]) === JSON.stringify(template);
          const blankedRows:string[]=[]
          if(!compareHeaders(template,headers)){
          // extract data from rows into hashmap
           const formattedData = jsonData.filter((row: any) => row.every((cell: any) => cell !== ''));
         
          //check for blank spaces 
          
           const {blanks,blankRows,blankCells} = checkForBlanks(formattedData);
           if(blankRows.length ===0) {
            const extractedData = formattedData.map((row: any) => {
              const rowData: any = {};
              headers.forEach((header: any, index: number) => {
                rowData[header] = row[index];
              });
              return rowData;
            });
            
            return resolve(extractedData)
           }
           blanks.forEach((value,key)=>{
            const valueAsString = value.join(', ');
            blankedRows.push(`row ${key} cells ${valueAsString}`)
           })
           console.log(blanks.keys())
           reject(blankedRows.join(', '))
         
          }
         reject('headers do not match')
        console.log(compareHeaders(template,headers))
         
          console.log(template) 
          console.log(headers) 
        };
        reader.readAsBinaryString(file);
    
      }
   
     })

  };
  
  function compareHeaders(array1: string[], array2: string[]): boolean {
    // Check if arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }
  
    // Iterate over each element in the arrays
    for (let i = 0; i < array1.length; i++) {
      // Compare the strings at the corresponding indexes
      if (array1[i] !== array2[i]) {
        return false; // Strings are not equal
      }
    }
  
    return true; // All strings are equal
  } 

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


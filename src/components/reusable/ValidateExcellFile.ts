import { read, utils, WorkBook, WorkSheet } from 'xlsx';
import { useCallback, useState } from 'react';

const templateHeader=['Timestamp','First Name',	'Last Name',	'EmailAdress','	Admission Number','	Gender','	Phone',' Number','	Group Number ','	Project link'
]

export const validateExcelData = (file:File) => {
     return new Promise((resolve,reject)=>{
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const workbook: WorkBook = read(e.target?.result, { type: 'binary' });
          const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
          const compare = JSON.stringify(jsonData[0]) === JSON.stringify(templateHeader);
          const headers:any = jsonData.shift(); // Extract headers
          const formattedData = jsonData.filter((row: any) => row.every((cell: any) => cell !== ''));
        
          const extractedData = formattedData.map((row: any) => {
            const rowData: any = {};
            headers.forEach((header: any, index: number) => {
              rowData[header] = row[index];
            });
            return rowData;
          });
          resolve(extractedData);
        };
        reader.readAsBinaryString(file);
    
      }
      reject('no file')
     })

  };


  // const workbook: WorkBook = read(e.target?.result, { type: 'binary' });
  // const worksheet: WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
  // const jsonData = utils.sheet_to_json(worksheet, { header: 1 });

 

import { utils, WorkBook, WorkSheet } from 'xlsx';


    export const createExcelTemplate=(headers:string[],data:any)=>{
    const workbook: WorkBook = { SheetNames: ['Sheet1'], Sheets: {} };
    const worksheet: WorkSheet = utils.aoa_to_sheet([headers, ...data]);

    workbook.Sheets['Sheet1'] = worksheet;

    // Convert the workbook to a binary string
    const excelData: string = utils.sheet_to_csv(worksheet);

    // Create a Blob from the data
    const blob = new Blob([excelData], { type: 'text/csv;charset=utf-8;' });

    // Generate a download link
    const downloadLink = document.createElement('a');
    const url = URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = 'data.xlsx';
// Trigger the download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    }
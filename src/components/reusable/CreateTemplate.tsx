import { utils, WorkBook, WorkSheet ,write} from 'xlsx';
import { Button } from "antd";
import { DownloadOutlined } from '@ant-design/icons';


export const DownloadTemplate = ({bookName,headers,data}:{bookName:string,headers:string[],data:any}) => {
    
    const createExcelTemplate=()=>{
       
        const workbook: WorkBook = { SheetNames: ['Sheet1'], Sheets: {} };
        const worksheet: WorkSheet = utils.aoa_to_sheet([headers, ...data]);
    
        workbook.Sheets['Sheet1'] = worksheet;
       //utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // Convert the workbook to a binary string
        // const excelData: string = utils.sheet_to_csv(worksheet);
        const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' });
        // Create a Blob from the data
        //const blob = new Blob([excelData], { type: 'text/csv;charset=utf-8;' });
        const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
        // Generate a download link
        const downloadLink = document.createElement('a');
        const url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = `${bookName}.xlsx`;
    // Trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        }

    return (  
        <div className='flex w-full justify-between pb-4'>
           <p>Download {bookName} template  </p>
            <Button icon={ <DownloadOutlined style={{ fontSize: '20px'}}/>}
           onClick={createExcelTemplate}>
            Export    
            </Button>
        </div>
    );
}
 


import { ArrowDownOnSquareIcon } from "@heroicons/react/24/solid";
import { Button } from "antd";

const DownloadTemplate = () => {
    return (  
        <div>
            <Button icon={<ArrowDownOnSquareIcon/>}>
                Download Template
            </Button>
        </div>
    );
}
 
export default DownloadTemplate;
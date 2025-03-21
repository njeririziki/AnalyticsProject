
interface CustomButtonProps {
    handleClick:()=>{},
    btnname:string
}
const CustomButton:React.FC<CustomButtonProps> = ({handleClick,btnname}) => {
    return ( 
        <button className="bg-teal-100  text-blue-700 py-2 px-4 rounded"
        onClick={handleClick}
        >
            {btnname}
        </button>
     );
}
 
export default CustomButton;
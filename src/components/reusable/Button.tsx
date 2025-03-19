import { useState } from "react";

const Button = () => {
    const [value, setValue] = useState('Button');
    return ( 
        <button className="text-black"  //onClick={}
        >
          {value}
        </button> );
}
 
export default Button;
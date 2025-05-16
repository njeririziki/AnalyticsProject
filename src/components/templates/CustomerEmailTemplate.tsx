import React from "react";

const CustomerEmailtemplate = () => {
    return ( 
        <div className="w-full h-full">
        <p className=" w-full text-sm text-gray-600 pt-4">
        Dear [Customer's Name],
        <br />
        <br />
        I am excited to share with you a list of items that I have
        curated especially for you. Based on your previous purchases
        and preferences, I have selected a unique set of products that
        I believe you will love. Here is the list of items that I have
        handpicked for you:
        <br />
        <br />
        <div className="  bg-gray-200 p-2 rounded-md">
          [ Item 1 ]<br />
          [ Item 2 ]<br />
          [ Item 3 ]<br />
          [ Item 4 ]<br />
          [ Item 5 ]<br />
        </div>
        <br />
        <br />
        Thank you for choosing our store, and we look forward to
        serving you soon.
        <br /> <br />
        Best regards, <br /> <br />
        Lisa
      </p>
       </div>

     );
}
 
export default CustomerEmailtemplate;
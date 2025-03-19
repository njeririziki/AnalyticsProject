const requiredColumns={
 contacts:['phone_number'],
 catalogues:[],
 sales:[]
}
const contactTemplateHeaders = [
   
    'name',
    'email',
    'phone_number',
    
  ]

 const testContactData = [
    [
      'John Doe',
      'johndoe@example.com',
      '1234567890',
    
    ],
    [
      'Jane Doe',
      'janedoe@example.com',
      '1234567890',
    
    ],
    // Add more data rows as needed
  ];

  export{ requiredColumns,contactTemplateHeaders, testContactData}
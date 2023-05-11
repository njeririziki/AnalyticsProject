
const contactTemplateHeaders = [
    'Timestamp',
    'First Name',
    'Last Name',
    'Email Address',
    'Admission Number',
    'Gender',
    'Phone Number',
    'Group Number',
    'Project Link',
  ]

 const testContactData = [
    [
      new Date().toISOString(),
      'John',
      'Doe',
      'johndoe@example.com',
      '123456789',
      'Male',
      '1234567890',
      '1',
      'https://example.com/project',
    ],
    // Add more data rows as needed
  ];

  export{ contactTemplateHeaders, testContactData}
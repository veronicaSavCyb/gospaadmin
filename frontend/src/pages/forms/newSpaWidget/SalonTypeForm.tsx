import React from 'react';
import { Form } from 'rsuite'; 
import FormHeader from './FormHeader';


const SalonTypeForm = () => {
  
  return (
    <Form>
      <FormHeader
        title="Create a New Spa Salon"
        description="This widget will navigate you across adding details about your Salon, adding information about Employees and 
        Services available."
      />
    </Form>
  );
};

export default SalonTypeForm;

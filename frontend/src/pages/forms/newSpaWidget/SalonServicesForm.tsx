import React from 'react';
import { Form } from 'rsuite';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';

const SalonServicesForm = () => {
  return (
    <Form fluid>
      <FormHeader
        title="Info about Salon services"
        description="Specify information on services available at the Salon"
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Service Name</Form.ControlLabel>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="descriptor">
        <Form.ControlLabel>Services Shortened Descriptor</Form.ControlLabel>
        <Form.Control name="descriptor" />
        <Form.HelpText>
          Customers will see this shortened version of your statement descriptor.
        </Form.HelpText>
      </Form.Group>

    
      <Form.Group controlId="description">
        <Form.ControlLabel>Detailed Service Description</Form.ControlLabel>
        <Form.Control name="description" accepter={Textarea} />
        <Form.HelpText>
          Customers will see this detailed service description once they click "Show more" button.
        </Form.HelpText>
      </Form.Group>

     
    </Form>
  );
};

export default SalonServicesForm;

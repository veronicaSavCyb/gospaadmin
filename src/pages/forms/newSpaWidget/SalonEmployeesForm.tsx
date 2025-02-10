import React from 'react';
import { Form, SelectPicker, Uploader } from 'rsuite';
import FormHeader from './FormHeader';

const SalonEmployeesForm = () => {
  return (
    <Form fluid>
      <FormHeader
        title="Employees Settings"
        description="Assemble related projects together and grant members access to several projects at once."
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Specify Team Size</Form.ControlLabel>
        <Form.Control
          name="name"
          accepter={SelectPicker}
          searchable={false}
          data={[
            { value: 1, label: '> 5 people' },
            { value: 2, label: '5-20 people' },
            { value: 3, label: '20-50 people' },
            { value: 4, label: '50+ people' }
          ]}
          block
        />
        <Form.HelpText>
          Different team sizes will be assigned different management modes. Of course, the fees are different.
        </Form.HelpText>
      </Form.Group> 

      <Form.Group controlId="name">
        <Form.ControlLabel>Employee Name</Form.ControlLabel>
        <Form.Control name="name" />
      </Form.Group>

      <Form.Group controlId="uploader">
          <Form.ControlLabel>Employee Avatar</Form.ControlLabel>
          <Form.Control name="uploader" accepter={Uploader} action="#" />
        </Form.Group>

      <Form.Group controlId="email">
        <Form.ControlLabel> Contact Email</Form.ControlLabel>
        <Form.Control name="email" />
      </Form.Group>
    </Form>
  );
};

export default SalonEmployeesForm;

import React from 'react';
import { Drawer, Button, Form, Stack, Rate } from 'rsuite';

const DrawerView = ({ open, onClose }) => {
  return (
    <Drawer backdrop="static" size="sm" placement="right" open={open} onClose={onClose}>
      <Drawer.Header>
        <Drawer.Title>Add a new employee</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control name="firstName" />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control name="lastName" />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Contact Number</Form.ControlLabel>
            <Form.Control name="contactNumber" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Assigned Services</Form.ControlLabel>
            <Form.Control name="assignedServices" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Rating</Form.ControlLabel>
            <Form.Control name="rating" accepter={Rate} />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;

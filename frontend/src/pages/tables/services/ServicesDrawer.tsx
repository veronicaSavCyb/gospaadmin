import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Drawer, Button, Form } from 'rsuite';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Service {
  id?: number;
  name: string;
  short_descriptor: string;
  detailed_description: string;
  category: string;
}

interface ServicesDrawerProps {
  open: boolean;
  onClose: () => void;
  serviceToEdit?: Service | null;
  onServiceSaved: (newService: Service) => void; // ✅ Add this callback prop
}

const ServicesDrawer: React.FC<ServicesDrawerProps> = ({ open, onClose, serviceToEdit, onServiceSaved }) => {
  const [formValue, setFormValue] = useState<Service>({
    name: '',
    short_descriptor: '',
    detailed_description: '',
    category: ''
  });

  useEffect(() => {
    if (serviceToEdit) {
      setFormValue(serviceToEdit);
    } else {
      setFormValue({ name: '', short_descriptor: '', detailed_description: '', category: '' });
    }
  }, [serviceToEdit]);

  // ✅ Correctly handle form changes
  const handleFormChange = (value: Record<string, any>) => {
    setFormValue(prev => ({ ...prev, ...value }));
  };

  // ✅ Save the service (CREATE or UPDATE)
  const handleSubmit = async () => {
    try {
      let savedService: Service;
      if (serviceToEdit?.id) {
        const response = await axios.put(`${API_BASE_URL}/api/services/${serviceToEdit.id}/`, formValue);
        savedService = response.data;
      } else {
        const response = await axios.post(`${API_BASE_URL}/api/services/`, formValue);
        savedService = response.data;
      }

      onServiceSaved(savedService); // ✅ Update service table dynamically
      onClose(); // ✅ Close drawer after saving
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  return (
    <Drawer backdrop="static" size="sm" placement="right" open={open} onClose={onClose}>
      <Drawer.Header>
        <Drawer.Title>{serviceToEdit ? 'Edit Service' : 'Add a new Service'}</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={handleSubmit} appearance="primary">
            {serviceToEdit ? 'Update' : 'Confirm'}
          </Button>
          <Button onClick={onClose} appearance="subtle">Cancel</Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid onChange={handleFormChange} formValue={formValue}>
          <Form.Group>
            <Form.ControlLabel>Service Name</Form.ControlLabel>
            <Form.Control name="name" required />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Short Descriptor</Form.ControlLabel>
            <Form.Control name="short_descriptor" required />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Detailed Description</Form.ControlLabel>
            <Form.Control name="detailed_description" required />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Category</Form.ControlLabel>
            <Form.Control name="category" required />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default ServicesDrawer;

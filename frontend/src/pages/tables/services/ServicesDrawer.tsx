import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Drawer, Button, Form } from 'rsuite';

interface Service {
  id?: number;
  name: string;
  shortDescriptor: string;
  detailedDescription: string;
  category: string;
}

interface ServicesDrawerProps {
  open: boolean;
  onClose: () => void;
  serviceToEdit?: Service | null;
}

const ServicesDrawer: React.FC<ServicesDrawerProps> = ({ open, onClose, serviceToEdit }) => {
  const [formValue, setFormValue] = useState<Service>({
    name: '',
    shortDescriptor: '',
    detailedDescription: '',
    category: ''
  });

  useEffect(() => {
    if (serviceToEdit) {
      setFormValue(serviceToEdit);
    } else {
      setFormValue({ name: '', shortDescriptor: '', detailedDescription: '', category: '' });
    }
  }, [serviceToEdit]);

  // ✅ Correct the onChange function by explicitly handling form updates
  const handleFormChange = (value: Record<string, any>) => {
    setFormValue(prev => ({ ...prev, ...value })); // ✅ Merge new values with existing state
  };

  const handleSubmit = async () => {
    try {
      if (serviceToEdit?.id) {
        // ✅ Update existing service
        await axios.put(`/api/services/${serviceToEdit.id}/`, formValue);
      } else {
        // ✅ Create a new service
        await axios.post('/api/services/', formValue);
      }
      onClose();
      window.location.reload();
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
            <Form.Control name="shortDescriptor" required />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Detailed Description</Form.ControlLabel>
            <Form.Control name="detailedDescription" as="textarea" rows={3} required />
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

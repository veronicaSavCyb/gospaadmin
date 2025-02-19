import React, { useState, useEffect } from 'react';
import { Drawer, Button, Form, Stack, SelectPicker, Rate, IconButton } from 'rsuite';
import CloseIcon from '@rsuite/icons/Close';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

const DrawerView = ({ open, onClose, employeeId = null }: { open: boolean; onClose: () => void; employeeId?: number | null }) => {
  const [services, setServices] = useState<{ label: string; value: string }[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [employeeData, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
    rating: 0,
  });

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/services/`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.map((service: { id: number; name: string }) => ({
          label: service.name, // Display Name
          value: service.id.toString(), // Store ID instead of name
        })));
      })
      .catch((err) => console.error("Error fetching services:", err));
  }, []);
  

  useEffect(() => {
    if (employeeId) {
      fetch(`${API_BASE_URL}/api/employees/${employeeId}/`)
        .then((res) => res.json())
        .then((data) => {
          setEmployeeData({
            first_name: data.first_name || "",
            last_name: data.last_name || "",
            email: data.email || "",
            contact_number: data.contact_number || "",
            rating: data.rating || 0,
          });
  
          // Ensure assigned services are stored as IDs
          setSelectedServices(data.assigned_services?.map((service: any) => service.id.toString()) || []);
        })
        .catch((err) => console.error("Error fetching employee:", err));
    }
  }, [employeeId]);
  


  const handleSelectService = (value: string) => {
    setSelectedServices([...selectedServices, value]);
  };

  const handleRemoveService = (value: string) => {
    setSelectedServices(selectedServices.filter((service) => service !== value));
  };

  const availableServices = services.filter((service) => !selectedServices.includes(service.value));
  const isDropdownDisabled = availableServices.length === 0;

  const handleSave = () => {
    fetch(`${API_BASE_URL}/api/employees/${employeeId || ""}`, {
      method: employeeId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...employeeData, assigned_services: selectedServices.map(id => parseInt(id)) }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Error ${res.status}: ${errorText}`);
        }
        return res.json();
      })
      .then(() => {
        onClose();
        window.dispatchEvent(new Event("employeeUpdated"));
      })
      .catch((err) => console.error("Error saving employee:", err));
  };
  
  
  
  
  

  return (
    <Drawer backdrop="static" size="sm" placement="right" open={open} onClose={onClose}>
      <Drawer.Header>
        <Drawer.Title>{employeeId ? "Edit Employee" : "Add New Employee"}</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={handleSave} appearance="primary">
            {employeeId ? "Update Employee" : "Save Employee"}
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
              <Form.Control
                name="first_name"
                value={employeeData.first_name}
                onChange={(value) => setEmployeeData({ ...employeeData, first_name: value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control
                name="last_name"
                value={employeeData.last_name}
                onChange={(value) => setEmployeeData({ ...employeeData, last_name: value })}
              />
            </Form.Group>
          </Stack>

          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              name="email"
              type="email"
              value={employeeData.email}
              onChange={(value) => setEmployeeData({ ...employeeData, email: value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Contact Number</Form.ControlLabel>
            <Form.Control
              name="contact_number"
              value={employeeData.contact_number}
              onChange={(value) => setEmployeeData({ ...employeeData, contact_number: value })}
            />
          </Form.Group>

          <Form.Group>
  <Form.ControlLabel>Assigned Services</Form.ControlLabel>
  <Stack spacing={10}>
    {selectedServices.map((serviceId) => {
      const service = services.find((s) => s.value === serviceId);
      return (
        service && (
          <Button
            key={serviceId}
            appearance="ghost"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              paddingRight: "25px", // Ensures space for the "X" button
            }}
          >
            <span style={{ marginRight: "10px" }}>{service.label}</span> {/* Service name with spacing */}
            <IconButton
              icon={<CloseIcon />}
              size="xs"
              onClick={() => handleRemoveService(serviceId)}
              style={{
                position: "absolute",
                right: "5px", // Position the "X" properly
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </Button>
        )
      );
    })}
  </Stack>
  <SelectPicker
    data={availableServices}
    onChange={(value) => value && handleSelectService(value)}
    appearance="default"
    placeholder={
      isDropdownDisabled ? "No more services are available for assignment" : "Select Services"
    }
    style={{ width: "100%", marginTop: 10 }}
    cleanable={false}
    searchable
    disabled={isDropdownDisabled}
    labelKey="label"
    valueKey="value"
  />
</Form.Group>



          <Form.Group>
            <Form.ControlLabel>Rating</Form.ControlLabel>
            <Rate
              allowHalf
              value={employeeData.rating}
              onChange={(value) => setEmployeeData({ ...employeeData, rating: value })}
            />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;

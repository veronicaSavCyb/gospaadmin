import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, DatePicker, ModalProps, SelectPicker } from 'rsuite';

interface EventModalProps extends ModalProps {
  onAddEvent: (newBooking: any) => void;
  onDeleteEvent: (eventId: number) => void;
  selectedEvent?: any;
  selectedDate: Date | null;
  selectedTime: Date | null;
}

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:8000";

const EventModal = ({ 
  onClose, open, onAddEvent, onDeleteEvent, selectedEvent, selectedDate, selectedTime, ...rest 
}: EventModalProps) => {
  const [services, setServices] = useState<{ label: string; value: number }[]>([]);
  const [employees, setEmployees] = useState<{ label: string; value: number }[]>([]);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<number | null>(null);
  const [customerName, setCustomerName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bookingDate, setBookingDate] = useState<Date | null>(null);
  const [bookingTime, setBookingTime] = useState<Date | null>(null);
  const [duration, setDuration] = useState<number>(60);

  useEffect(() => {
    if (open) {
      fetch(`${API_BASE_URL}/api/services/`)
        .then((res) => res.json())
        .then((data) => setServices(data.map((service: any) => ({ label: service.name, value: service.id }))));

      fetch(`${API_BASE_URL}/api/employees/`)
        .then((res) => res.json())
        .then((data) => setEmployees(data.map((employee: any) => ({ label: `${employee.first_name} ${employee.last_name}`, value: employee.id }))));
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      if (selectedEvent) {
        // Editing existing booking
        setSelectedService(selectedEvent.service_details?.id || null);
        setSelectedEmployee(selectedEvent.employee || null);
        setCustomerName(selectedEvent.customer_name || "");
        setPhone(selectedEvent.phone || "");
        setBookingDate(new Date(selectedEvent.start));
        setBookingTime(new Date(selectedEvent.start));
        setDuration(selectedEvent.duration || 60);
      } else {
        // Creating new booking (from DND)
        setSelectedService(null);
        setSelectedEmployee(null);
        setCustomerName("");
        setPhone("");
        setBookingDate(selectedDate);
        setBookingTime(selectedTime);
        setDuration(60);
      }
    }
  }, [open, selectedEvent, selectedDate, selectedTime]);

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!selectedService || !selectedEmployee || !customerName || !phone || !bookingDate || !bookingTime) {
      alert("Please fill all fields");
      return;
    }

    const bookingData = {
      id: selectedEvent?.id,
      service: selectedService,
      employee: selectedEmployee,
      customer_name: customerName,
      phone,
      booking_date: bookingDate.toISOString().split('T')[0],
      booking_time: bookingTime.toISOString().split('T')[1].substring(0, 5),
      duration,
    };

    fetch(`${API_BASE_URL}/api/bookings/${selectedEvent?.id ? `${selectedEvent.id}/` : ''}`, {
      method: selectedEvent?.id ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    })
    .then((res) => res.json())
    .then((updatedBooking) => {
      console.log("Booking updated:", updatedBooking);
      onAddEvent(updatedBooking);
      onClose();
    })
    .catch((error) => console.error("Error updating booking:", error));
  };

  const handleDelete = () => {
    if (!selectedEvent?.id) return;

    fetch(`${API_BASE_URL}/api/bookings/${selectedEvent.id}/`, { method: "DELETE" })
      .then(() => {
        onDeleteEvent(selectedEvent.id);
        onClose();
      })
      .catch((error) => console.error("Error deleting booking:", error));
  };

  return (
    <Modal open={open} onClose={onClose} backdrop="static">
      <Modal.Header>
        <Modal.Title>{selectedEvent ? "Edit Booking" : "Create Booking"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form fluid>
          <Form.Group controlId="service">
            <Form.ControlLabel>Service</Form.ControlLabel>
            <SelectPicker 
              data={services} 
              block 
              placeholder="Select a service" 
              value={selectedService}
              onChange={setSelectedService} 
            />
          </Form.Group>
          <Form.Group controlId="employee">
            <Form.ControlLabel>Employee</Form.ControlLabel>
            <SelectPicker 
              data={employees} 
              block 
              placeholder="Select an employee" 
              value={selectedEmployee}
              onChange={setSelectedEmployee} 
            />
          </Form.Group>
          <Form.Group controlId="customerName">
            <Form.ControlLabel>Customer Name</Form.ControlLabel>
            <Form.Control 
              name="customerName" 
              placeholder="Enter customer name" 
              value={customerName}
              onChange={setCustomerName} 
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.ControlLabel>Phone Number</Form.ControlLabel>
            <Form.Control 
              name="phone" 
              type="tel" 
              placeholder="Enter phone number" 
              value={phone}
              onChange={setPhone} 
            />
          </Form.Group>
          <Form.Group controlId="bookingDate">
            <Form.ControlLabel>Booking Date</Form.ControlLabel>
            <DatePicker 
              format="yyyy-MM-dd" 
              block 
              placeholder="Select a date" 
              value={bookingDate}
              onChange={(date) => setBookingDate(date as Date | null)} 
            />
          </Form.Group>
          <Form.Group controlId="bookingTime">
            <Form.ControlLabel>Booking Time</Form.ControlLabel>
            <DatePicker 
              format="HH:mm" 
              block 
              placeholder="Select a time" 
              hideHours={(hour) => hour < 9 || hour > 21} // ✅ Only allow 9 AM - 9 PM
              hideMinutes={(minute) => minute !== 0 && minute !== 30} // ✅ Only allow 00 and 30 minutes
              value={bookingTime}
              onChange={(date) => setBookingTime(date as Date | null)} 
            />
          </Form.Group>
          <Form.Group controlId="duration">
            <Form.ControlLabel>Duration</Form.ControlLabel>
            <SelectPicker 
              data={[{ label: "60 minutes", value: 60 }, { label: "90 minutes", value: 90 }, { label: "120 minutes", value: 120 }]} 
              block 
              placeholder="Select duration" 
              value={duration}
              onChange={(value) => setDuration(value ?? 60)} 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit} appearance="primary">{selectedEvent ? "Save Changes" : "Submit"}</Button>
        {selectedEvent && <Button onClick={handleDelete} appearance="danger">Delete</Button>}
        <Button onClick={onClose} appearance="subtle">Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;

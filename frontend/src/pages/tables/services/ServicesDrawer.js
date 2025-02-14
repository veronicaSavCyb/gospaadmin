import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Drawer, Button, Form } from 'rsuite';
const ServicesDrawer = ({ open, onClose, serviceToEdit }) => {
    const [formValue, setFormValue] = useState({
        name: '',
        shortDescriptor: '',
        detailedDescription: '',
        category: ''
    });
    useEffect(() => {
        if (serviceToEdit) {
            setFormValue(serviceToEdit);
        }
        else {
            setFormValue({ name: '', shortDescriptor: '', detailedDescription: '', category: '' });
        }
    }, [serviceToEdit]);
    // ✅ Correct the onChange function by explicitly handling form updates
    const handleFormChange = (value) => {
        setFormValue(prev => ({ ...prev, ...value })); // ✅ Merge new values with existing state
    };
    const handleSubmit = async () => {
        try {
            if (serviceToEdit?.id) {
                // ✅ Update existing service
                await axios.put(`/api/services/${serviceToEdit.id}/`, formValue);
            }
            else {
                // ✅ Create a new service
                await axios.post('/api/services/', formValue);
            }
            onClose();
            window.location.reload();
        }
        catch (error) {
            console.error('Error saving service:', error);
        }
    };
    return (React.createElement(Drawer, { backdrop: "static", size: "sm", placement: "right", open: open, onClose: onClose },
        React.createElement(Drawer.Header, null,
            React.createElement(Drawer.Title, null, serviceToEdit ? 'Edit Service' : 'Add a new Service'),
            React.createElement(Drawer.Actions, null,
                React.createElement(Button, { onClick: handleSubmit, appearance: "primary" }, serviceToEdit ? 'Update' : 'Confirm'),
                React.createElement(Button, { onClick: onClose, appearance: "subtle" }, "Cancel"))),
        React.createElement(Drawer.Body, null,
            React.createElement(Form, { fluid: true, onChange: handleFormChange, formValue: formValue },
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Service Name"),
                    React.createElement(Form.Control, { name: "name", required: true })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Short Descriptor"),
                    React.createElement(Form.Control, { name: "shortDescriptor", required: true })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Detailed Description"),
                    React.createElement(Form.Control, { name: "detailedDescription", as: "textarea", rows: 3, required: true })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Category"),
                    React.createElement(Form.Control, { name: "category", required: true }))))));
};
export default ServicesDrawer;
//# sourceMappingURL=ServicesDrawer.js.map
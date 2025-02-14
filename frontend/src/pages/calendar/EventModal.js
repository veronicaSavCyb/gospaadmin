import React from 'react';
import { Modal, Button, Form, DatePicker, Stack, Checkbox } from 'rsuite';
const EventModal = (props) => {
    const { onClose, open, onAddEvent, ...rest } = props;
    return (React.createElement(Modal, { open: open, onClose: onClose, backdrop: "static", ...rest },
        React.createElement(Modal.Header, null,
            React.createElement(Modal.Title, null, "Add a New Event")),
        React.createElement(Modal.Body, null,
            React.createElement(Form, { fluid: true },
                React.createElement(Form.Group, { controlId: "name" },
                    React.createElement(Form.ControlLabel, null, "Event Name"),
                    React.createElement(Form.Control, { name: "name" })),
                React.createElement(Form.Group, { controlId: "description" },
                    React.createElement(Form.ControlLabel, null, "Event Description"),
                    React.createElement(Form.Control, { name: "description" })),
                React.createElement(Form.Group, { controlId: "location" },
                    React.createElement(Form.ControlLabel, null, "Event Location"),
                    React.createElement(Form.Control, { name: "location" })),
                React.createElement(Form.Group, { controlId: "start" },
                    React.createElement(Form.ControlLabel, null, "Event Date"),
                    React.createElement(Stack, { spacing: 6 },
                        React.createElement(DatePicker, { format: "yyyy-MM-dd HH:mm:ss", block: true, style: { width: 200 }, placeholder: "Start Date" }),
                        React.createElement(DatePicker, { format: "yyyy-MM-dd HH:mm:ss", block: true, style: { width: 200 }, placeholder: "End Date" }),
                        React.createElement(Checkbox, null, "All Day"))))),
        React.createElement(Modal.Footer, null,
            React.createElement(Button, { onClick: onAddEvent, appearance: "primary" }, "Submit"),
            React.createElement(Button, { onClick: onClose, appearance: "subtle" }, "Cancel"))));
};
export default EventModal;
//# sourceMappingURL=EventModal.js.map
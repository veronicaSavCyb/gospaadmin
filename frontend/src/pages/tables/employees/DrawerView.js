import React from 'react';
import { Drawer, Button, Form, Stack, Rate } from 'rsuite';
const DrawerView = ({ open, onClose }) => {
    return (React.createElement(Drawer, { backdrop: "static", size: "sm", placement: "right", open: open, onClose: onClose },
        React.createElement(Drawer.Header, null,
            React.createElement(Drawer.Title, null, "Add a new employee"),
            React.createElement(Drawer.Actions, null,
                React.createElement(Button, { onClick: onClose, appearance: "primary" }, "Confirm"),
                React.createElement(Button, { onClick: onClose, appearance: "subtle" }, "Cancel"))),
        React.createElement(Drawer.Body, null,
            React.createElement(Form, { fluid: true },
                React.createElement(Stack, { justifyContent: "space-between", style: { marginBottom: 20 } },
                    React.createElement(Form.Group, null,
                        React.createElement(Form.ControlLabel, null, "First Name"),
                        React.createElement(Form.Control, { name: "firstName" })),
                    React.createElement(Form.Group, null,
                        React.createElement(Form.ControlLabel, null, "Last Name"),
                        React.createElement(Form.Control, { name: "lastName" }))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Email"),
                    React.createElement(Form.Control, { name: "email", type: "email" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Contact Number"),
                    React.createElement(Form.Control, { name: "contactNumber" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Assigned Services"),
                    React.createElement(Form.Control, { name: "assignedServices" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Rating"),
                    React.createElement(Form.Control, { name: "rating", accepter: Rate }))))));
};
export default DrawerView;
//# sourceMappingURL=DrawerView.js.map
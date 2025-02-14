import React from 'react';
import { Drawer, Button, Form, Stack, InputNumber, InputGroup, Slider, Rate } from 'rsuite';
const DrawerView = (props) => {
    const { onClose, ...rest } = props;
    return (React.createElement(Drawer, { backdrop: "static", size: "sm", placement: "right", onClose: onClose, ...rest },
        React.createElement(Drawer.Header, null,
            React.createElement(Drawer.Title, null, "Add a new member"),
            React.createElement(Drawer.Actions, null,
                React.createElement(Button, { onClick: onClose, appearance: "primary" }, "Confirm"),
                React.createElement(Button, { onClick: onClose, appearance: "subtle" }, "Cancel"))),
        React.createElement(Drawer.Body, null,
            React.createElement(Form, { fluid: true },
                React.createElement(Stack, { justifyContent: "space-between", style: { marginBottom: 20 } },
                    React.createElement(Form.Group, null,
                        React.createElement(Form.ControlLabel, null, "First Name"),
                        React.createElement(Form.Control, { name: "firstname", style: { width: 200 } })),
                    React.createElement(Form.Group, null,
                        React.createElement(Form.ControlLabel, null, "Last Name"),
                        React.createElement(Form.Control, { name: "lastname", style: { width: 200 } }))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Email"),
                    React.createElement(Form.Control, { name: "email", type: "email" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "City"),
                    React.createElement(Form.Control, { name: "city" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Street"),
                    React.createElement(Form.Control, { name: "street" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Rating"),
                    React.createElement(Form.Control, { name: "rating", accepter: Rate })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Skill Proficiency"),
                    React.createElement(Form.Control, { name: "skill", accepter: Slider, progress: true })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Income"),
                    React.createElement(InputGroup, { style: { width: '100%' } },
                        React.createElement(InputGroup.Addon, null, "$"),
                        React.createElement(Form.Control, { name: "income", accepter: InputNumber, style: { width: '100%' } })))))));
};
export default DrawerView;
//# sourceMappingURL=DrawerView.js.map
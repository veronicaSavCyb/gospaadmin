import React from 'react';
import { Form, Button, Panel, InputGroup, Stack, Checkbox, Divider } from 'rsuite';
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { Link } from 'react-router-dom';
import Brand from '@/components/Brand';
const SignIn = () => {
    const [visible, setVisible] = React.useState(false);
    return (React.createElement(Stack, { justifyContent: "center", alignItems: "center", direction: "column", style: {
            height: '100vh'
        } },
        React.createElement(Brand, { style: { marginBottom: 10 } }),
        React.createElement(Panel, { header: React.createElement("h3", null, "Create an Account"), bordered: true, style: { background: '#fff', width: 400 } },
            React.createElement("p", null,
                React.createElement("span", null, "Already have an account?"),
                " ",
                React.createElement(Link, { to: "/sign-in" }, "Sign in here")),
            React.createElement(Divider, null, "OR"),
            React.createElement(Form, { fluid: true },
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Username"),
                    React.createElement(Form.Control, { name: "name" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Email"),
                    React.createElement(Form.Control, { name: "email" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Password"),
                    React.createElement(InputGroup, { inside: true, style: { width: '100%' } },
                        React.createElement(Form.Control, { name: "password", type: visible ? 'text' : 'password', autoComplete: "off" }),
                        React.createElement(InputGroup.Button, { onClick: () => setVisible(!visible) }, visible ? React.createElement(EyeIcon, null) : React.createElement(EyeSlashIcon, null)))),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Confirm Password"),
                    React.createElement(Form.Control, { name: "confirm-password", type: "password" })),
                React.createElement(Form.Group, null,
                    React.createElement(Stack, { style: { marginLeft: -10 } },
                        React.createElement(Checkbox, null, "I Agree"),
                        React.createElement(Button, { appearance: "link" }, "Terms and conditions."))),
                React.createElement(Form.Group, null,
                    React.createElement(Stack, { spacing: 6 },
                        React.createElement(Button, { appearance: "primary" }, "Submit")))))));
};
export default SignIn;
//# sourceMappingURL=SignUp.js.map
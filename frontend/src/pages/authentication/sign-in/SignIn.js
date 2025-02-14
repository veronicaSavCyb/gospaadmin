import React from 'react';
import { Form, Button, Panel, IconButton, Stack, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
import GithubIcon from '@rsuite/icons/legacy/Github';
import FacebookIcon from '@rsuite/icons/legacy/Facebook';
import GoogleIcon from '@rsuite/icons/legacy/Google';
import WechatIcon from '@rsuite/icons/legacy/Wechat';
import Brand from '@/components/Brand';
const SignUp = () => {
    return (React.createElement(Stack, { justifyContent: "center", alignItems: "center", direction: "column", style: {
            height: '100vh'
        } },
        React.createElement(Brand, { style: { marginBottom: 10 } }),
        React.createElement(Panel, { bordered: true, style: { background: '#fff', width: 400 }, header: React.createElement("h3", null, "Sign In") },
            React.createElement("p", { style: { marginBottom: 10 } },
                React.createElement("span", { className: "text-muted" }, "New Here? "),
                ' ',
                React.createElement(Link, { to: "/sign-up" }, " Create an Account")),
            React.createElement(Form, { fluid: true },
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null, "Username or email address"),
                    React.createElement(Form.Control, { name: "name" })),
                React.createElement(Form.Group, null,
                    React.createElement(Form.ControlLabel, null,
                        React.createElement("span", null, "Password"),
                        React.createElement("a", { style: { float: 'right' } }, "Forgot password?")),
                    React.createElement(Form.Control, { name: "name", type: "password" })),
                React.createElement(Form.Group, null,
                    React.createElement(Stack, { spacing: 6, divider: React.createElement(Divider, { vertical: true }) },
                        React.createElement(Button, { appearance: "primary" }, "Sign in"),
                        React.createElement(Stack, { spacing: 6 },
                            React.createElement(IconButton, { icon: React.createElement(WechatIcon, null), appearance: "subtle" }),
                            React.createElement(IconButton, { icon: React.createElement(GithubIcon, null), appearance: "subtle" }),
                            React.createElement(IconButton, { icon: React.createElement(FacebookIcon, null), appearance: "subtle" }),
                            React.createElement(IconButton, { icon: React.createElement(GoogleIcon, null), appearance: "subtle" }))))))));
};
export default SignUp;
//# sourceMappingURL=SignIn.js.map
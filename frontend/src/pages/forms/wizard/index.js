import React from 'react';
import WizardForm from './WizardForm';
import { Breadcrumb, Panel } from 'rsuite';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Wizard Form"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Forms"),
                React.createElement(Breadcrumb.Item, { active: true }, "Wizard Form"))) },
        React.createElement(WizardForm, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
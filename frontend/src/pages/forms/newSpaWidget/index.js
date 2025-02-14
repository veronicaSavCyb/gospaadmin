import React from 'react';
import SpaSalonWizardForm from './SpaSalonWizardForm';
import { Breadcrumb, Panel } from 'rsuite';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Spa Salon Wizard"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Forms"),
                React.createElement(Breadcrumb.Item, { active: true }, "Spa Salon Wizard"))) },
        React.createElement(SpaSalonWizardForm, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
import React from 'react';
import BasicForm from './BasicForm';
import { Breadcrumb, Panel } from 'rsuite';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Basic Form"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Forms"),
                React.createElement(Breadcrumb.Item, { active: true }, "Basic Form"))) },
        React.createElement(BasicForm, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
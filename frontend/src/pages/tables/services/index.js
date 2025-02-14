import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import ServicesTable from './ServicesTable';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, " My Services"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Tables"),
                React.createElement(Breadcrumb.Item, { active: true }, "Services"))) },
        React.createElement(ServicesTable, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
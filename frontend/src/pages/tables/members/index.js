import React from 'react';
import { Breadcrumb, Panel } from 'rsuite';
import DataTable from './DataTable';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Members"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Tables"),
                React.createElement(Breadcrumb.Item, { active: true }, "Members"))) },
        React.createElement(DataTable, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
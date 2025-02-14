import React from 'react';
import VirtualizedTable from './VirtualizedTable';
import { Breadcrumb, Panel } from 'rsuite';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Virtualized Table"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, null, "Tables"),
                React.createElement(Breadcrumb.Item, { active: true }, "Virtualized Table"))) },
        React.createElement(VirtualizedTable, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
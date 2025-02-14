import React from 'react';
import { Panel, Breadcrumb } from 'rsuite';
import Calendar from './Calendar';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement(React.Fragment, null,
            React.createElement("h3", { className: "title" }, "Booking Calendar"),
            React.createElement(Breadcrumb, null,
                React.createElement(Breadcrumb.Item, { href: "/" }, "Home"),
                React.createElement(Breadcrumb.Item, { active: true }, "Booking Calendar"))) },
        React.createElement(Calendar, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
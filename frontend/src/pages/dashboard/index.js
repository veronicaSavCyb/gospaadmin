import React from 'react';
import { Panel } from 'rsuite';
import Dashboard from './Dashboard';
import Copyright from '@/components/Copyright';
import PageToolbar from '@/components/PageToolbar';
const Page = () => {
    return (React.createElement(Panel, { header: React.createElement("h3", { className: "title" }, "Dashboard") },
        React.createElement(PageToolbar, null),
        React.createElement(Dashboard, null),
        React.createElement(Copyright, null)));
};
export default Page;
//# sourceMappingURL=index.js.map
import React from 'react';
import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import ArrowLeftLine from '@rsuite/icons/ArrowLeftLine';
const Error404 = () => {
    return (React.createElement(ErrorPage, { code: 404 },
        React.createElement("p", { className: "error-page-title" }, "Oops\u2026 You just found an error page"),
        React.createElement("p", { className: "error-page-subtitle text-muted" }, "We are sorry but the page you are looking for was not found"),
        React.createElement(IconButton, { icon: React.createElement(ArrowLeftLine, null), appearance: "primary", href: "/" }, "Take me home")));
};
export default Error404;
//# sourceMappingURL=Error404.js.map
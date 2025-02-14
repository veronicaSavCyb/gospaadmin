import React from 'react';
import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import ArrowLeftLine from '@rsuite/icons/ArrowLeftLine';
export default () => (React.createElement(ErrorPage, { code: 500 },
    React.createElement("p", { className: "error-page-title" }, "Oops\u2026 You just found an error page"),
    React.createElement("p", { className: "error-page-subtitle text-muted " }, "We are sorry but our server encountered an internal error"),
    React.createElement(IconButton, { icon: React.createElement(ArrowLeftLine, null), appearance: "primary", href: "/" }, "Take me home")));
//# sourceMappingURL=Error500.js.map
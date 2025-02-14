import React from 'react';
import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import ArrowLeftLine from '@rsuite/icons/ArrowLeftLine';
export default () => (React.createElement(ErrorPage, { code: 503 },
    React.createElement("p", { className: "error-page-title" }, "Oops\u2026 You just found an error page"),
    React.createElement("p", { className: "error-page-subtitle text-muted " }, "This page is being updated and maintained."),
    React.createElement(IconButton, { icon: React.createElement(ArrowLeftLine, null), appearance: "primary", href: "/" }, "Take me home")));
//# sourceMappingURL=Error503.js.map
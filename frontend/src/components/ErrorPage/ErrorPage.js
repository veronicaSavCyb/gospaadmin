import React from 'react';
const ErrorPage = ({ code = 404, imagePath, children }) => {
    // ✅ If imagePath is not provided, use a default
    const errorImage = imagePath || `/images/errors/${code}.svg`;
    return (React.createElement("div", { className: "error-page" },
        React.createElement("div", { className: "item" },
            React.createElement("img", { src: errorImage, alt: `Error ${code}` }),
            React.createElement("div", { className: "text" },
                React.createElement("h1", { className: "error-page-code" }, code),
                children))));
};
export default ErrorPage;
//# sourceMappingURL=ErrorPage.js.map
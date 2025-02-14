import React from 'react';
const FormHeader = ({ title, description }) => {
    return (React.createElement("div", { style: { marginBottom: 30 } },
        React.createElement("h5", null, title),
        React.createElement("p", { className: "text-muted" }, description)));
};
export default FormHeader;
//# sourceMappingURL=FormHeader.js.map
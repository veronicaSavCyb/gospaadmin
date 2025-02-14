import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';
const Brand = props => {
    return (React.createElement(Stack, { className: "brand", ...props },
        React.createElement(Logo, { height: 26, style: { marginTop: 6 } }),
        React.createElement(Link, { to: "/" },
            React.createElement("span", { style: { marginLeft: 14 } }, "Go Spa Admin"))));
};
export default Brand;
//# sourceMappingURL=Brand.js.map
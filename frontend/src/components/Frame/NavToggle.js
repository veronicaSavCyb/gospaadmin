import React from 'react';
import { Navbar, Nav } from 'rsuite';
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
const NavToggle = ({ expand, onChange }) => {
    return (React.createElement(Navbar, { appearance: "subtle", className: "nav-toggle" },
        React.createElement(Nav, { pullRight: true },
            React.createElement(Nav.Item, { onClick: onChange, style: { textAlign: 'center' }, icon: expand ? React.createElement(ArrowLeftLineIcon, null) : React.createElement(ArrowRightLineIcon, null) }))));
};
export default NavToggle;
//# sourceMappingURL=NavToggle.js.map
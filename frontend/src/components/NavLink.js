import React from 'react';
import { NavLink as BaseNavLink } from 'react-router-dom';
const NavLink = React.forwardRef(({ to, children, ...rest }, ref) => {
    return (React.createElement(BaseNavLink, { ref: ref, to: to, ...rest }, children));
});
export default NavLink;
//# sourceMappingURL=NavLink.js.map
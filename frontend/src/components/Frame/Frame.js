import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Container, Sidebar, Sidenav, Content, Nav, DOMHelper } from 'rsuite';
import { Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import Header from '../Header';
import NavLink from '../NavLink';
import Brand from '../Brand';
const { getHeight, on } = DOMHelper;
const NavItem = props => {
    const { title, eventKey, ...rest } = props;
    return (React.createElement(Nav.Item, { eventKey: eventKey, as: NavLink, ...rest }, title));
};
const Frame = (props) => {
    const { navs } = props;
    const [expand, setExpand] = useState(true);
    const [windowHeight, setWindowHeight] = useState(getHeight(window));
    useEffect(() => {
        setWindowHeight(getHeight(window));
        const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));
        return () => {
            resizeListenner.off();
        };
    }, []);
    const containerClasses = classNames('page-container', {
        'container-full': !expand
    });
    const navBodyStyle = expand
        ? { height: windowHeight - 112, overflow: 'auto' }
        : {};
    return (React.createElement(Container, { className: "frame" },
        React.createElement(Sidebar, { style: { display: 'flex', flexDirection: 'column' }, width: expand ? 260 : 56, collapsible: true },
            React.createElement(Sidenav.Header, null,
                React.createElement(Brand, null)),
            React.createElement(Sidenav, { expanded: expand, appearance: "subtle", defaultOpenKeys: ['2', '3'] },
                React.createElement(Sidenav.Body, { style: navBodyStyle },
                    React.createElement(Nav, null, navs.map(item => {
                        const { children, ...rest } = item;
                        if (children) {
                            return (React.createElement(Nav.Menu, { key: item.eventKey, placement: "rightStart", trigger: "hover", ...rest }, children.map(child => {
                                return React.createElement(NavItem, { key: child.eventKey, ...child });
                            })));
                        }
                        if (rest.target === '_blank') {
                            return (React.createElement(Nav.Item, { key: item.eventKey, ...rest }, item.title));
                        }
                        return React.createElement(NavItem, { key: rest.eventKey, ...rest });
                    })))),
            React.createElement(NavToggle, { expand: expand, onChange: () => setExpand(!expand) })),
        React.createElement(Container, { className: containerClasses },
            React.createElement(Header, null),
            React.createElement(Content, null,
                React.createElement(Outlet, null)))));
};
export default Frame;
//# sourceMappingURL=Frame.js.map
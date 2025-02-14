import React from 'react';
export interface NavItemData {
    eventKey: string;
    title: string;
    icon?: any;
    to?: string;
    target?: string;
    children?: NavItemData[];
}
export interface FrameProps {
    navs: NavItemData[];
    children?: React.ReactNode;
}
declare const Frame: (props: FrameProps) => React.JSX.Element;
export default Frame;

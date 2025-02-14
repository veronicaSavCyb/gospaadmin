import React from 'react';
export declare const appNavs: ({
    eventKey: string;
    icon: React.JSX.Element;
    title: string;
    to: string;
    children?: undefined;
    href?: undefined;
    target?: undefined;
} | {
    eventKey: string;
    icon: React.JSX.Element;
    title: string;
    to: string;
    children: {
        eventKey: string;
        title: string;
        to: string;
    }[];
    href?: undefined;
    target?: undefined;
} | {
    eventKey: string;
    title: string;
    icon: React.JSX.Element;
    children: {
        eventKey: string;
        title: string;
        to: string;
    }[];
    to?: undefined;
    href?: undefined;
    target?: undefined;
} | {
    eventKey: string;
    title: string;
    icon: React.JSX.Element;
    href: string;
    target: string;
    to?: undefined;
    children?: undefined;
})[];

import React from 'react';
import { Icon } from '@rsuite/icons';
import { VscTable, VscCalendar } from 'react-icons/vsc';
import { MdFingerprint, MdDashboard, MdModeEditOutline } from 'react-icons/md';
import CubesIcon from '@rsuite/icons/legacy/Cubes';
export const appNavs = [
    {
        eventKey: 'dashboard',
        icon: React.createElement(Icon, { as: MdDashboard }),
        title: 'Dashboard',
        to: '/dashboard'
    },
    {
        eventKey: 'calendar',
        icon: React.createElement(Icon, { as: VscCalendar }),
        title: 'Booking Calendar',
        to: '/calendar'
    },
    {
        eventKey: 'tables',
        icon: React.createElement(Icon, { as: VscTable }),
        title: 'Manage Resources',
        to: '/table-members',
        children: [
            {
                eventKey: 'members',
                title: 'Members',
                to: '/table-members'
            },
            {
                eventKey: 'employees',
                title: 'Employees',
                to: '/table-employees'
            },
            {
                eventKey: 'services',
                title: 'Services',
                to: '/table-services'
            },
            {
                eventKey: 'virtualized',
                title: 'Virtualized Table',
                to: '/table-virtualized'
            }
        ]
    },
    {
        eventKey: 'forms',
        icon: React.createElement(Icon, { as: MdModeEditOutline }),
        title: 'Forms',
        to: '/form-basic',
        children: [
            {
                eventKey: 'form-basic',
                title: 'Basic',
                to: '/form-basic'
            },
            {
                eventKey: 'form-wizard',
                title: 'Wizard',
                to: '/form-wizard'
            },
            {
                eventKey: 'spa-salon-wizard',
                title: 'New Salon Wizard',
                to: '/spa-salon-wizard'
            }
        ]
    },
    {
        eventKey: 'authentication',
        title: 'Authentication',
        icon: React.createElement(Icon, { as: MdFingerprint }),
        children: [
            {
                eventKey: 'sign-in',
                title: 'Sign In',
                to: '/sign-in'
            },
            {
                eventKey: 'sign-up',
                title: 'Sign Up',
                to: '/sign-up'
            },
            {
                eventKey: 'error403',
                title: 'Error 403',
                to: '/error-403'
            },
            {
                eventKey: 'error404',
                title: 'Error 404',
                to: '/error-404'
            },
            {
                eventKey: 'error500',
                title: 'Error 500',
                to: '/error-500'
            },
            {
                eventKey: 'error503',
                title: 'Error 503',
                to: '/error-503'
            }
        ]
    },
    {
        eventKey: 'components',
        title: 'Components',
        icon: React.createElement(CubesIcon, null),
        href: 'https://rsuitejs.com/components/overview/',
        target: '_blank'
    }
];
//# sourceMappingURL=config.js.map
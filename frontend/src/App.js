import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';
import locales from './locales';
import Frame from './components/Frame';
import DashboardPage from './pages/dashboard';
import Error404Page from './pages/authentication/404';
import Error403Page from './pages/authentication/403';
import Error500Page from './pages/authentication/500';
import Error503Page from './pages/authentication/503';
import SignInPage from './pages/authentication/sign-in';
import SignUpPage from './pages/authentication/sign-up';
import MembersPage from './pages/tables/members';
import EmployeesPage from './pages/tables/employees';
import ServicesPage from './pages/tables/services';
import VirtualizedTablePage from './pages/tables/virtualized';
import FormBasicPage from './pages/forms/basic';
import FormWizardPage from './pages/forms/wizard';
import SpaSalonWizardPage from './pages/forms/newSpaWidget';
import CalendarPage from './pages/calendar';
import { appNavs } from './config';
const App = () => {
    return (React.createElement(IntlProvider, { locale: "en", messages: locales.en },
        React.createElement(CustomProvider, { locale: enGB },
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Frame, { navs: appNavs }) },
                    React.createElement(Route, { index: true, element: React.createElement(DashboardPage, null) }),
                    React.createElement(Route, { path: "dashboard", element: React.createElement(DashboardPage, null) }),
                    React.createElement(Route, { path: "table-employees", element: React.createElement(EmployeesPage, null) }),
                    React.createElement(Route, { path: "table-services", element: React.createElement(ServicesPage, null) }),
                    React.createElement(Route, { path: "table-members", element: React.createElement(MembersPage, null) }),
                    React.createElement(Route, { path: "table-virtualized", element: React.createElement(VirtualizedTablePage, null) }),
                    React.createElement(Route, { path: "error-404", element: React.createElement(Error404Page, null) }),
                    React.createElement(Route, { path: "error-403", element: React.createElement(Error403Page, null) }),
                    React.createElement(Route, { path: "error-500", element: React.createElement(Error500Page, null) }),
                    React.createElement(Route, { path: "error-503", element: React.createElement(Error503Page, null) }),
                    React.createElement(Route, { path: "sign-in", element: React.createElement(SignInPage, null) }),
                    React.createElement(Route, { path: "sign-up", element: React.createElement(SignUpPage, null) }),
                    React.createElement(Route, { path: "form-basic", element: React.createElement(FormBasicPage, null) }),
                    React.createElement(Route, { path: "form-wizard", element: React.createElement(FormWizardPage, null) }),
                    React.createElement(Route, { path: "spa-salon-wizard", element: React.createElement(SpaSalonWizardPage, null) }),
                    React.createElement(Route, { path: "calendar", element: React.createElement(CalendarPage, null) })),
                React.createElement(Route, { path: "*", element: React.createElement(Error404Page, null) })))));
};
export default App;
//# sourceMappingURL=App.js.map
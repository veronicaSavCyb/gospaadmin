import React from 'react';
import { Panel } from 'rsuite';
import Copyright from '@/components/Copyright';
const PageContent = props => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Panel, { style: { background: '#fff' }, ...props }),
        React.createElement(Copyright, null)));
};
export default PageContent;
//# sourceMappingURL=PageContent.js.map
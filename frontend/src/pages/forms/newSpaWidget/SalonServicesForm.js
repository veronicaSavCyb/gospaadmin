import React from 'react';
import { Form } from 'rsuite';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';
const SalonServicesForm = () => {
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Info about Salon services", description: "Specify information on services available at the Salon" }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Service Name"),
            React.createElement(Form.Control, { name: "name" })),
        React.createElement(Form.Group, { controlId: "descriptor" },
            React.createElement(Form.ControlLabel, null, "Services Shortened Descriptor"),
            React.createElement(Form.Control, { name: "descriptor" }),
            React.createElement(Form.HelpText, null, "Customers will see this shortened version of your statement descriptor.")),
        React.createElement(Form.Group, { controlId: "description" },
            React.createElement(Form.ControlLabel, null, "Detailed Service Description"),
            React.createElement(Form.Control, { name: "description", accepter: Textarea }),
            React.createElement(Form.HelpText, null, "Customers will see this detailed service description once they click \"Show more\" button."))));
};
export default SalonServicesForm;
//# sourceMappingURL=SalonServicesForm.js.map
import React from 'react';
import { Form, SelectPicker } from 'rsuite';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';
const BusinessDetailForm = () => {
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Business Info", description: "Advanced collaboration forindividuals and organizations" }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Business Name"),
            React.createElement(Form.Control, { name: "name" })),
        React.createElement(Form.Group, { controlId: "descriptor" },
            React.createElement(Form.ControlLabel, null, "Shortened Descriptor"),
            React.createElement(Form.Control, { name: "descriptor" }),
            React.createElement(Form.HelpText, null, "Customers will see this shortened version of your statement descriptor.")),
        React.createElement(Form.Group, { controlId: "type" },
            React.createElement(Form.ControlLabel, null, "Corporation Type"),
            React.createElement(Form.Control, { name: "type", accepter: SelectPicker, searchable: false, data: [
                    { value: 1, label: 'Sole proprietorship' },
                    { value: 2, label: 'Joint stock company' },
                    { value: 3, label: 'Limited liability company' },
                    { value: 4, label: 'Partnership' },
                    { value: 5, label: 'Limited partnership' },
                    { value: 6, label: 'General partnership' },
                    { value: 7, label: 'Limited liability partnership' },
                    { value: 8, label: 'General liability partnership' },
                    { value: 9, label: 'Limited liability general partnership' },
                    { value: 10, label: 'General liability general partnership' }
                ], block: true }),
            React.createElement(Form.HelpText, null, "Different team sizes will be assigned different management modes. Of course the fees are different.")),
        React.createElement(Form.Group, { controlId: "description" },
            React.createElement(Form.ControlLabel, null, "Business Description"),
            React.createElement(Form.Control, { name: "description", accepter: Textarea })),
        React.createElement(Form.Group, { controlId: "email" },
            React.createElement(Form.ControlLabel, null, " Contact Email"),
            React.createElement(Form.Control, { name: "email" }))));
};
export default BusinessDetailForm;
//# sourceMappingURL=BusinessDetailForm.js.map
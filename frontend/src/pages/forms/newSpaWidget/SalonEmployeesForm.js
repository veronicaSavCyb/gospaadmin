import React from 'react';
import { Form, SelectPicker, Uploader } from 'rsuite';
import FormHeader from './FormHeader';
const SalonEmployeesForm = () => {
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Employees Settings", description: "Assemble related projects together and grant members access to several projects at once." }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Specify Team Size"),
            React.createElement(Form.Control, { name: "name", accepter: SelectPicker, searchable: false, data: [
                    { value: 1, label: '> 5 people' },
                    { value: 2, label: '5-20 people' },
                    { value: 3, label: '20-50 people' },
                    { value: 4, label: '50+ people' }
                ], block: true }),
            React.createElement(Form.HelpText, null, "Different team sizes will be assigned different management modes. Of course, the fees are different.")),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Employee Name"),
            React.createElement(Form.Control, { name: "name" })),
        React.createElement(Form.Group, { controlId: "uploader" },
            React.createElement(Form.ControlLabel, null, "Employee Avatar"),
            React.createElement(Form.Control, { name: "uploader", accepter: Uploader, action: "#" })),
        React.createElement(Form.Group, { controlId: "email" },
            React.createElement(Form.ControlLabel, null, " Contact Email"),
            React.createElement(Form.Control, { name: "email" }))));
};
export default SalonEmployeesForm;
//# sourceMappingURL=SalonEmployeesForm.js.map
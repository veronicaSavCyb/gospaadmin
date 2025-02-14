import React from 'react';
import { Form, Stack, InputGroup } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
import RadioTile from '@/components/RadioTile';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';
const SalonInfoForm = () => {
    const [level, setLevel] = React.useState('Private');
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Salon Info", description: "Create a blank project to house information about your employees, services, customers and their bookings." }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Salon Name"),
            React.createElement(Form.Control, { name: "name" }),
            React.createElement(Form.HelpText, null, "Salon names must be unique.")),
        React.createElement(Form.Group, { controlId: "url" },
            React.createElement(Form.ControlLabel, null, "Salon website"),
            React.createElement(InputGroup, { style: { width: '100%' } },
                React.createElement(InputGroup.Addon, null, "https://example.com/"),
                React.createElement(Form.Control, { name: "url" })),
            React.createElement(Form.HelpText, null,
                "Want to house several dependent salons branches under the same namespace? ",
                React.createElement("a", null, "Create a group."))),
        React.createElement(Form.Group, { controlId: "description" },
            React.createElement(Form.ControlLabel, null, "Salon description (optional)"),
            React.createElement(Form.Control, { name: "description", accepter: Textarea })),
        React.createElement(Form.Group, { controlId: "location" },
            React.createElement(Form.ControlLabel, null, "Salon Location"),
            React.createElement(Form.Control, { name: "location" }),
            React.createElement(Form.HelpText, null, "Please provide link to you Spa salon location from Google Maps.")),
        React.createElement(Form.Group, { controlId: "plan" },
            React.createElement(Form.ControlLabel, null, "Visibility Level"),
            React.createElement(Stack, { spacing: 10, direction: "column", alignItems: 'stretch' },
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: VscLock }), title: "Private", value: level, name: "Private", onChange: setLevel }, "Salon management access must be granted explicitly to each user. If this project is part of a group, access will be granted to members of the group."),
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: VscWorkspaceTrusted }), title: "Internal", value: level, name: "Internal", onChange: setLevel }, "Salon management can be accessed by any logged in user except external users.")))));
};
export default SalonInfoForm;
//# sourceMappingURL=SalonInfoForm.js.map
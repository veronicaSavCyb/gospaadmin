import React from 'react';
import { Form, Stack, InputGroup } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
import RadioTile from '@/components/RadioTile';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';
const ProjectInfoForm = () => {
    const [level, setLevel] = React.useState('Private');
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Project Info", description: "Create a blank project to house your files, plan your work, and collaborate on code, among\n          other things." }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Project Name"),
            React.createElement(Form.Control, { name: "name" }),
            React.createElement(Form.HelpText, null, "Project names must be unique.")),
        React.createElement(Form.Group, { controlId: "url" },
            React.createElement(Form.ControlLabel, null, "Project URL"),
            React.createElement(InputGroup, { style: { width: '100%' } },
                React.createElement(InputGroup.Addon, null, "https://rsuitejs.com/"),
                React.createElement(Form.Control, { name: "url" })),
            React.createElement(Form.HelpText, null,
                "Want to house several dependent projects under the same namespace? ",
                React.createElement("a", null, "Create a group."))),
        React.createElement(Form.Group, { controlId: "description" },
            React.createElement(Form.ControlLabel, null, "Project description (optional)"),
            React.createElement(Form.Control, { name: "description", accepter: Textarea })),
        React.createElement(Form.Group, { controlId: "plan" },
            React.createElement(Form.ControlLabel, null, "Visibility Level"),
            React.createElement(Stack, { spacing: 10, direction: "column", alignItems: 'stretch' },
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: VscLock }), title: "Private", value: level, name: "Private", onChange: setLevel }, "Project access must be granted explicitly to each user. If this project is part of a group, access will be granted to members of the group."),
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: VscWorkspaceTrusted }), title: "Internal", value: level, name: "Internal", onChange: setLevel }, "The project can be accessed by any logged in user except external users.")))));
};
export default ProjectInfoForm;
//# sourceMappingURL=ProjectInfoForm.js.map
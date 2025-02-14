import React, { useState } from 'react';
import { Form, Stack, SelectPicker } from 'rsuite';
import RadioTile from '@/components/RadioTile';
import { Icon } from '@rsuite/icons';
import { FaGit, FaGithub, FaGitlab } from 'react-icons/fa';
import FormHeader from './FormHeader';
const TeamSettingsForm = () => {
    const [type, setType] = useState('1');
    return (React.createElement(Form, { fluid: true },
        React.createElement(FormHeader, { title: "Team Settings", description: "Assemble related projects together and grant members access to several projects at once." }),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Team Name"),
            React.createElement(Form.Control, { name: "name" })),
        React.createElement(Form.Group, { controlId: "name" },
            React.createElement(Form.ControlLabel, null, "Specify Team Size"),
            React.createElement(Form.Control, { name: "name", accepter: SelectPicker, searchable: false, data: [
                    { value: 1, label: '> 5 people' },
                    { value: 2, label: '5-20 people' },
                    { value: 3, label: '20-50 people' },
                    { value: 4, label: '50+ people' }
                ], block: true }),
            React.createElement(Form.HelpText, null, "Different team sizes will be assigned different management modes. Of course the fees are different.")),
        React.createElement(Form.Group, { controlId: "plan" },
            React.createElement(Form.ControlLabel, null, "Choose a team workflow"),
            React.createElement(Stack, { spacing: 10, direction: "column", alignItems: 'stretch' },
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: FaGit }), title: "Git Flow", value: type, name: "1", onChange: setType }, "Considered to be a bit complicated and advanced for many of today\u2019s projects, GitFlow enables parallel development where developers can work separately from the master branch on features where a feature branch is created from the master branch."),
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: FaGithub }), title: "GitHub Flow", value: type, name: "2", onChange: setType }, "GitHub Flow is a simpler alternative to GitFlow ideal for smaller teams as they don\u2019t need to manage multiple versions."),
                React.createElement(RadioTile, { icon: React.createElement(Icon, { as: FaGitlab }), title: "GitLab Flow", value: type, name: "3", onChange: setType }, "GitLab Flow is a simpler alternative to GitFlow that combines feature-driven development and feature branching with issue tracking.")))));
};
export default TeamSettingsForm;
//# sourceMappingURL=TeamSettingsForm.js.map
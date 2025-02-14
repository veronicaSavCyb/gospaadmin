import React from 'react';
import { ButtonToolbar, Button, Stack } from 'rsuite';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
const Completed = () => {
    return (React.createElement("div", null,
        React.createElement("div", { style: { margin: '40px 0' } },
            React.createElement(Stack, { spacing: 10 },
                React.createElement(CheckRoundIcon, { style: { fontSize: 50 }, color: "#4caf50" }),
                React.createElement("div", null,
                    React.createElement("h5", null, "Your Are Done!"),
                    React.createElement("p", { className: "text-muted" }, "You can start working on a new project.")))),
        React.createElement("p", null, "Once you have created this project, if you return to Project Web App you see it listed as a project in the Project Center. Updates made to the task list on the project site are reflected in the Project Center in Project Web App."),
        React.createElement("p", null, "You can also click the button below to start working on the project."),
        React.createElement(ButtonToolbar, { style: { marginTop: 20 } },
            React.createElement(Button, { appearance: "primary" }, "View Project"),
            React.createElement(Button, null, "Add permissions to the project"))));
};
export default Completed;
//# sourceMappingURL=Completed.js.map
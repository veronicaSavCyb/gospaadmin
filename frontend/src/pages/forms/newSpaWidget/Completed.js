import React from 'react';
import { ButtonToolbar, Button, Stack } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import CheckRoundIcon from '@rsuite/icons/CheckRound';
const Completed = () => {
    const navigate = useNavigate();
    return (React.createElement("div", null,
        React.createElement("div", { style: { margin: '40px 0' } },
            React.createElement(Stack, { spacing: 10 },
                React.createElement(CheckRoundIcon, { style: { fontSize: 50 }, color: "#4caf50" }),
                React.createElement("div", null,
                    React.createElement("h5", null, "Your Are Done!"),
                    React.createElement("p", { className: "text-muted" }, "You successfully added infromation about your salon, employees and services!.")))),
        React.createElement("p", null, "Once you have created salon, you can alway return to editing details about your salon, services and employees using left navigation menu."),
        React.createElement("p", null, "You can also click the button below to start adding bookings."),
        React.createElement(ButtonToolbar, { style: { marginTop: 20 } },
            React.createElement(Button, { appearance: "primary", onClick: () => navigate('/calendar') },
                " ",
                "Booking Calendar"))));
};
export default Completed;
//# sourceMappingURL=Completed.js.map
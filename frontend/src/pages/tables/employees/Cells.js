import React from 'react';
import { Popover, Whisper, Checkbox, Dropdown, IconButton, Table } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
const { Cell } = Table;
export const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (React.createElement(Popover, { title: "Employee Details" },
        React.createElement("p", null,
            React.createElement("b", null, "First Name:"),
            " ",
            rowData.firstName),
        React.createElement("p", null,
            React.createElement("b", null, "Last Name:"),
            " ",
            rowData.lastName),
        React.createElement("p", null,
            React.createElement("b", null, "Contact Number:"),
            " ",
            rowData.contactNumber),
        React.createElement("p", null,
            React.createElement("b", null, "Assigned Services:"),
            " ",
            rowData.assignedServices)));
    return (React.createElement(Cell, { ...props },
        React.createElement(Whisper, { placement: "top", speaker: speaker },
            React.createElement("a", null,
                rowData.firstName,
                " ",
                rowData.lastName))));
};
export const ImageCell = ({ rowData, dataKey, ...props }) => (React.createElement(Cell, { ...props, style: { padding: 0 } },
    React.createElement("div", { style: {
            width: 40,
            height: 40,
            background: '#f5f5f5',
            borderRadius: 6,
            marginTop: 2,
            overflow: 'hidden',
            display: 'inline-block'
        } },
        React.createElement("img", { src: rowData[dataKey], width: "40" }))));
export const CheckCell = ({ rowData, onChange, checkedKeys, dataKey, ...props }) => (React.createElement(Cell, { ...props, style: { padding: 0 } },
    React.createElement("div", { style: { lineHeight: '46px' } },
        React.createElement(Checkbox, { value: rowData[dataKey], inline: true, onChange: onChange, checked: checkedKeys.some(item => item === rowData[dataKey]) }))));
export const ActionCell = props => {
    return (React.createElement(Cell, { ...props, className: "link-group" },
        React.createElement(Whisper, { placement: "autoVerticalEnd", trigger: "click", speaker: React.createElement(Popover, null,
                React.createElement(Dropdown.Menu, null,
                    React.createElement(Dropdown.Item, null, "View Profile"))) },
            React.createElement(IconButton, { appearance: "subtle", icon: React.createElement(MoreIcon, null) }))));
};
//# sourceMappingURL=Cells.js.map
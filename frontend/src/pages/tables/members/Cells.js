import React from 'react';
import { Popover, Whisper, Checkbox, Dropdown, IconButton, Table } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
const { Cell } = Table;
export const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (React.createElement(Popover, { title: "Description" },
        React.createElement("p", null,
            React.createElement("b", null, "Name:"),
            " ",
            rowData.name),
        React.createElement("p", null,
            React.createElement("b", null, "Gender:"),
            " ",
            rowData.gender),
        React.createElement("p", null,
            React.createElement("b", null, "City:"),
            " ",
            rowData.city),
        React.createElement("p", null,
            React.createElement("b", null, "Street:"),
            " ",
            rowData.street)));
    return (React.createElement(Cell, { ...props },
        React.createElement(Whisper, { placement: "top", speaker: speaker },
            React.createElement("a", null, dataKey ? rowData[dataKey] : null))));
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
const renderMenu = ({ onClose, left, top, className }, ref) => {
    const handleSelect = eventKey => {
        onClose();
        console.log(eventKey);
    };
    return (React.createElement(Popover, { ref: ref, className: className, style: { left, top }, full: true },
        React.createElement(Dropdown.Menu, { onSelect: handleSelect },
            React.createElement(Dropdown.Item, { eventKey: 1 }, "Follow"),
            React.createElement(Dropdown.Item, { eventKey: 2 }, "Sponsor"),
            React.createElement(Dropdown.Item, { eventKey: 3 }, "Add to friends"),
            React.createElement(Dropdown.Item, { eventKey: 4 }, "View Profile"),
            React.createElement(Dropdown.Item, { eventKey: 5 }, "Block"))));
};
export const ActionCell = props => {
    return (React.createElement(Cell, { ...props, className: "link-group" },
        React.createElement(Whisper, { placement: "autoVerticalEnd", trigger: "click", speaker: renderMenu },
            React.createElement(IconButton, { appearance: "subtle", icon: React.createElement(MoreIcon, null) }))));
};
//# sourceMappingURL=Cells.js.map
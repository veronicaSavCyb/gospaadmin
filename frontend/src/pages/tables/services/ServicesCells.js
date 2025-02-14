import React from 'react';
import axios from 'axios';
import { Popover, Whisper, Table, Button } from 'rsuite';
const { Cell } = Table;
export const NameCell = ({ rowData, dataKey, ...props }) => {
    const speaker = (React.createElement(Popover, { title: "Service Details" },
        React.createElement("p", null,
            React.createElement("b", null, "Service Name:"),
            " ",
            rowData.name),
        React.createElement("p", null,
            React.createElement("b", null, "Short Descriptor:"),
            " ",
            rowData.shortDescriptor),
        React.createElement("p", null,
            React.createElement("b", null, "Category:"),
            " ",
            rowData.category)));
    return (React.createElement(Cell, { ...props },
        React.createElement(Whisper, { placement: "top", speaker: speaker },
            React.createElement("a", null, rowData.name))));
};
export const ActionCell = ({ rowData, dataKey, ...props }) => {
    const handleDelete = () => {
        axios.delete(`/api/services/${rowData[dataKey]}/`)
            .then(() => {
            window.location.reload(); // Refresh the table after deletion
        })
            .catch(error => console.error('Error deleting service:', error));
    };
    return (React.createElement(Cell, { ...props },
        React.createElement(Button, { color: "red", size: "xs", onClick: handleDelete }, "Delete")));
};
//# sourceMappingURL=ServicesCells.js.map
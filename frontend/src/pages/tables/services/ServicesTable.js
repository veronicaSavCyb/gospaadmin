import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button, Stack } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import ServicesDrawer from './ServicesDrawer';
import { NameCell, ActionCell } from './ServicesCells';
const { Column, HeaderCell, Cell } = Table;
const ServicesTable = () => {
    const [data, setData] = useState([]);
    const [showDrawer, setShowDrawer] = useState(false);
    const [serviceToEdit, setServiceToEdit] = useState(null);
    // ✅ Fix: Explicitly define the response type
    useEffect(() => {
        axios.get('/api/services/')
            .then(response => setData(response.data)) // ✅ Type now matches useState<Service[]>
            .catch(error => console.error('Error fetching services:', error));
    }, []);
    const handleEdit = (service) => {
        setServiceToEdit(service);
        setShowDrawer(true);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, { className: "table-toolbar", justifyContent: "space-between" },
            React.createElement(Button, { appearance: "primary", onClick: () => {
                    setServiceToEdit(null);
                    setShowDrawer(true);
                } }, "Add Service")),
        React.createElement(Table, { height: 400, data: data },
            React.createElement(Column, { width: 50, align: "center" },
                React.createElement(HeaderCell, null, "Id"),
                React.createElement(Cell, { dataKey: "id" })),
            React.createElement(Column, { width: 200 },
                React.createElement(HeaderCell, null, "Service Name"),
                React.createElement(NameCell, { dataKey: "name" })),
            React.createElement(Column, { width: 200 },
                React.createElement(HeaderCell, null, "Short Descriptor"),
                React.createElement(Cell, { dataKey: "shortDescriptor" })),
            React.createElement(Column, { width: 300 },
                React.createElement(HeaderCell, null, "Detailed Description"),
                React.createElement(Cell, { dataKey: "detailedDescription" })),
            React.createElement(Column, { width: 160 },
                React.createElement(HeaderCell, null, "Category"),
                React.createElement(Cell, { dataKey: "category" })),
            React.createElement(Column, { width: 120 },
                React.createElement(HeaderCell, null,
                    React.createElement(MoreIcon, null)),
                React.createElement(ActionCell, { rowData: data, dataKey: "id", onEdit: handleEdit }))),
        React.createElement(ServicesDrawer, { open: showDrawer, onClose: () => setShowDrawer(false), serviceToEdit: serviceToEdit })));
};
export default ServicesTable;
//# sourceMappingURL=ServicesTable.js.map
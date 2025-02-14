import React, { useState } from 'react';
import { Table, Button, DOMHelper, Stack, } from 'rsuite';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, ActionCell } from './Cells';
const data = mockUsers(20);
const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;
const DataTable = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, { className: "table-toolbar", justifyContent: "space-between" },
            React.createElement(Button, { appearance: "primary", onClick: () => setShowDrawer(true) }, "Add Employee")),
        React.createElement(Table, { height: Math.max(getHeight(window) - 200, 400), data: data },
            React.createElement(Column, { width: 50, align: "center", fixed: true },
                React.createElement(HeaderCell, null, "Id"),
                React.createElement(Cell, { dataKey: "id" })),
            React.createElement(Column, { width: 80, align: "center" },
                React.createElement(HeaderCell, null, "Avatar"),
                React.createElement(ImageCell, { dataKey: "avatar" })),
            React.createElement(Column, { minWidth: 160, flexGrow: 1 },
                React.createElement(HeaderCell, null, "First Name"),
                React.createElement(NameCell, { dataKey: "firstName" })),
            React.createElement(Column, { minWidth: 160, flexGrow: 1 },
                React.createElement(HeaderCell, null, "Last Name"),
                React.createElement(Cell, { dataKey: "lastName" })),
            React.createElement(Column, { width: 200 },
                React.createElement(HeaderCell, null, "Email"),
                React.createElement(Cell, { dataKey: "email" })),
            React.createElement(Column, { width: 160 },
                React.createElement(HeaderCell, null, "Contact Number"),
                React.createElement(Cell, { dataKey: "contactNumber" })),
            React.createElement(Column, { width: 200 },
                React.createElement(HeaderCell, null, "Assigned Services"),
                React.createElement(Cell, { dataKey: "assignedServices" })),
            React.createElement(Column, { width: 100 },
                React.createElement(HeaderCell, null, "Rating"),
                React.createElement(Cell, { dataKey: "rating" }, rowData => Array.from({ length: rowData.rating }).map((_, i) => React.createElement("span", { key: i }, "\u2B50\uFE0F")))),
            React.createElement(Column, { width: 120 },
                React.createElement(HeaderCell, null,
                    React.createElement(MoreIcon, null)),
                React.createElement(ActionCell, { dataKey: "id" }))),
        React.createElement(DrawerView, { open: showDrawer, onClose: () => setShowDrawer(false) })));
};
export default DataTable;
//# sourceMappingURL=DataTable.js.map
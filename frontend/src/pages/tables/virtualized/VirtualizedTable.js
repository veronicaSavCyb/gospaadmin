import React from 'react';
import { DOMHelper, Table } from 'rsuite';
import { mockUsers } from '@/data/mock';
const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;
const data = mockUsers(1000);
const VirtualizedTable = () => {
    return (React.createElement(Table, { virtualized: true, height: Math.max(getHeight(window) - 120, 400), data: data, translate3d: false },
        React.createElement(Column, { width: 70, align: "center", fixed: true },
            React.createElement(HeaderCell, null, "Id"),
            React.createElement(Cell, { dataKey: "id" })),
        React.createElement(Column, { width: 130 },
            React.createElement(HeaderCell, null, "First Name"),
            React.createElement(Cell, { dataKey: "firstName" })),
        React.createElement(Column, { width: 130 },
            React.createElement(HeaderCell, null, "Last Name"),
            React.createElement(Cell, { dataKey: "lastName" })),
        React.createElement(Column, { width: 100 },
            React.createElement(HeaderCell, null, "Gender"),
            React.createElement(Cell, { dataKey: "gender" })),
        React.createElement(Column, { width: 100 },
            React.createElement(HeaderCell, null, "Age"),
            React.createElement(Cell, { dataKey: "age" })),
        React.createElement(Column, { width: 200 },
            React.createElement(HeaderCell, null, "City"),
            React.createElement(Cell, { dataKey: "city" })),
        React.createElement(Column, { minWidth: 200, flexGrow: 1 },
            React.createElement(HeaderCell, null, "Email"),
            React.createElement(Cell, { dataKey: "email" }))));
};
export default VirtualizedTable;
//# sourceMappingURL=VirtualizedTable.js.map
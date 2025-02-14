import React, { useState } from 'react';
import { Input, InputGroup, Table, Button, DOMHelper, Progress, Checkbox, Stack, SelectPicker } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, CheckCell, ActionCell } from './Cells';
const data = mockUsers(20);
const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;
const ratingList = Array.from({ length: 5 }).map((_, index) => {
    return {
        value: index + 1,
        label: Array.from({ length: index + 1 })
            .map(() => '⭐️')
            .join('')
    };
});
const DataTable = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [checkedKeys, setCheckedKeys] = useState([]);
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [rating, setRating] = useState(null);
    let checked = false;
    let indeterminate = false;
    if (checkedKeys.length === data.length) {
        checked = true;
    }
    else if (checkedKeys.length === 0) {
        checked = false;
    }
    else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
        indeterminate = true;
    }
    const handleCheckAll = (_value, checked) => {
        const keys = checked ? data.map(item => item.id) : [];
        setCheckedKeys(keys);
    };
    const handleCheck = (value, checked) => {
        const keys = checked ? [...checkedKeys, value] : checkedKeys.filter(item => item !== value);
        setCheckedKeys(keys);
    };
    const handleSortColumn = (sortColumn, sortType) => {
        setSortColumn(sortColumn);
        setSortType(sortType);
    };
    const filteredData = () => {
        const filtered = data.filter(item => {
            if (!item.name.includes(searchKeyword)) {
                return false;
            }
            if (rating && item.rating !== rating) {
                return false;
            }
            return true;
        });
        if (sortColumn && sortType) {
            return filtered.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt(0);
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt(0);
                }
                if (sortType === 'asc') {
                    return x - y;
                }
                else {
                    return y - x;
                }
            });
        }
        return filtered;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, { className: "table-toolbar", justifyContent: "space-between" },
            React.createElement(Button, { appearance: "primary", onClick: () => setShowDrawer(true) }, "Add Member"),
            React.createElement(Stack, { spacing: 6 },
                React.createElement(SelectPicker, { label: "Rating", data: ratingList, searchable: false, value: rating, onChange: setRating }),
                React.createElement(InputGroup, { inside: true },
                    React.createElement(Input, { placeholder: "Search", value: searchKeyword, onChange: setSearchKeyword }),
                    React.createElement(InputGroup.Addon, null,
                        React.createElement(SearchIcon, null))))),
        React.createElement(Table, { height: Math.max(getHeight(window) - 200, 400), data: filteredData(), sortColumn: sortColumn, sortType: sortType, onSortColumn: handleSortColumn },
            React.createElement(Column, { width: 50, align: "center", fixed: true },
                React.createElement(HeaderCell, null, "Id"),
                React.createElement(Cell, { dataKey: "id" })),
            React.createElement(Column, { width: 50, fixed: true },
                React.createElement(HeaderCell, { style: { padding: 0 } },
                    React.createElement("div", { style: { lineHeight: '40px' } },
                        React.createElement(Checkbox, { inline: true, checked: checked, indeterminate: indeterminate, onChange: handleCheckAll }))),
                React.createElement(CheckCell, { dataKey: "id", checkedKeys: checkedKeys, onChange: handleCheck })),
            React.createElement(Column, { width: 80, align: "center" },
                React.createElement(HeaderCell, null, "Avatar"),
                React.createElement(ImageCell, { dataKey: "avatar" })),
            React.createElement(Column, { minWidth: 160, flexGrow: 1, sortable: true },
                React.createElement(HeaderCell, null, "Name"),
                React.createElement(NameCell, { dataKey: "name" })),
            React.createElement(Column, { width: 230, sortable: true },
                React.createElement(HeaderCell, null, "Skill Proficiency"),
                React.createElement(Cell, { style: { padding: '10px 0' }, dataKey: "progress" }, rowData => React.createElement(Progress, { percent: rowData.progress, showInfo: false }))),
            React.createElement(Column, { width: 100, sortable: true },
                React.createElement(HeaderCell, null, "Rating"),
                React.createElement(Cell, { dataKey: "rating" }, rowData => Array.from({ length: rowData.rating }).map((_, i) => React.createElement("span", { key: i }, "\u2B50\uFE0F")))),
            React.createElement(Column, { width: 100, sortable: true },
                React.createElement(HeaderCell, null, "Income"),
                React.createElement(Cell, { dataKey: "amount" }, rowData => `$${rowData.amount}`)),
            React.createElement(Column, { width: 300 },
                React.createElement(HeaderCell, null, "Email"),
                React.createElement(Cell, { dataKey: "email" })),
            React.createElement(Column, { width: 120 },
                React.createElement(HeaderCell, null,
                    React.createElement(MoreIcon, null)),
                React.createElement(ActionCell, { dataKey: "id" }))),
        React.createElement(DrawerView, { open: showDrawer, onClose: () => setShowDrawer(false) })));
};
export default DataTable;
//# sourceMappingURL=DataTable.js.map
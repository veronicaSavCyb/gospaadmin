import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Stack } from 'rsuite';
import CheckIcon from '@rsuite/icons/Check';
const RadioTile = (props) => {
    const { icon, children, value, title, name, className, onChange, ...rest } = props;
    const checked = value === name;
    const handleChange = useCallback((event) => {
        onChange?.(event.target.value, event);
    }, [onChange]);
    const classes = classNames(className, 'rs-radio-tile', { checked });
    return (React.createElement(Stack, { className: classes, ...rest, as: "label", spacing: 6 },
        icon,
        React.createElement("div", null,
            React.createElement("input", { type: "radio", value: name, checked: checked, onChange: handleChange }),
            React.createElement("div", { className: "rs-radio-tile-title" }, title),
            React.createElement("div", { className: "rs-radio-tile-content text-muted" }, children),
            React.createElement("div", { className: "rs-radio-tile-check" },
                React.createElement(CheckIcon, null)))));
};
export default RadioTile;
//# sourceMappingURL=RadioTile.js.map
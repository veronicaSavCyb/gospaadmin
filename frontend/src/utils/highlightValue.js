import React from 'react';
import toThousands from './toThousands';
const Highlight = ({ value, unit }) => (React.createElement("span", null,
    React.createElement("span", { className: "highlight" }, value),
    " ",
    unit,
    ' '));
export default function highlightValue(value, fixed) {
    if (value === null || typeof value === 'undefined') {
        return '--';
    }
    else if (value === 0) {
        return '0';
    }
    else if (0 < value && value < 1000) {
        return '< 1k';
    }
    else if (1000 <= value && value < 1000000) {
        return React.createElement(Highlight, { value: toThousands(value / 1000, fixed), unit: "k" });
    }
    else if (1000000 <= value && value < 1000000000) {
        return React.createElement(Highlight, { value: toThousands(value / 1000000, fixed), unit: "M" });
    }
    else if (1000000000 <= value) {
        return React.createElement(Highlight, { value: toThousands(value / 1000000000, fixed), unit: "B" });
    }
}
//# sourceMappingURL=highlightValue.js.map
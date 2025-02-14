import React from 'react';
import classNames from 'classnames';
import Chart from 'react-apexcharts';
const defaultOptions = {
    chart: {
        id: 'sparkline1',
        type: 'line',
        height: 140,
        sparkline: {
            enabled: true
        },
        group: 'sparklines'
    },
    stroke: {
        curve: 'smooth'
    },
    markers: {
        size: 0
    },
    tooltip: {
        cssClass: 'tooltip-custom',
        marker: {
            show: false
        },
        fixed: {
            enabled: true,
            position: 'right'
        },
        x: {
            show: false
        }
    },
    colors: ['#fff']
};
const ColorfulChart = ({ className, title, data, type, options }) => (React.createElement("div", { className: classNames('colorful-chart', className) },
    React.createElement("h3", null, title),
    React.createElement(Chart, { series: data, type: type, height: 100, options: Object.assign({}, defaultOptions, options) })));
export default ColorfulChart;
//# sourceMappingURL=ColorfulChart.js.map
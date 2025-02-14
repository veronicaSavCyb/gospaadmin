import React from 'react';
import Chart from 'react-apexcharts';
import { Panel } from 'rsuite';
const defaultOptions = {
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            customScale: 0.8,
            donut: {
                size: '75%'
            },
            offsetY: 0
        },
        stroke: {
            colors: undefined
        }
    },
    colors: ['#5f71e4', '#2dce88', '#fa6340', '#f5365d', '#13cdef'],
    legend: {
        position: 'bottom',
        offsetY: 0
    }
};
const PieChart = ({ title, data, type, labels, options }) => (React.createElement(Panel, { className: "card", style: { height: 380 }, bodyFill: true, header: title },
    React.createElement(Chart, { series: data, type: type, height: 340, options: Object.assign({}, defaultOptions, options, { labels }) })));
export default PieChart;
//# sourceMappingURL=PieChart.js.map
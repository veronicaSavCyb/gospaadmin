import React from 'react';
interface BarChartProps {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    data: any;
    type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'boxPlot' | 'candlestick' | 'radar' | 'polarArea' | 'rangeBar';
    options?: any;
    labels?: string[];
}
declare const BarChart: ({ title, actions, data, type, labels, options }: BarChartProps) => React.JSX.Element;
export default BarChart;

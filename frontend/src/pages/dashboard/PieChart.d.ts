import React from 'react';
interface PieChartProps {
    title: string;
    data: any;
    type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'boxPlot' | 'candlestick' | 'radar' | 'polarArea' | 'rangeBar';
    options?: any;
    labels?: string[];
}
declare const PieChart: ({ title, data, type, labels, options }: PieChartProps) => React.JSX.Element;
export default PieChart;

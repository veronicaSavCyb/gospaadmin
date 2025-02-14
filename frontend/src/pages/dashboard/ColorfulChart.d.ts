import React from 'react';
interface ColorfulChartProps {
    className?: string;
    title: string;
    data: any;
    type?: 'line' | 'area' | 'bar' | 'histogram' | 'pie' | 'donut' | 'radialBar' | 'scatter' | 'bubble' | 'heatmap' | 'treemap' | 'boxPlot' | 'candlestick' | 'radar' | 'polarArea' | 'rangeBar';
    options?: any;
}
declare const ColorfulChart: ({ className, title, data, type, options }: ColorfulChartProps) => React.JSX.Element;
export default ColorfulChart;

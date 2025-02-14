import React from 'react';
interface RadioTileProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    title?: React.ReactNode;
    name?: string;
    className?: string;
    value: string;
    onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const RadioTile: (props: RadioTileProps) => React.JSX.Element;
export default RadioTile;

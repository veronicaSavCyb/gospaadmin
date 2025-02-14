import React from 'react';
interface NavToggleProps {
    expand?: boolean;
    onChange?: () => void;
}
declare const NavToggle: ({ expand, onChange }: NavToggleProps) => React.JSX.Element;
export default NavToggle;

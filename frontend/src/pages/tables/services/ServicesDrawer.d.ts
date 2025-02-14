import React from 'react';
interface Service {
    id?: number;
    name: string;
    shortDescriptor: string;
    detailedDescription: string;
    category: string;
}
interface ServicesDrawerProps {
    open: boolean;
    onClose: () => void;
    serviceToEdit?: Service | null;
}
declare const ServicesDrawer: React.FC<ServicesDrawerProps>;
export default ServicesDrawer;

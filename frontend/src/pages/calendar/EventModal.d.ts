import React from 'react';
import { ModalProps } from 'rsuite';
interface EventModalProps extends ModalProps {
    onAddEvent: (event: React.MouseEvent) => void;
}
declare const EventModal: (props: EventModalProps) => React.JSX.Element;
export default EventModal;

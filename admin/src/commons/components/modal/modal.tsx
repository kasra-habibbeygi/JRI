import { FC, ReactNode } from 'react';
import { ModalContainer } from './modal.style';

// Types
interface IModal {
    open: boolean;
    onClose: () => void;
    maxWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
}

const Modal: FC<IModal> = ({ children, open, onClose, maxWidth }) => {
    return (
        <ModalContainer open={open} onClose={onClose} fullWidth={true} maxWidth={maxWidth} scroll='body'>
            {children}
        </ModalContainer>
    );
};

export default Modal;

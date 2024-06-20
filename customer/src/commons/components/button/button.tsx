import { FC, ReactNode } from 'react';

// Assets
import { ButtonContainer } from './button.style';

// MUI
import { CircularProgress } from '@mui/material';

// Types
interface IButton {
    children: ReactNode;
    loading?: boolean;
    buttonType?: 'outline' | 'filled' | 'ghost';
    radius?: 'normal' | 'rounded';
    variant?: 'success' | 'danger' | 'accent1' | 'accent2';
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'button';
    disabled?: boolean;
}

const Button: FC<IButton> = ({
    children,
    loading = false,
    buttonType = 'filled',
    radius = 'normal',
    variant = 'success',
    onClick,
    className,
    type,
    disabled = false
}) => {
    return (
        <ButtonContainer
            className={`${buttonType} radius-${radius} ${variant}-color ${className ? className : ''}`}
            disabled={loading || disabled}
            onClick={onClick}
            type={type}
        >
            {loading ? <CircularProgress className='loader-field' /> : children}
        </ButtonContainer>
    );
};

export default Button;

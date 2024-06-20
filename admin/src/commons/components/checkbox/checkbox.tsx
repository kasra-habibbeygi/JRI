import { ChangeEvent, FC, ReactNode } from 'react';

// Assets
import { CheckboxContainer } from './checkbox.style';

// MUI
import { Checkbox as MUICheckbox } from '@mui/material';

// Types
interface ICheckbox {
    checked: boolean;
    label?: ReactNode;
    name: string;
    onChange: (status: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<ICheckbox> = ({ checked, label, name, onChange }) => {
    return (
        <CheckboxContainer haveLabel={label ? true : false}>
            <MUICheckbox id={name} name={name} checked={checked} onChange={onChange} size='small' />
            {label && <label htmlFor={name}>{label}</label>}
        </CheckboxContainer>
    );
};

export default Checkbox;

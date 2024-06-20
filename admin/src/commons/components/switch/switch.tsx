import { FC, ReactNode } from 'react';

//Assets
import { SwitchContainer } from './switch.style';

// MUI
import { Switch as MUISwitch } from '@mui/material';

// Types
interface ISwitch {
    checked: boolean;
    label?: ReactNode;
    name: string;
    onChange: (status: boolean) => void;
}

const Switch: FC<ISwitch> = ({ checked, label, name, onChange }) => {
    return (
        <SwitchContainer haveLabel={label ? true : false}>
            <MUISwitch id={name} name={name} checked={checked} onChange={(_, status) => onChange(status)} />
            {label && <label htmlFor={name}>{label}</label>}
        </SwitchContainer>
    );
};

export default Switch;

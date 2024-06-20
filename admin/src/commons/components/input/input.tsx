import { ChangeEvent, FC } from 'react';

// Assets
import { InputContainer } from './input.style';

// Types
interface IInput {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    name: string;
    type?: 'text' | 'number' | 'password' | 'tel';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

const Input: FC<IInput> = ({ type = 'text', onChange, value, label, placeholder, name, disabled = false }) => {
    return (
        <InputContainer className='input-container'>
            {label && <label htmlFor={name}>{label}</label>}
            <input type={type} placeholder={placeholder} id={name} name={name} onChange={onChange} value={value} disabled={disabled} />
        </InputContainer>
    );
};

export default Input;

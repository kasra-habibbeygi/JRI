/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, KeyboardEvent, useState } from 'react';

// Assets
import { MultiValueInputContainer } from './multi-value-input.style';
import { Cross } from 'assets/icons';
import { Plus } from '../layout/sidebar/icons';

// Types
interface IMultiValueInput {
    setState: any;
    value: string[];
    name: string;
    type?: 'text' | 'number' | 'password' | 'tel';
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

const MultiValueInput: FC<IMultiValueInput> = ({ type = 'text', setState, value, label, placeholder, name, disabled = false }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = () => {
        setState((prev: any) => ({
            ...prev,
            [name]: [...prev[name], inputValue]
        }));
        setInputValue('');
    };

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // جلوگیری از رفتار پیش‌فرض فرم
            onChangeHandler();
        }
    };

    const onRemoveHandler = (index: number) => {
        setState((prev: any) => ({
            ...prev,
            [name]: prev[name].filter((_: any, i: number) => i !== index)
        }));
    };

    return (
        <MultiValueInputContainer className='input-container'>
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                id={name}
                name={name}
                onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                disabled={disabled}
                onKeyDown={onKeyPressHandler}
            />
            <div className='add_value' onClick={onChangeHandler}>
                <Plus />
            </div>
            <div className='pill_field'>
                {value.map((item, index) => (
                    <span key={`${name}_${index}_multi_value`}>
                        {item} <Cross onClick={() => onRemoveHandler(index)} />
                    </span>
                ))}
            </div>
        </MultiValueInputContainer>
    );
};

export default MultiValueInput;

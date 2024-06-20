import { ChangeEvent, FC } from 'react';

// Assets
import { TextareaContainer } from './textarea.style';

// Types
interface ITextarea {
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    value: string | number;
    name: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
}

const Textarea: FC<ITextarea> = ({ onChange, value, label, placeholder, name, disabled = false }) => {
    return (
        <TextareaContainer className='input-container'>
            {label && <label htmlFor={name}>{label}</label>}
            <textarea placeholder={placeholder} id={name} name={name} onChange={onChange} value={value} disabled={disabled}></textarea>
        </TextareaContainer>
    );
};

export default Textarea;

/* eslint-disable @typescript-eslint/no-explicit-any */

// Assets
import { ChangeEvent, FC, useState } from 'react';

// Assets
import { UploaderContainer } from './uploader.style';

// Types
interface IUploader {
    name: string;
    setState: (updateFunction: (prev: any) => any) => void;
    placeholder: string;
}

const Uploader: FC<IUploader> = ({ name, setState, placeholder }) => {
    const [img, setImg] = useState<File | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({
            ...prev,
            [name]: e.target.files![0]
        }));
        setImg(e.target.files![0]);
    };

    return (
        <UploaderContainer className='input-container'>
            <input type='file' id={name} name={name} hidden onChange={onChangeHandler} />
            <label htmlFor={name}>{img?.name ?? placeholder}</label>
        </UploaderContainer>
    );
};

export default Uploader;

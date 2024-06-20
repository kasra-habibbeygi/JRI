/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dayjs } from 'dayjs';
import { ChangeEvent } from 'react';

class Tools {
    stringValueHandler(
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        setState: (updateFunction: (prev: any) => any) => void
    ): void {
        setState((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    numberValueHandler(e: ChangeEvent<HTMLInputElement>, setState: (updateFunction: (prev: any) => any) => void): void {
        setState((prev: any) => {
            const regex = /^-?\d*\.?\d*$/;

            if (e.target.value === '' || regex.test(e.target.value)) {
                return {
                    ...prev,
                    [e.target.name]: e.target.value
                };
            }

            return {
                ...prev,
                [e.target.name]: prev[e.target.name]
            };
        });
    }

    selectValueHandler(name: string, value: any, setState: (updateFunction: (prev: any) => any) => void): void {
        setState((prev: any) => ({
            ...prev,
            [name]: value
        }));
    }

    switchValueHandler(name: string, e: boolean, setState: (updateFunction: (prev: any) => any) => void): void {
        setState((prev: any) => ({
            ...prev,
            [name]: e
        }));
    }

    checkboxValueHandler(e: ChangeEvent<HTMLInputElement>, setState: (updateFunction: (prev: any) => any) => void): void {
        setState((prev: any) => ({
            ...prev,
            [e.target.name]: e.target.checked
        }));
    }

    dateValueHandler(data: Dayjs, name: string, setState: (updateFunction: (prev: any) => any) => void): void {
        setState((prev: any) => ({
            ...prev,
            [name]: data.toDate().getTime()
        }));
    }
}

export default new Tools();

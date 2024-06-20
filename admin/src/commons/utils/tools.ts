/* eslint-disable @typescript-eslint/no-explicit-any */
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

    tableRowCounter(page: number, index: number) {
        return 25 * +page - (25 - 1) + index;
    }

    timeFormatter(date: string, type: 'dateAndHour' | 'date' = 'date') {
        if (type === 'date') {
            return new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric'
            });
        }

        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    }
}

export default new Tools();

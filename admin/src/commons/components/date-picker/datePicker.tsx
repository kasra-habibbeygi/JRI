import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import moment from 'moment';

// Assets
import { DatePickerContainer } from './datePicker.style';

// MUI
import { DatePicker as MUIDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// Hooks
import { useOutsideClick } from 'commons/hooks';

interface IDatePicker {
    value: number | null;
    name: string;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    onChange: (data: Dayjs, name: string) => void;
}

const DatePicker: FC<IDatePicker> = ({ value, onChange, name, className, placeholder, disabled = false }) => {
    const [dropDownState, setDropDownState] = useOutsideClick();

    return (
        <DatePickerContainer className={className ?? className} disabled={disabled}>
            <label onClick={() => setDropDownState(!dropDownState)}>{value ? moment(value).format('MM/DD/YYYY') : placeholder}</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <MUIDatePicker
                        open={dropDownState}
                        value={dayjs(value)}
                        onChange={newValue => {
                            setDropDownState(false);
                            if (newValue) {
                                onChange(newValue, name);
                            }
                        }}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </DatePickerContainer>
    );
};

export default DatePicker;

import React from 'react';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from 'dayjs';

const CommonDatePicker = ({label, handleDateChange, value}) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                <DatePicker
                    label={label}
                    value={dayjs(value)}
                    onChange={handleDateChange}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default CommonDatePicker;
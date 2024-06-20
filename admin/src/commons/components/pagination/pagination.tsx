import { FC } from 'react';

// Assets
import { PaginationContainer } from './pagination.styled';

// MUI
import { Pagination as MUIPagination } from '@mui/material';

// Types
interface IPagination {
    current: number;
    total: number;
    onChange: (current: number) => void;
}

const Pagination: FC<IPagination> = ({ current, total, onChange }) => {
    return (
        <PaginationContainer>
            <MUIPagination
                count={total}
                page={current}
                variant='outlined'
                shape='rounded'
                size='small'
                onChange={(_, selectedPage) => onChange(selectedPage)}
            />
        </PaginationContainer>
    );
};

export default Pagination;

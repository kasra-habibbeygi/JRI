import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PaginationContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        width: 100%;

        * {
            font-family: 'Product Sans';
        }

        button {
            font-weight: 500;
            color: ${theme.colors.text.primary};
            border: 1px solid ${theme.colors.background.tertiary};
        }

        .Mui-selected {
            background-color: transparent;
            border: 1px solid ${theme.colors.background.accent};
            color: ${theme.colors.text.accent};
        }

        .MuiPaginationItem-ellipsis {
            color: ${theme.colors.text.primary};
        }
    `
);

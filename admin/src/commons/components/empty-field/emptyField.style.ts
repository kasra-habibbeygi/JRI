import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EmptyFieldContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 20px;

        svg {
            width: 100px;
            color: ${theme.colors.text.secondary};
        }

        p {
            font-size: 16px;
            color: ${theme.colors.text.secondary};
            font-weight: 500;
        }
    `
);

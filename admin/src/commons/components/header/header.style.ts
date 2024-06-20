import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${theme.colors.text.primary};
        text-transform: capitalize;

        h3 {
            font-size: 20px;
            font-weight: bold;
        }

        @media (max-width: 500px) {
            h3 {
                font-size: 16px;
            }
        }
    `
);

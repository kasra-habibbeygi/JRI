import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RecoveryPasswordContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 30px;

        small {
            margin-bottom: 10px;
            font-size: 14px;
            color: ${theme.colors.text.secondary};
        }

        @media (max-width: 550px) {
            padding: 16px;
        }
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RegisterContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        padding: 30px;

        .form-group {
            display: flex;
            margin-bottom: 20px;
            gap: 10px;
            width: 100%;
        }

        .active {
            background-color: transparent !important;
            border: 1px solid ${theme.shared.success};
            color: ${theme.shared.success} !important;
        }

        .inactive {
            background-color: transparent !important;
            border: 1px solid ${theme.colors.background.tertiary};
            color: ${theme.colors.text.secondary} !important;
        }

        @media (max-width: 550px) {
            padding: 16px;
            .form-group {
                margin-bottom: 10px;
            }
        }
    `
);

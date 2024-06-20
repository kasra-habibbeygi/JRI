import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LoginContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        padding: 30px;

        .forgot-pass {
            width: 100%;
            margin-bottom: 20px;
            margin-top: -14px;
            margin-left: 10px;
            display: inline-block;
            color: ${theme.colors.text.accent};
            font-size: 14px;
        }

        @media (max-width: 550px) {
            padding: 16px;

            .forgot-pass {
                margin-top: 0px;
            }
        }
    `
);

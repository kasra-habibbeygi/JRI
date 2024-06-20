import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AuthenticateContainer = styled.div(
    ({ theme }) => css`
        .main-content {
            min-width: 500px;
            width: 800px;
            border-radius: 20px;
            background-color: ${theme.colors.background.secondary};
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
            display: flex;
            height: auto;
            min-height: fit-content;
            max-width: max-content;
            gap: 20px;
            align-items: center;
            justify-content: center;
            padding: 30px;
        }

        .form-content {
            padding: 30px;
            border-radius: 0px 20px 20px 0px;
            max-width: 500px;
            min-width: 350px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            flex: 2;
        }

        p {
            margin-bottom: 20px;
            color: ${theme.colors.text.secondary};
        }

        a {
            color: ${theme.colors.text.accent};
        }

        .auth-with-google {
            margin-bottom: 20px;

            svg {
                width: 20px;
                height: 20px;
                margin-right: 10px;
            }
        }

        .input-container {
            margin-bottom: 20px;
        }

        button {
            width: 100%;
            border-radius: 50px !important;
            height: 40px;
        }

        h1 {
            color: ${theme.colors.text.primary};
            width: 100%;
            text-align: center;
            font-size: 28px;
            margin-bottom: 20px;
        }

        @media (max-width: 800px) {
            height: auto;

            .main-content {
                flex-direction: column;
                width: 100%;
                min-width: auto;
            }
        }

        @media (max-width: 550px) {
            .main-content {
                padding: 16px;
            }

            h1 {
                font-size: 1.2rem;
            }

            p {
                font-size: 14px;
                margin-bottom: 10px;
            }

            h1,
            .input-container {
                margin-bottom: 10px;
            }

            .form-content {
                padding: 0px;
                width: 100%;
                min-width: auto;
            }
        }

        .auth-with-google {
            margin-bottom: 10px;
        }
    `
);

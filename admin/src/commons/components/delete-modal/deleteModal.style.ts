import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DeleteModalContainer = styled.header(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 14px;

        svg {
            width: 80px;
            margin: auto;
            margin-bottom: 20px;
        }

        h3 {
            text-align: center;
            font-weight: 400;
            margin-bottom: 10px;
            color: ${theme.colors.text.primary};
        }

        .button-field {
            display: flex;
            align-items: center;
            gap: 8px;
            width: 80%;
            margin: auto;

            button {
                width: 100%;
                height: 35px;
                font-size: 14px;
            }
        }

        @media (max-width: 700px) {
            .button-field {
                width: 90%;
            }

            svg {
                margin-bottom: 10px;
            }
        }
    `
);

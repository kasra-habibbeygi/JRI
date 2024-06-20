import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div(
    ({ theme }) => css`
        .main-container {
            margin-top: 20px;

            h3 {
                margin-bottom: 20px;
                color: ${theme.colors.text.primary};
                font-size: 18px;
            }

            button {
                margin-left: auto;
                margin-top: 20px;
            }

            .content {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                align-items: center;
                gap: 20px;
                flex-wrap: wrap;
            }

            .input-container {
                flex: 1 0 40%;
            }

            small {
                color: ${theme.colors.text.secondary};
            }
        }

        .delete-account {
            margin-top: 20px;
            margin-left: auto;
        }

        @media (max-width: 700px) {
            .content {
                grid-template-columns: repeat(1, 1fr) !important;
            }
        }
    `
);

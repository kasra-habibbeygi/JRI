import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AddTestContainer = styled.div(
    ({ theme }) => css`
        .container {
            margin-top: 20px;
        }

        .test {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;
            margin-top: 20px;

            a {
                color: #608aee !important;
                border: 1px solid #608aee;
                background-color: transparent;
                border-radius: 4px;
                min-width: 170px;
                padding: 8px 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;

                svg {
                    width: 30px;
                }
            }
        }

        h3 {
            color: ${theme.colors.text.primary};
        }

        .new-room {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h3 {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            svg {
                width: 60px;
                height: 60px;
                color: ${theme.colors.text.primary};
            }

            .progress {
                width: 30px;
            }
        }

        @media (max-width: 500px) {
            flex-direction: column;
            gap: 20px;

            h3 {
                font-size: 16px;
            }

            .new-room {
                flex-direction: column;
            }

            .room-item {
                display: flex;
                flex-direction: column;
                align-items: center;

                .test {
                    justify-content: center;
                }
            }
        }
    `
);

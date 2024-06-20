import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TestListContainer = styled.div(
    ({ theme }) => css`
        table {
            .name {
                display: flex;
                gap: 10px;
                align-items: center;

                p {
                    display: flex;
                    flex-direction: column;
                }
                svg {
                    width: 20px;
                    height: 20px;
                }

                span {
                    font-weight: 500;
                }

                small {
                    font-size: 13px;
                }
            }

            .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 4px;
                margin-top: 10px;
                span {
                    font-size: 13px;
                }
            }

            .location {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 6px;
            }

            .test-types {
                color: ${theme.colors.text.secondary};
            }

            button {
                padding: 2px;
                min-width: max-content;

                svg {
                    width: 18px;
                }
            }
        }

        @media (max-width: 500px) {
        }
    `
);

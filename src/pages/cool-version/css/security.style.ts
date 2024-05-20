import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SecurityContainer = styled.section(
    ({ theme }) => css`
        display: flex;
        gap: 100px;

        .left-side {
            min-width: max-content;

            h3 {
                color: ${theme.colors.text.accent1};
                font-size: 36px;
            }

            small {
                font-size: 20px;
                font-weight: 500;
            }
        }

        .right-side {
            p {
                font-size: 16px;
                line-height: 28px;
            }

            b {
                margin-top: 32px;
                margin-bottom: 20px;
                display: block;
                font-size: 20px;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 12px;
                font-size: 20px;

                .accent-1 {
                    color: ${theme.colors.text.accent2};
                }
            }
        }

        @media (max-width: 992px) {
            flex-direction: column;
        }

        @media (max-width: 760px) {
            gap: 50px;

            .left-side {
                min-width: unset;

                h3 {
                    font-size: 20px;
                    margin-bottom: 20px;
                }

                small {
                    font-size: 16px;
                }
            }
        }
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WhiteListContainer = styled.section(
    ({ theme }) => css`
        .last-update {
            font-size: 16px;
        }

        table {
            width: 100%;

            thead {
                tr {
                    background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);

                    th {
                        padding: 12px 16px;
                        font-size: 16px;
                        color: white;
                        font-weight: 300;
                    }
                }
            }

            tbody {
                td {
                    padding: 20px 16px;
                }
            }

            .title {
                color: ${theme.colors.text.accent2};
                font-size: 36px;
                font-weight: 500;
            }
        }

        .pill_field {
            div {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: 400;
                width: 150px;
                height: 28px;
                border-radius: 50px;

                &.black-outline {
                    color: black;
                    border: 2px solid #0f0f0f;
                }

                &.black-filled {
                    color: white;
                    background-color: #0f0f0f;
                }

                &.gold {
                    color: #b99c02;
                    background-color: #fff9da;
                    border: 2px solid #b99c02;
                }

                &.silver {
                    color: #8d8c8c;
                    background-color: #f5f5f5;
                    border: 2px solid #8d8c8c;
                }
            }
        }

        .progress {
            height: 25px;
            position: relative;
            border: 1px solid ${theme.colors.text.accent1};

            &::before {
                background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
                content: '';
                position: absolute;
                width: calc(100% + 1px);
                height: 106%;
                top: -1px;
                left: 0;
                z-index: -1;
            }

            td {
                padding: 0;
                color: white;
            }

            &.p-10 {
                td {
                    color: ${theme.colors.text.accent1};
                }

                &::before {
                    width: 10%;
                }
            }

            &.p-0 {
                &::before {
                    width: 0%;
                }
            }
        }
    `
);

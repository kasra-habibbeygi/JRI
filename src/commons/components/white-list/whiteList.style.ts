import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WhiteListContainer = styled.section(
    ({ theme }) => css`
        .last-update {
            font-size: 16px;
        }

        .table-field {
            width: 100%;
            overflow-x: auto;
            overflow-y: hidden;
        }

        .table {
            width: 100%;

            .thead {
                .tr {
                    display: flex;
                    align-items: center;
                    background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);

                    .th {
                        padding: 12px 16px;
                        font-size: 16px;
                        color: white;
                        font-weight: 300;
                        flex-grow: 1;
                        width: 100%;
                        text-align: center;
                    }
                }
            }

            .tbody {
                .tr {
                    display: flex;
                    align-items: center;
                }

                .td {
                    padding: 20px 16px;
                    flex-grow: 1;
                    text-align: center;
                    width: 100%;
                }
            }

            .title {
                color: ${theme.colors.text.accent2};
                font-size: 36px;
                font-weight: 500;
                max-width: 200px;
                min-width: 200px;
            }
        }

        .roles {
            max-width: 220px;
            min-width: 220px;
        }

        .u-item {
            max-width: 333px;
            min-width: 333px;
        }

        .pill-field {
            padding: 0 16px;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

            span {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                font-weight: 400;
                width: 170px;
                height: 28px;
                border-radius: 50px;
                margin: auto;

                &.black-outline {
                    color: black;
                    border: 2px solid #0f0f0f;
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

                &.bronze {
                    color: #b18456;
                    background-color: #f9e0c7;
                    border: 2px solid #b18456;
                }
            }
        }

        @media (max-width: 1200px) {
            .table {
                min-width: 1200px;

                .title {
                    font-size: 20px;
                }
            }
        }

        @media (max-width: 760px) {
            .last-update {
                font-size: 12px;
            }

            .table {
                min-width: 1200px;

                .thead {
                    .tr {
                        .th {
                            padding: 14px 16px;
                            font-size: 12px;
                        }
                    }
                }

                .tbody {
                    .td {
                        padding: 26px 20px;
                        font-size: 16px;
                    }
                }

                .title {
                    font-size: 20px;
                }
            }
        }
    `
);

export const ProgressBar = styled.div<{ percent: number }>(
    ({ theme, percent }) => css`
        height: 25px;
        position: relative;
        border: 1px solid ${theme.colors.text.accent1};
        display: flex;
        align-items: center;

        .progress-line {
            background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
            content: '';
            position: absolute;
            width: ${percent === 0 ? '0' : `calc(${percent}% + 6px)`};
            height: 110%;
            top: -1px;
            left: -5px;
            z-index: 1;
        }

        .td {
            padding: 0 !important;
            position: relative;
            z-index: 2;
            color: ${percent <= 87 ? theme.colors.text.accent1 : 'white'};
        }
    `
);

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
            padding-bottom: 20px;
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
                    border-bottom: 1px solid black;
                }

                .last-one {
                    border: none;
                }

                .td {
                    padding: 30px 16px;
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
                text-align: left !important;
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
        height: 27px;
        position: relative;
        display: flex;
        align-items: center;

        .contents {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            color: white;
            mix-blend-mode: difference;
            border: 1px solid ${theme.colors.text.accent1};
        }

        .progress-container {
            width: 100%;
        }

        .contents,
        .bar {
            height: 25px;
        }

        .backdrop {
            position: relative;
            background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
        }

        .source {
            mix-blend-mode: screen;
        }

        .barBg {
            background-color: white;
        }

        .bar {
            background-color: black;
            width: ${percent === 0 ? '0' : `calc(${percent}% + 6px)`};
        }
    `
);

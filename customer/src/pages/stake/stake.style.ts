import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StakeContainer = styled.div(
    ({ theme }) => css`
        margin-top: 80px;

        header {
            margin-bottom: 80px;

            h1 {
                color: ${theme.colors.text.accent1};
                font-size: 36px;
                font-weight: bold;
            }

            p {
                color: black;
                font-size: 20px;
                font-weight: bold;
            }
        }

        .card-section {
            .content {
                display: flex;
                gap: 20px;
                border-bottom: 1px solid #0f0f0f;
                padding-bottom: 80px;
                margin-bottom: 120px;
            }

            .token {
                margin-bottom: 20px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 4px;
                flex-wrap: wrap;

                a {
                    color: ${theme.colors.text.accent1};
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    word-wrap: break-word !important;
                    word-break: break-word !important;

                    svg {
                        width: 32px;
                        position: relative;
                        top: -2px;
                    }
                }
            }

            .card {
                padding: 24px 0;
                background-color: #f0f2f5;
                height: 190px;
                width: 100%;
                flex-grow: 1;

                .arrow {
                    width: 20px;
                    transform: rotate(-45deg);
                    color: ${theme.colors.text.accent1};
                }

                p {
                    text-align: center;
                    width: 100%;
                    color: ${theme.colors.text.accent1};
                    text-decoration: underline;
                }

                b {
                    text-align: center;
                    display: block;
                    width: 100%;
                    margin-bottom: 48px;
                }
            }

            .item {
                width: 100%;
                flex-grow: 1;

                input {
                    margin-top: 36px;
                    margin-bottom: 24px;
                    margin-bottom: 24px;
                    border: 1px solid #bababa;
                    padding: 16px 24px;
                    height: 52px;
                    width: 100%;
                    font-size: 20px;
                }

                button {
                    width: 240px;
                    background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                    color: white !important;
                    font-size: 20px;
                    font-weight: 300;
                    width: 240px;
                    height: 48px;

                    &:hover {
                        background: transparent;
                        color: ${theme.colors.background.accent2} !important;
                        border: 1px solid ${theme.colors.background.accent2};
                        box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                    }
                }
            }
        }

        .chart-section {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            h3 {
                background: -webkit-linear-gradient(0deg, #8a63d2 45%, #052dff 63%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 45px;
                text-align: center;
            }

            p {
                text-align: center;
                font-size: 20px;
                margin-bottom: 70px;
            }

            .chart-helper {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: center;
                gap: 30px;
                margin-bottom: 212px;
                margin-top: 50px;

                div {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                span {
                    display: flex;
                    width: 20px;
                    height: 20px;
                    border-radius: 50px;
                }

                p {
                    color: black;
                    font-size: 18px;
                    margin: 0;
                }

                .dark-blue {
                    background-color: #020057;
                }

                .blue {
                    background-color: #055ada;
                }

                .light-purple {
                    background-color: #5055d5;
                }

                .purple {
                    background-color: #8a63d2;
                }
            }
        }

        @media (max-width: 992px) {
            .card-section {
                .content {
                    flex-wrap: wrap;
                }

                .card,
                .item {
                    flex: 1 0 45%;
                }
            }
        }

        @media (max-width: 600px) {
            margin-top: 60px;

            header {
                margin-bottom: 48px;

                h1 {
                    font-size: 20px;
                }

                p {
                    font-size: 16px;
                }
            }

            .card-section {
                .content {
                    padding-bottom: 60px;
                    margin-bottom: 80px;

                    .card {
                        flex: 1 0 100%;
                    }

                    .item {
                        flex: 1 0 100%;
                    }
                }
            }

            .chart-section {
                h3 {
                    font-size: 20px;
                    margin-bottom: 24px;
                }

                p {
                    font-size: 16px;
                    margin-bottom: 40px;
                }

                .chart-helper {
                    justify-content: flex-start;
                    gap: 12px;
                    margin-bottom: 80px;

                    span {
                        width: 12px;
                        height: 12px;
                    }

                    p {
                        font-size: 12px;
                    }
                }

                img {
                    width: 100%;
                }
            }
        }
    `
);

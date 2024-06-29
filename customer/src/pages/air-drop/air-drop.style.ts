import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AirDropContainer = styled.section(
    ({ theme }) => css`
        margin-top: 120px;
        margin-bottom: 120px;

        h1 {
            color: ${theme.colors.text.accent1};
            font-size: 72px;
            text-align: center;
            font-weight: 400;
            line-height: 80px;
        }

        h2 {
            color: ${theme.colors.text.accent2};
            font-size: 36px;
            text-align: center;
            margin: 20px 0;
        }

        p {
            text-align: center;
            font-size: 20px;
        }

        .button-group {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 32px;
            margin-bottom: 120px;

            .ghost {
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                font-size: 20px;
                width: 220px;
                height: 48px;
                color: ${theme.colors.text.accent2} !important;
                border: 1px solid ${theme.colors.text.accent2};

                &:hover {
                    background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                    color: white !important;
                    box-shadow: none;
                    border: none;
                }
            }

            .gradient {
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
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

        .table {
            header {
                width: 100%;
                background-color: #f0f2f5;
                padding: 12px 24px;
                display: flex;
                align-items: center;

                span {
                    font-size: 20px;
                    background-color: #f0f2f5;

                    &:first-of-type {
                        width: 80%;
                    }

                    &:last-of-type {
                        text-align: center;
                        width: 20%;
                    }
                }
            }

            ul {
                list-style: none;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 6px;
                margin-top: 6px;
            }

            li {
                width: 100%;
                padding: 12px 24px;
                font-size: 16px;
                background-color: #f0f2f5;
                display: flex;
                align-items: center;

                span {
                    &:first-child {
                        width: 80%;
                    }

                    &:last-of-type {
                        text-align: center;
                        width: 20%;
                    }
                }
            }
        }

        @media (max-width: 768px) {
            margin-top: 60px;
            margin-bottom: 80px;

            h1 {
                font-size: 40px;
                line-height: 46px;
            }

            .table {
                header {
                    padding: 12px 24px;

                    span {
                        font-size: 16px;
                    }
                }

                li {
                    font-size: 12px;
                }
            }
        }

        @media (max-width: 768px) {
            h1 {
                font-size: 28px;
                line-height: 40px;
            }

            h2 {
                font-size: 24px;
            }

            p {
                font-size: 18px;
            }

            .button-group {
                flex-direction: column;
                gap: 20px;
                margin-bottom: 60px;

                .ghost {
                    width: 100%;
                    font-size: 18px;
                }

                .gradient {
                    width: 100%;
                    font-size: 18px;
                }
            }
        }
    `
);

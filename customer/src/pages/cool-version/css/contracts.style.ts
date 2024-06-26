import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ContractsContainer = styled.section(
    ({ theme }) => css`
        margin-top: 120px;
        margin-bottom: 120px;
        padding-bottom: 80px;
        border-bottom: 1px solid #0f0f0f;

        header {
            margin-bottom: 64px;
            text-align: center;

            h3 {
                font-size: 72px;
                color: ${theme.colors.text.accent1};
            }

            h4 {
                font-size: 36px;
                color: ${theme.colors.text.accent2};
                margin-bottom: 24px;
            }

            p {
                font-size: 20px;
                line-height: 30px;
            }
        }

        ol {
            list-style: none;
            display: grid;
            grid-template-columns: auto auto auto auto;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;

            li {
                border: 2px solid black;
                width: 318px;
                display: block;
                padding: 24px 12px;
                text-align: center;
                position: relative;

                b {
                    display: block;
                    font-size: 20px;
                    margin-bottom: 32px;
                }

                small {
                    font-size: 16px;
                    line-height: 16px;
                }
            }
        }

        .black-one {
            background-color: #0f0f0f;
            color: white;
        }

        .gold-one {
            background-color: #fff9da;
            color: #b99c02;
            border-color: #b99c02;
        }

        .ghost-one {
            background-color: #f5f5f5;
            color: #8d8c8c;
            border-color: #8d8c8c;
        }

        .bronze-one {
            background-color: #f9e0c7;
            color: #b18456;
            border-color: #b18456;
        }

        svg {
            position: absolute;
            top: -30px;
            left: -32px;
            width: 60px;
            height: auto;
        }

        @media (max-width: 1400px) {
            ol {
                grid-template-columns: auto auto;
            }
        }

        @media (max-width: 992px) {
            ol {
                grid-template-columns: auto auto;
            }
        }

        @media (max-width: 760px) {
            margin-bottom: 80px;
            padding-bottom: 60px;
            margin-top: unset;

            header {
                margin-bottom: 48px;
                text-align: center;

                h3 {
                    font-size: 36px;
                    margin-bottom: 20px;
                }

                h4 {
                    font-size: 20px;
                    color: ${theme.colors.text.accent2};
                    margin-bottom: 20px;
                }

                p {
                    font-size: 16px;
                    line-height: 20px;
                }
            }

            ol {
                grid-template-columns: auto;

                li {
                    width: 100%;

                    b {
                        display: block;
                        font-size: 16px;
                        margin-bottom: 24px;
                    }

                    small {
                        font-size: 12px;
                        line-height: 18px;
                        display: flex;
                    }
                }
            }

            svg {
                top: -20px;
                left: -20px;
                width: 40px;
            }
        }
    `
);

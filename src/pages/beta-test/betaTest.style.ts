import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BetaTestContainer = styled.div(
    ({ theme }) => css`
        margin-top: 80px;
        margin-bottom: 140px;

        h1 {
            background: -webkit-linear-gradient(0deg, #8a63d2 50%, #052dff);
            background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 24px;
            width: max-content;
        }

        h2 {
            margin-top: 64px;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 24px;
            width: max-content;
            position: relative;

            svg {
                position: absolute;
                width: 25px;
                height: 25px;
                right: -30px;
                top: -16px;
            }
        }

        header {
            p {
                font-size: 20px;
                line-height: 30px;
            }
        }

        .content-section {
            display: flex;
            align-items: flex-start;
            gap: 60px;
            margin-top: 80px;
        }

        aside {
            background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
            padding: 32px;
            color: white;
            font-size: 20px;
            min-width: 340px;
            display: flex;
            flex-direction: column;
            gap: 12px;

            p {
                font-size: 20px;
                line-height: 18px;
                font-weight: 500;
            }

            small {
                font-weight: 300;
                font-size: 16px;
            }
        }

        form {
            width: 100%;

            .form-group {
                display: flex;
                flex-direction: column;
                gap: 14px;
                width: 100%;
                margin-bottom: 32px;
                position: relative;

                label {
                    font-size: 20px;
                    width: max-content;
                    display: block;
                    font-weight: 700;

                    span {
                        color: ${theme.colors.text.accent2};
                        font-size: 18px;
                    }
                }

                input {
                    padding: 0 32px;
                    height: 84px;
                    width: 100%;
                    border-radius: 0;
                    border: 1px solid #0f0f0f;
                    font-size: 20px;
                    color: #0f0f0f;
                }

                .error {
                    border-color: #ec5953;
                    color: #ec5953;
                }

                .length-counter {
                    width: 100%;
                    text-align: right;
                }

                textarea {
                    height: 240px;
                    padding: 32px;
                    width: 100%;
                    border-radius: 0;
                    border: 1px solid #0f0f0f;
                    font-size: 20px;
                    color: #0f0f0f;
                    resize: none;
                }
            }

            button {
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
                width: 240px;
                height: 48px;
                margin-bottom: 121px;
                border-radius: 500px !important;
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;

                &:hover {
                    background: transparent;
                    color: ${theme.colors.background.accent2} !important;
                    border: 1px solid ${theme.colors.background.accent2};
                }
            }
        }

        @media (max-width: 760px) {
            margin-top: 60px;
            margin-bottom: 80px;

            h1 {
                font-size: 20px;
                margin-bottom: 20px;
                line-height: 20px;
            }

            h2 {
                margin-top: 60px;
                font-size: 20px;
                margin-bottom: 20px;
                line-height: 20px;
            }

            header {
                p {
                    font-size: 16px;
                    line-height: 20px;
                }
            }

            .content-section {
                display: flex;
                flex-direction: column;
                gap: 100px;
                margin-top: 48px;
            }

            form {
                .form-group {
                    gap: 12px;

                    label {
                        font-size: 16px;

                        span {
                            font-size: 14px;
                        }
                    }

                    input {
                        padding: 0 20px;
                        height: 60px;
                        font-size: 16px;
                    }

                    .error {
                        border-color: #ec5953;
                        color: #ec5953;
                    }

                    .length-counter {
                        width: 100%;
                        text-align: right;
                    }

                    textarea {
                        height: 240px;
                        padding: 20px;
                        font-size: 16px;
                    }
                }

                button {
                    font-size: 16px;
                    height: 40px;
                    margin-bottom: unset;
                }
            }
        }
    `
);

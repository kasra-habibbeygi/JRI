import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const mirror = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const BetaTestContainer = styled.div(
    ({ theme }) => css`
        margin-top: 80px;
        margin-bottom: 120px;
        position: relative;

        h1 {
            background: -webkit-linear-gradient(0deg, #8a63d2 50%, #052dff);
            background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        .star {
            animation: ${mirror} 5s linear infinite;
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
            gap: 60px;
            margin-top: 80px;
        }

        aside {
            & > div {
                position: sticky;
                top: 80px;
            }

            .content {
                background: #f0f2f5;
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
                    color: black;
                    text-align: center;
                }

                small {
                    font-weight: 300;
                    font-size: 16px;
                    color: #052dff;
                    text-align: center;
                    margin-bottom: 76px;
                    margin-top: 56px;
                    font-weight: 500;
                    text-decoration: underline;

                    svg {
                        width: 20px;
                        transform: rotate(90deg);
                    }
                }
            }

            input {
                width: 100%;
                height: 46px;
                color: black;
                font-size: 16px;
                background-color: white;
                border: 2px solid #f0f2f5;
                padding-left: 20px;
                margin-top: 52px;
            }

            button {
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
                width: 240px;
                height: 48px;
                border-radius: 500px !important;
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                margin-top: 24px;

                &:hover {
                    background: transparent;
                    color: ${theme.colors.background.accent2} !important;
                    border: 1px solid ${theme.colors.background.accent2};
                }
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
                        font-weight: 300;
                    }
                }

                input {
                    padding: 0 32px;
                    height: 52px;
                    width: 100%;
                    border-radius: 0;
                    border: 1px solid #bababa;
                    font-size: 20px;
                    color: #0f0f0f;

                    &:focus {
                        border: 1px solid ${theme.colors.text.accent2};
                    }
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
                    border: 1px solid #bababa;
                    font-size: 20px;
                    color: #0f0f0f;
                    resize: none;

                    &:focus {
                        border: 1px solid ${theme.colors.text.accent2};
                    }
                }
            }

            button {
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
                width: 240px;
                height: 48px;
                border-radius: 500px !important;
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;

                &:hover {
                    background: transparent;
                    color: ${theme.colors.background.accent2} !important;
                    border: 1px solid ${theme.colors.background.accent2};
                }
            }
        }

        .final-result {
            margin-top: 10px;
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
                    width: 100%;
                }
            }

            aside {
                div {
                    min-width: unset;
                }

                button {
                    font-size: 16px;
                    height: 40px;
                    margin-bottom: unset;
                    width: 100%;
                }
            }
        }
    `
);

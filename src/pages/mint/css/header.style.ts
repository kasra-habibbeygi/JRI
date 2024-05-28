import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const HeaderContainer = styled.section(
    ({ theme }) => css`
        display: flex;
        gap: 70px;
        margin-top: 80px;
        margin-bottom: 120px;
        padding-bottom: 80px;
        border-bottom: 1px solid black;

        .left-field {
            min-width: 500px;

            h3 {
                font-size: 20px;
                margin-bottom: 16px;
            }

            .table-field {
                width: 100%;

                header {
                    width: 100%;
                    background-color: #f0f2f5;
                    padding: 12px 24px;
                    display: flex;
                    align-items: center;

                    span {
                        font-size: 20px;
                        background-color: #f0f2f5;

                        &:first-child {
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
        }

        .right-field {
            width: 100%;

            h3 {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 5px;
                font-size: 36px;
                margin-bottom: 24px;

                span {
                    &:nth-child(1) {
                        color: ${theme.colors.text.accent1};
                    }
                    &:nth-child(2) {
                        color: #bababa;
                    }
                    &:nth-child(3) {
                        color: ${theme.colors.text.accent2};
                    }
                }
            }

            .sub-title {
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 48px;
            }

            .content {
                position: relative;
                height: 200px;
                width: 100%;
                background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);

                .animated-text {
                    position: absolute;
                    top: -34px;
                    right: -34px;
                    width: 71px;
                    height: 71px;
                    animation: ${rotate} 15s linear infinite;
                }
            }

            .min-button {
                margin: auto;
                margin-top: 48px;
                font-size: 20px;
                width: 240px;
                height: 48px;
                color: #bababa !important;
                border: 2px solid #bababa;
                box-shadow: #bababa 0px 0px 13px 0px;
            }
        }

        @media (max-width: 1200px) {
            gap: 50px;

            .left-field {
                min-width: 350px;
            }
        }

        @media (max-width: 992px) {
            flex-direction: column-reverse;
        }

        @media (max-width: 760px) {
            margin-top: 60px;
            margin-bottom: 80px;
            padding-bottom: 60px;

            .right-field {
                h3 {
                    font-size: 20px;
                    margin-bottom: 20px;
                }

                .sub-title {
                    font-size: 16px;
                    line-height: 20px;
                    margin-bottom: 40px;
                }

                .content {
                    .animated-text {
                        top: -34px;
                        right: 6px;
                    }
                }

                .min-button {
                    margin-top: 36px;
                    font-size: 16px;
                    width: 200px;
                    height: 40px;
                }
            }

            .left-field {
                min-width: 100%;

                h3 {
                    font-size: 16px;
                    margin-bottom: 20px;
                }

                .table-field {
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
        }
    `
);
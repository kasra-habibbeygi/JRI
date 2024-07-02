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

export const HeaderContainer = styled.section<{ addressResult: boolean }>(
    ({ theme, addressResult }) => css`
        display: flex;
        gap: 70px;
        margin-top: 80px;
        margin-bottom: 120px;
        padding-bottom: 80px;
        border-bottom: 1px solid black;

        .main-noise-field {
            width: 100%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .not-found-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            height: 300px;

            svg {
                width: 60px;
                height: auto;
                opacity: 0.1;
                color: black;
            }

            p {
                color: darkgrey;
                font-size: 16px;
            }
        }

        .search-field {
            position: relative;
            display: flex;
            align-items: center;

            input {
                width: 100%;
                height: 46px;
                color: black;
                font-size: 16px;
                background-color: white;
                border: 2px solid #f0f2f5;
                padding-left: 52px;
            }

            svg {
                width: 24px;
                height: auto;
                color: #bababa;
                position: absolute;
                left: 16px;
            }
        }

        .mask-img {
            width: 50%;
            height: auto;
            position: absolute;
            opacity: 0.2;
        }

        .main-noise-field {
            display: flex;
            position: relative;
            align-items: center;
        }

        #c {
            width: 100%;
            height: 100%;
            opacity: 0.6;
        }

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
                        &:first-of-type {
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
                gap: 10px;
                font-size: 36px;
                margin-bottom: 24px;

                span {
                    &:nth-child(1) {
                        color: ${theme.colors.text.accent1};
                    }
                    &:nth-child(2) {
                        color: #00d100;
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
                background: ${addressResult ? '#F0F2F5' : 'linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%)'};

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
                width: max-content;

                button {
                    margin-top: 48px;
                    font-size: 20px;
                    width: max-content;
                    height: 48px;
                    color: #fff !important;
                    border: 2px solid #fff;
                    box-shadow: #fff 0px 0px 13px 0px;
                    background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                    color: white !important;
                    font-size: 20px;
                    height: 48px;
                    margin-bottom: 121px;

                    &:hover {
                        background: transparent;
                        color: #fff !important;
                        border: 1px solid ${theme.colors.background.accent2};
                        box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                    }
                }
            }
        }

        .search-result-field {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 64px;
            font-size: 20px;

            b {
                color: ${theme.colors.text.accent2};
            }
        }

        .address-search-field {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 26px;
            margin-bottom: 48px;

            input {
                width: 100%;
                height: 46px;
                color: black;
                font-size: 20px;
                background-color: white;
                border: 2px solid #f0f2f5;
                padding-left: 32px;

                &::placeholder {
                    color: #bababa;
                }
            }

            button {
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
                min-width: 240px;
                height: 48px;
                border-radius: 500px;

                &:hover {
                    background: transparent;
                    color: ${theme.colors.background.accent2} !important;
                    border: 1px solid ${theme.colors.background.accent2};
                    box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                }
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
            gap: 150px;

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

            .address-search-field {
                flex-direction: column;
            }

            .min-button {
                margin-top: 8px !important;
            }

            .search-result-field {
                padding: 0 20px;
            }
        }
    `
);

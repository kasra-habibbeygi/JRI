import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WelcomeBoardContainer = styled.div(
    ({ theme }) => css`
        width: 300px;
        background-color: ${theme.colors.background.accent};
        height: auto;
        border-radius: 20px;
        padding: 20px;

        .logo {
            color: ${theme.colors.text.darkWhite};
            font-size: 1.5rem;
            text-align: center;
        }

        p {
            font-weight: 300;
            color: ${theme.colors.text.darkWhite} !important;
            text-align: center;
            line-height: 24px;
        }

        h2 {
            font-size: 1.5rem;
            color: ${theme.colors.text.darkWhite};
            text-align: center;
            margin-bottom: 20px;
        }

        .attributes {
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .swiper {
            width: 100%;
            height: auto;
            border-radius: 20px;
        }

        .swiper-slide {
            display: flex;
            flex-direction: column;
            font-size: 22px;
            font-weight: bold;
            color: #fff;
            border-radius: 20px;
            padding: 20px;
            background-color: ${theme.colors.background.secondary};

            p {
                font-size: 14px;
                font-weight: 300;
                text-align: left;
                color: ${theme.colors.text.secondary} !important;
            }

            .user {
                display: flex;
                align-items: center;
                gap: 10px;

                img {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .user-name {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 1px;
                    color: ${theme.colors.text.secondary};

                    span {
                        font-size: 14px;
                        font-weight: 400;
                    }
                    small {
                        font-size: 12px;
                        font-weight: 400;
                    }
                }
            }
        }

        @media (max-width: 800px) {
            width: 100%;
        }

        @media (max-width: 550px) {
            padding: 16px;

            .swiper {
                .swiper-slide {
                    padding: 12px;
                }
            }

            h2 {
                font-size: 1.1rem;
            }

            p {
                font-size: 14px;
                line-height: 18px;
            }

            .logo {
                font-size: 1rem;
            }

            p,
            h2 {
                margin-bottom: 10px !important;
            }
        }
    `
);

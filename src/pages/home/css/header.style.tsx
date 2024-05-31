import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const mirror = keyframes`
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(360deg);
    }
`;

const H2Init = keyframes`
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;

const ArrowFieldInit = keyframes`
    0% {
        width: 80px;
    }
    90% {
        width: 80px;
        transform: rotate(0);
    }
    100% {
        width: 192px;
        transform: rotate(0);
    }
`;

const gradientAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
    }
`;

const ArrowFieldInitResponsive = keyframes`
    0% {
        width: 56px;
        min-width: 56px;
    }
    90% {
        width: 56px;
        min-width: 56px;
        transform: rotate(0);
    }
    100% {
        width: 140px;
        min-width: 140px;
        transform: rotate(0);
    }
`;

export const HeaderContainer = styled.section(
    ({ theme }) => css`
        padding: 130px 0;

        h1 {
            font-size: 72px;
            font-weight: 400;
            width: 560px;
            line-height: 80px;
            position: relative;

            svg {
                color: ${theme.colors.background.accent1};
                width: 48px;
                height: 48px;
                position: absolute;
                top: 0;
                right: -40px;
                animation: ${mirror} 2s ease-in infinite;
            }
        }

        h2 {
            font-size: 92px;
            background: -webkit-linear-gradient(
                0deg,
                ${theme.colors.background.accent2} 30%,
                ${theme.colors.background.accent1} 80%,
                ${theme.colors.background.accent2}
            );
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            opacity: 0;
            animation: ${gradientAnimation} 3s ease infinite;
            animation:
                ${H2Init} 1s cubic-bezier(0.33, 1.24, 0.91, 0.96) 3s forwards,
                ${gradientAnimation} 5s linear infinite;

            position: relative;
            top: 3px;
        }

        .arrow-button {
            background-color: ${theme.colors.background.accent1};
            width: 80px;
            height: 78px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 200px !important;
            animation: ${ArrowFieldInit} 2s ease-in-out forwards;
            transform: rotate(-180deg);
            animation-delay: 1s;
            overflow: hidden;
            position: relative;

            svg {
                position: absolute;
                left: 40px;
                width: 120px;
                color: white;
            }
        }

        button {
            width: max-content;
            height: 32px;
            font-size: 16px !important;
            font-weight: 300 !important;
            padding: 0;
            font-weight: 500 !important;
        }

        .arrow-field {
            margin-top: 28px;
            display: flex;
            align-items: center;
            gap: 90px;
        }

        @media (max-width: 992px) {
            h2 {
                font-size: 62px;
            }
        }

        @media (max-width: 768px) {
            padding: 57px 20px;

            h1 {
                font-size: 36px;
                width: 100%;
                line-height: 50px;

                svg {
                    width: 28px;
                    height: 28px;
                    top: -20px;
                    right: 0px;
                }
            }

            h2 {
                font-size: 60px;
            }

            .arrow-field {
                flex-direction: column;
                align-items: flex-start;
                margin-top: 16px;
                gap: 16px;
            }

            .arrow-button {
                height: 55px;
                animation: ${ArrowFieldInitResponsive} 2s ease-in-out forwards;
                animation-delay: 1s;
                width: 56px;

                svg {
                    width: 84px;
                    left: 28px;
                }
            }
        }

        @media (max-width: 400px) {
            h1 {
                svg {
                    right: 110px;
                }
            }
        }

        @media (max-width: 400px) {
            h2 {
                font-size: 40px;
            }

            h1 {
                svg {
                    right: 0;
                }
            }
        }
    `
);

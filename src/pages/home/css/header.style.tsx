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
        transform: rotate(-180deg);
    }
    90% {
        width: 80px;
    }
    100% {
        width: 192px;
    }
`;

const ArrowFieldInitResponsive = keyframes`
    0% {
        width: 56px;
        min-width: 56px;
        transform: rotate(-180deg);
    }
    90% {
        width: 56px;
        min-width: 56px;
    }
    100% {
        width: 140px;
        min-width: 140px;
    }
`;

export const HeaderContainer = styled.section(
    ({ theme }) => css`
        padding: 130px 0;

        h1 {
            font-size: 72px;
            font-weight: 400;
            width: 700px;
            line-height: 80px;
            position: relative;

            svg {
                color: ${theme.colors.background.accent1};
                width: 48px;
                height: 48px;
                position: absolute;
                top: -30px;
                right: -40px;
                animation: ${mirror} 2s ease-in infinite;
            }
        }

        h2 {
            font-size: 92px;
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 50%, ${theme.colors.background.accent1});
            background-clip: text;
            -webkit-text-fill-color: transparent;
            opacity: 0;
            animation: ${H2Init} 1s cubic-bezier(0.33, 1.24, 0.91, 0.96) 2s forwards;
        }

        button {
            background-color: ${theme.colors.background.accent1};
            width: 192px;
            height: 78px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 200px !important;
            animation: ${ArrowFieldInit} 2s ease-in-out;
            overflow: hidden;

            svg {
                position: absolute;
                left: 40px;
                width: 120px;
                color: white;
            }
        }

        .arrow-field {
            margin-top: 28px;
            display: flex;
            align-items: center;
            gap: 54px;
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

            button {
                width: 140px;
                height: 55px;
                animation: ${ArrowFieldInitResponsive} 3s ease-in-out;

                svg {
                    width: 84px;
                    left: 28px;
                }
            }
        }

        @media (max-width: 400px) {
            h2 {
                font-size: 40px;
            }
        }
    `
);

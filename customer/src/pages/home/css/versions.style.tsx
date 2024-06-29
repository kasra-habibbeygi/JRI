import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const RotateAnimate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const VersionsContainer = styled.section(
    () => css`
        background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);

        background: radial-gradient(ellipse at 10% 71%, rgb(137 98 209 / 1) 30.9%, rgb(5 47 255 / 1) 100%) 0% 0%/100% 99.8% no-repeat
            no-repeat;
        height: 500px;
        display: flex;
        position: relative;
        overflow: hidden;

        .left-side {
            min-width: 40%;
            max-width: 40%;
            border-right: 10px solid white;
            padding: 60px 80px;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 36px;
            color: white;
            display: block;

            .slider-inner-text {
                opacity: 0.5;
                font-size: 120px;
                height: 320px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .swiper-slide {
                opacity: 0 !important;
            }

            .swiper-slide-active {
                opacity: 1 !important;
            }
        }

        .right-side {
            padding: 60px 80px;
            font-size: 36px;
            color: white;
            display: block;
            width: 100%;

            .smile {
                position: relative;
                left: -50px;
                opacity: 0;
                transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.3s;
                z-index: 20;
            }

            &:hover {
                .smile {
                    left: 0;
                    opacity: 1;
                }
            }

            button {
                border: 1px solid white;
                color: white !important;
                width: 156px;
                height: 32px;
                font-size: 16px !important;
                font-weight: 300 !important;
            }

            .content {
                position: relative;
                z-index: 50;
            }
        }

        .mrl-container {
            width: 100%;
            height: 500px;
        }

        .looper {
            position: absolute;
            top: -240px;
            right: -150px;
            animation: ${RotateAnimate} 60s linear infinite;
        }

        @media (max-width: 1200px) {
            .looper {
                top: -100px;
                right: -150px;
                width: 700px;
            }
        }

        @media (max-width: 1200px) {
            .left-side {
                padding: 30px 20px;
            }

            .right-side {
                padding: 30px 20px;
            }
        }

        @media (max-width: 900px) {
            flex-direction: column;

            h3 {
                font-size: 20px;
                text-align: left;
            }

            .left-side {
                align-items: flex-start;
                min-width: 100%;
                max-width: 100%;
                border-right: 0;
                border-bottom: 8px solid white;
                height: 230px;

                .slider-inner-text {
                    font-size: 50px;
                    height: 150px;
                }

                .swiper-slide {
                    opacity: 0 !important;
                }

                .swiper-slide-active {
                    opacity: 1 !important;
                }
            }

            .looper {
                top: 0px;
                right: -250px;
            }
        }
    `
);

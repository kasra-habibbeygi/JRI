import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const OnLoadContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 50px;
        font-size: 20px;
        height: calc(100vh - 68px);

        img {
            width: 300px;
            border-radius: 12px;
        }

        .swiper-slide {
            opacity: 0 !important;
        }

        .swiper-slide-active {
            opacity: 1 !important;
        }

        .slider-inner-text {
            text-align: center;
        }

        .swiper {
            width: 100%;
        }

        button {
            background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
            color: white !important;
            font-size: 20px;
            width: 240px;
            height: 48px;
            margin-top: -30px;
            border-radius: 500px !important;
            box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;

            &:hover {
                background: transparent;
                color: ${theme.colors.background.accent2} !important;
                border: 1px solid ${theme.colors.background.accent2};
            }
        }
    `
);

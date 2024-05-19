import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TrustContainer = styled.section(
    ({ theme }) => css`
        h3 {
            font-size: 36px;
            color: ${theme.colors.text.accent1};
            text-align: center;
            margin-bottom: 32px;
        }

        p {
            text-align: center;

            span {
                color: ${theme.colors.text.accent1};
            }
        }

        .gradient {
            margin-top: 120px;
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 45%, ${theme.colors.background.accent1} 62%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .next-Phase {
            margin-top: 120px;
            padding-top: 80px;
            border-top: 1px solid #0f0f0f;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
                font-size: 72px;
                color: ${theme.colors.text.accent1};
            }

            p {
                color: ${theme.colors.text.accent2};
                font-size: 36px;
                font-weight: 500;
                margin-bottom: 80px;
            }

            button {
                background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
                color: white !important;
                font-size: 20px;
                width: 240px;
                height: 48px;
                margin-bottom: 121px;
            }
        }
    `
);

export const GradientContainer = styled.div(
    () => css`
        background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
        padding: 60px;
        color: white;
        font-size: 20px;
        line-height: 28px;
        font-weight: 300;
        text-align: center;
        margin-bottom: 120px;
        margin-top: 64px;
    `
);

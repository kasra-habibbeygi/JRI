import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TrustContainer = styled.section(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;

        .circle-background {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: red;
            border-radius: 100%;
            background: radial-gradient(circle, rgba(138, 99, 210, 0.15) 0%, rgb(5 45 255 / 0%) 70%);
        }

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
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 50%, ${theme.colors.background.accent1});
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
                background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                color: white !important;
                font-size: 20px;
                width: 240px;
                height: 48px;
                margin-bottom: 121px;

                &:hover {
                    background: transparent;
                    color: ${theme.colors.background.accent2} !important;
                    border: 1px solid ${theme.colors.background.accent2};
                    box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                }
            }
        }

        @media (max-width: 760px) {
            h3 {
                font-size: 20px;
                margin-bottom: 26px;
            }

            p {
                font-size: 16px;
                line-height: 20px;
            }

            .gradient {
                margin-top: 80px;
                font-size: 20px;
            }

            .next-Phase {
                margin-top: 80px;
                padding-top: 60px;

                h2 {
                    font-size: 36px;
                }

                p {
                    font-size: 20px;
                    margin-bottom: 64px;
                }

                button {
                    font-size: 16px;
                    width: 200px;
                    height: 40px;
                    margin-bottom: 80px;
                }
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

        @media (max-width: 760px) {
            font-size: 16px;
            line-height: 20px;
            padding: 60px 20px;
            margin-bottom: 80px;
        }
    `
);

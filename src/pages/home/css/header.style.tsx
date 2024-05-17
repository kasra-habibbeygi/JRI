import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
            }
        }

        h2 {
            font-size: 92px;
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 50%, ${theme.colors.background.accent1});
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        button {
            background-color: ${theme.colors.background.accent1};
            width: 210px;
            height: 78px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 200px !important;

            svg {
                width: 120px;
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
                width: 150px;
                height: 55px;

                svg {
                    width: 84px;
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

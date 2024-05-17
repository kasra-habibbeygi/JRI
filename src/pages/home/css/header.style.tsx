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
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WhiteListTableContainer = styled.section(
    ({ theme }) => css`
        margin-bottom: 120px;
        padding-bottom: 80px;
        border-bottom: 1px solid #0f0f0f;

        h3 {
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 0%, ${theme.colors.background.accent1} 100%);
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 24px;
            width: max-content;
        }

        ul {
            list-style: none;
            font-size: 20px;
            margin-bottom: 64px;

            li {
                display: flex;
                gap: 20px;
                margin-bottom: 12px;
            }
        }
    `
);

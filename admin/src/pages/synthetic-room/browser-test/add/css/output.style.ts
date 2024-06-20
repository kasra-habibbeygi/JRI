import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const OutputContainer = styled.div(
    ({ theme }) => css`
        background-color: #1e1e1e;
        height: 100%;
        color: white !important;
        padding: 20px;

        header {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid ${theme.colors.border.primary};
            margin-bottom: 10px;
            padding-bottom: 10px;
        }

        .output {
            p {
                font-size: 14px;
            }
        }
    `
);

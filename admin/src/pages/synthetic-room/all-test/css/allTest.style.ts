import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AllTestContainer = styled.div(
    ({ theme }) => css`
        .status-content {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            margin-top: 20px;

            p {
                font-size: 14px;
                font-weight: 500;
            }

            h4 {
                font-size: 16px;
                font-weight: 600;
            }
        }

        .status-item {
            border-radius: 8px;
            min-width: 220px;
            display: flex;
            justify-content: space-between;
            padding: 10px 16px;
            flex: 1;
            &.red {
                background-color: ${theme.colors.background.danger};
                border: 1px solid ${theme.shared.danger};
            }
            &.green {
                background-color: ${theme.colors.background.success};
                border: 1px solid ${theme.shared.success};
            }
            &.yellow {
                background-color: ${theme.colors.background.warning};
                border: 1px solid ${theme.shared.warning};
            }
        }

        svg {
            width: 20px;
        }

        svg,
        .text {
            &.red {
                color: ${theme.colors.text.danger};
            }
            &.green {
                color: ${theme.colors.text.success};
            }
            &.yellow {
                color: ${theme.colors.text.warning};
            }
        }

        @media (max-width: 500px) {
            .status-content {
                gap: 10px;
            }
        }
    `
);

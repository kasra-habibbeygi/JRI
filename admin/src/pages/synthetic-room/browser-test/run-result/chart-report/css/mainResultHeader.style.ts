import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MainResultHeaderContainer = styled.header(
    ({ theme }) => css`
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;
        color: ${theme.colors.text.primary};

        .green {
            font-size: 14px;
            margin-top: 6px;
            color: ${theme.colors.text.success};
        }

        .left-box {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            font-size: 14px;
            font-weight: 400;

            button {
                font-size: 13px;
                gap: 4px;

                svg {
                    width: 16px;
                }
            }

            .user {
                display: flex;
                gap: 4px;
                align-items: center;
            }

            svg {
                width: 20px;
                height: 20px;
            }
        }

        .url-location-box {
            display: flex;
            gap: 4px;
            margin-top: 10px;

            span {
                display: flex;
                gap: 4px;
                align-items: center;
                background-color: ${theme.colors.background.tertiary};
                width: max-content;
                border-radius: 50px;
                padding: 2px 8px;
                font-size: 12px;

                svg {
                    width: 20px;
                    height: max-content;
                }
            }
        }
    `
);

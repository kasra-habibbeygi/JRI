import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ListContainer = styled.section(
    ({ theme }) => css`
        h3 {
            font-size: 36px;
            margin-bottom: 6px;
            background: -webkit-linear-gradient(0deg, ${theme.colors.background.accent2} 50%, ${theme.colors.background.accent1});
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        p {
            font-size: 20px;
            display: flex;
            align-items: center;
            margin-bottom: 64px;

            a {
                color: ${theme.colors.text.accent1};
                margin-left: 4px;
                display: flex;
                align-items: center;
                gap: 10px;

                svg {
                    width: 36px;
                    color: ${theme.colors.text.accent1};
                }
            }
        }

        @media (max-width: 760px) {
            h3 {
                font-size: 20px;
                margin-bottom: 20px;
            }

            p {
                font-size: 16px;
                margin-bottom: 52px;
                display: block;

                a {
                    color: ${theme.colors.text.accent1};
                    margin-left: 4px;
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;

                    svg {
                        width: 36px;
                        color: ${theme.colors.text.accent1};
                    }
                }
            }
        }
    `
);

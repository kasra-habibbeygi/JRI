import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Menu } from '@mui/material';

export const MenuContainer = styled(Menu)(
    ({ theme }) => css`
        .MuiList-root,
        .MuiPaper-root {
            background-color: ${theme.colors.background.secondary};
            border-radius: 8px;
        }

        .MuiList-root {
            padding: 10px;
        }

        .menu-item {
            display: flex;
            background-color: ${theme.colors.background.secondary};
            border-radius: 8px;

            svg {
                width: 18px;
            }

            a,
            button {
                display: flex;
                width: 100%;
                gap: 6px;
                padding: 4px 8px;
                align-items: center;
                color: ${theme.colors.text.secondary};
                border-radius: 4px;

                &:hover {
                    background-color: ${theme.colors.background.tertiary} !important;
                }
            }

            button {
                justify-content: start !important;
                background-color: ${theme.colors.background.secondary} !important;
                span {
                    color: ${theme.shared.danger};
                }
            }
        }

        @media (max-width: 500px) {
            .menu-item {
                svg {
                    width: 14px;
                }
                a,
                button {
                    span {
                        font-size: 13px !important;
                    }
                }
            }
        }
    `
);

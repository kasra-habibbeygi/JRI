import { Button } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ButtonContainer = styled(Button)(
    ({ theme }) => css`
        font-size: 14px;
        font-weight: 500;
        padding: 6px 16px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        min-height: 30px;
        height: 30px;
        color: ${theme.colors.text.primary} !important;
        font-weight: 400 !important;
        text-transform: capitalize !important;

        &.filled {
            &.accent1-color {
                color: white !important;
                background-color: ${theme.colors.background.accent1};
            }

            &.accent2-color {
                color: white !important;
                background-color: ${theme.colors.background.accent2};
            }
        }

        &.outline {
            &.accent1-color {
                color: ${theme.colors.text.accent1} !important;
                border: 1px solid ${theme.colors.text.accent1};
                background-color: transparent;
            }

            &.accent2-color {
                color: ${theme.colors.text.accent2}!important;
                border: 1px solid ${theme.colors.text.accent2};
                background-color: transparent;
            }
        }

        &.radius-normal {
            border-radius: 4px;
        }

        &.radius-rounded {
            border-radius: 60px;
        }

        .loader-field {
            width: 20px !important;
            height: 20px !important;
            display: block;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                color: white;
            }
        }
    `
);

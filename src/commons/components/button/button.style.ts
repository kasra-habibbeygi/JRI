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
            &.success-color {
                color: white !important;
                background-color: ${theme.shared.success};
            }

            &.danger-color {
                color: white !important;
                background-color: ${theme.shared.danger};
            }

            &.accent-color {
                color: white !important;
                background-color: ${theme.shared.secondary};
            }
        }

        &.outline {
            &.success-color {
                color: ${theme.shared.success}!important;
                border: 1px solid ${theme.shared.success};
                background-color: transparent;
            }

            &.danger-color {
                color: ${theme.shared.danger}!important;
                border: 1px solid ${theme.shared.danger};
                background-color: transparent;
            }

            &.accent-color {
                color: ${theme.shared.secondary}!important;
                border: 1px solid ${theme.shared.secondary};
                background-color: transparent;
            }
        }

        &.ghost {
            background-color: ${theme.colors.background.tertiary};
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

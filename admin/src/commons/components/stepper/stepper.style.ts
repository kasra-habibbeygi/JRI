import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StepperContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: 20px;

        .step {
            display: flex;
            gap: 20px;
            position: relative;
            cursor: pointer;

            &.active {
                .step-number {
                    border: 2px solid ${theme.colors.text.accent};
                    color: ${theme.colors.text.accent};
                }
            }

            &.done {
                .step-number {
                    border: 2px solid ${theme.colors.text.success};
                    color: ${theme.colors.text.success};
                }
            }

            .step-number {
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${theme.colors.text.primary};
                font-weight: 400;
                font-size: 14px;
                border-radius: 60px;
                border: 2px solid ${theme.colors.border.primary};
                min-width: 28px;
                height: 28px;
                position: relative;
                z-index: 1;
                transition: all linear 0.2s;
            }
        }

        .content-field {
            width: calc(100% - 14px);
        }

        .step-description {
            width: 100%;
            cursor: default;

            b {
                font-size: 16px;
                color: ${theme.colors.text.primary};
                cursor: pointer;
            }

            small {
                font-size: 14px;
                margin-bottom: 20px;
                color: ${theme.colors.text.secondary};
                display: block;
            }
        }

        .separator {
            height: 100%;
            display: block;
            width: 2px;
            position: absolute;
            width: 2px;
            background-color: ${theme.colors.border.primary};
            left: 0;
            top: 0;
            left: 13px;
            top: 26px;
            height: calc(100% - 5px);

            &.active {
                background-color: ${theme.colors.text.primary};
            }

            &.done {
                background-color: ${theme.colors.text.success};
            }
        }
    `
);

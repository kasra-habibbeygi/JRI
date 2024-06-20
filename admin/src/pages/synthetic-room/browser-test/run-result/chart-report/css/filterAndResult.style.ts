import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterAndResultContainer = styled.div(
    ({ theme }) => css`
        .filter-content {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
            margin-top: 30px;

            .date-filter {
                display: flex;
                align-items: center;
                gap: 4px;

                label {
                    border-radius: 4px;
                    height: 32px;
                }

                button {
                    padding: 4px 6px;
                    min-width: 20px;
                    height: 32px;

                    .left-arrow {
                        transform: rotate(180deg);
                    }

                    svg {
                        width: 14px;
                    }
                }
            }

            .input-container {
                width: 150px;
            }

            .select-field {
                height: 32px;
                border-radius: 4px;
            }

            button {
                font-size: 12px;
            }
        }

        .details {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 40px;
            margin-top: 30px;
            color: ${theme.colors.text.primary};

            p {
                display: flex;
                gap: 10px;
                align-items: center;
                font-size: 14px;
                font-weight: 500;
                margin-top: 10px;
            }

            .pill {
                border-radius: 50px;
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 2px 6px;
                border: 1px solid ${theme.colors.border.primary};
                color: ${theme.colors.text.secondary};
                background-color: ${theme.colors.background.tertiary};
                font-size: 12px;

                svg {
                    width: 14px;
                }

                &.red-pill {
                    background-color: ${theme.colors.background.danger};
                    color: ${theme.colors.text.danger};
                    border-color: ${theme.colors.text.danger};
                }

                &.green-pill {
                    background-color: ${theme.colors.background.success};
                    color: ${theme.colors.text.success};
                    border-color: ${theme.colors.text.success};
                }
            }
        }
    `
);
export const DateFilterContainer = styled.div(
    ({ theme }) => css`
        small {
            color: ${theme.colors.text.secondary};
            margin-bottom: 14px;
            display: inline-block;
            font-size: 14px;
        }

        button {
            margin-left: auto;
        }

        .period-of-date {
            display: flex;
            flex-direction: column;
            gap: 10px;
            border-bottom: 1px solid ${theme.colors.border.primary};
            padding-bottom: 14px;
            margin-bottom: 20px;

            label {
                font-size: 14px;
                height: 32px;
            }
        }

        .period-of-time {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;

            span {
                border-radius: 50px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                padding: 2px 6px;
                border: 1px solid ${theme.colors.border.primary};
                color: ${theme.colors.text.secondary};
                background-color: ${theme.colors.background.tertiary};
                font-size: 14px;
                min-width: max-content;

                &.active {
                    background-color: ${theme.colors.background.accent};
                    color: white;
                }
            }
        }
    `
);

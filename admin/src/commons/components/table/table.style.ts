import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TableContainer = styled.div(
    ({ theme }) => css`
        overflow-x: auto;
        margin-top: 20px;

        table {
            width: 100%;
        }

        .switch-item {
            justify-content: start;
        }

        .table-row-max-width {
            max-width: 200px;
            width: 200px;
        }

        tr {
            border-bottom: 1px solid ${theme.colors.border.primary};

            th {
                padding: 22px 10px;
                text-align: left;
                color: ${theme.colors.text.secondary};
                font-size: 16px;
                font-weight: 500;
                text-transform: capitalize;
            }

            td {
                padding: 22px 10px;
                text-align: left;
                color: ${theme.colors.text.primary};
                font-size: 14px;
                font-weight: 300;
            }
        }

        .table-row-pill {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 8px;
            width: max-content;
            border-radius: 50px;
            font-size: 14px;

            &.red {
                background-color: ${theme.colors.background.danger};
                color: ${theme.colors.text.danger};
            }

            &.green {
                background-color: ${theme.colors.background.success};
                color: ${theme.colors.text.success};
            }

            &.yellow {
                background-color: ${theme.colors.background.warning};
                color: ${theme.colors.text.warning};
            }

            &.ghost {
                background-color: ${theme.colors.background.primary};
                color: ${theme.colors.text.primary};
            }
        }

        svg {
            width: 24px;
            height: 24px;

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

        tbody {
            tr {
                &:last-of-type {
                    border: none;
                }
            }
        }

        .option-field {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;

            button {
                min-width: 30px;
                width: max-content;
                height: 30px;
                line-height: 30px;
                padding: 0 10px;
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    width: 16px;
                    height: 16px;
                }
            }
        }

        .limited-one {
            max-width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: auto;
        }

        .text-button {
            padding: 0 10px !important;
            padding-top: 4px !important;
            font-weight: 400;
            font-size: 12px;
        }

        @media (max-width: 700px) {
            tr {
                border-bottom: 1px solid ${theme.colors.border.primary};

                th {
                    padding: 12px 10px;
                    color: ${theme.colors.text.secondary};
                    font-size: 14px;
                    font-weight: 500;
                }

                td {
                    padding: 12px 10px;
                    color: ${theme.colors.text.primary};
                    font-size: 14px;
                    font-weight: 300;
                }
            }
        }
    `
);

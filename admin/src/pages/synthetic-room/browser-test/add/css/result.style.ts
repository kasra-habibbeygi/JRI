import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ResultContainer = styled.div(
    ({ theme }) => css`
        h4 {
            color: ${theme.colors.text.primary};
        }

        label {
            color: ${theme.colors.text.secondary};
        }

        .header {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            padding: 16px;
            border-radius: 4px;
            background-color: ${theme.colors.background.success};
            color: ${theme.shared.success};
            margin-bottom: 20px;

            svg {
                width: 24px;
                height: 24px;
                color: ${theme.shared.success};
            }
        }

        .result-content {
            .category-header {
                display: flex;
                align-items: center;
                margin-bottom: 20px;

                .line {
                    color: ${theme.colors.text.primary};
                    margin-right: 10px;
                    width: 100%;
                    display: flex;
                    align-items: center;

                    h4 {
                        max-width: max-content;
                        width: 100%;
                        min-width: 80px;
                        color: ${theme.colors.text.primary};
                    }

                    &::after {
                        content: '';
                        flex-grow: 1;
                        height: 1px;
                        background-color: #ccc;
                        margin-left: 10px;
                        width: 100%;
                    }
                }

                button {
                    margin-left: auto;
                }

                svg {
                    width: 16px;
                }
            }
        }

        .content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 16px;
            background-color: ${theme.colors.background.primary};
            border-radius: 8px;
            margin: 20px 0px;

            input {
                opacity: 1 !important;
                color: ${theme.colors.text.secondary};
            }

            .tags {
                p {
                    color: ${theme.colors.text.primary};
                    margin-bottom: 8px;
                    display: block;
                    font-size: 14px;
                }

                span {
                    color: ${theme.colors.text.secondary};
                    display: inline-block;
                    background-color: ${theme.colors.background.tertiary};
                    border-radius: 50px;
                    padding: 4px 12px;
                    min-width: 60px;
                    margin-bottom: 10px;
                    text-align: center;
                    border: 1px solid ${theme.colors.border.primary};
                    font-weight: 400;
                    font-size: 14px;
                    text-transform: capitalize;
                    margin-right: 10px;
                }
            }
        }

        .full-width {
            grid-column: 1 / -1;
        }

        .row {
            label {
                display: inline-block;
                min-width: max-content;
                font-weight: 400;
                margin-bottom: 10px;
                font-size: 16px;
            }

            .form-group {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            span {
                font-size: 14px;
                font-weight: 400;
                display: inline-block;
                min-width: max-content;
                color: ${theme.colors.text.primary};
            }
        }

        .footer {
            display: flex;
            gap: 10px;
            justify-content: end;
            margin-top: 20px;

            .run-result-button {
                color: ${theme.colors.text.primary};
                background-color: ${theme.shared.success};
                border-radius: 4px;
                font-size: 14px;
                padding: 6px 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 30px;
                line-height: 30px;
                height: 30px;
                font-weight: 400;
                text-transform: capitalize;
            }
        }

        @media (max-width: 650px) {
            .content {
                grid-template-columns: repeat(1, 1fr);
            }

            .row {
                .form-group {
                    flex-wrap: wrap;
                }
            }
        }

        @media (max-width: 400px) {
            .result-content .category-header .line {
                &::after {
                    display: none;
                }
                h4 {
                    min-width: 60px;
                }
            }

            h4 {
                font-size: 14px !important;
            }

            .footer {
                flex-direction: column;
            }

            label,
            span,
            p,
            input {
                font-size: 12px;
            }

            input {
                height: 28px;
            }

            .tags {
                span {
                    font-size: 12px !important;
                    padding: 2px 12px !important;
                }
            }
        }
    `
);

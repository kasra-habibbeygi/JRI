import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FireWatchTableContainer = styled.div(
    ({ theme }) => css`
        margin-top: 20px;

        small {
            color: ${theme.colors.text.secondary};
        }

        .MuiAccordion-root {
            box-shadow:
                rgb(0 0 0 / 2%) 0px 1px 3px,
                rgb(0 0 0 / 0%) 0px 1px 2px;
            border-radius: 8px;
        }

        .MuiAccordionSummary-expandIconWrapper {
            svg {
                color: ${theme.colors.text.primary};
            }
        }

        a {
            color: ${theme.shared.secondary};
        }

        .MuiPaper-root {
            background-color: ${theme.colors.background.secondary};
        }

        .according-header {
            .title {
                display: flex;
                align-items: center;
                gap: 10px;

                h3 {
                    color: ${theme.colors.text.primary};
                }

                span {
                    display: flex;
                }

                svg {
                    color: ${theme.colors.text.secondary};
                }
            }

            .sub-title {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 14px;
                margin-top: 6px;

                span {
                    color: ${theme.colors.text.secondary};
                }

                .red {
                    color: ${theme.colors.text.danger};
                }

                svg {
                    width: 20px !important;
                }
            }
        }

        .container {
            margin-top: 0px;
            box-shadow: none !important;
        }

        table {
            p,
            span,
            td {
                font-size: 14px !important;
                font-weight: 400;
            }

            td {
                padding: 12px 10px;
            }

            .test-type-icon {
                display: flex;
            }

            .test-type-icon {
                svg {
                    color: ${theme.colors.text.secondary};
                }
            }

            .name {
                display: flex;
                align-items: center;
                gap: 10px;

                svg {
                    width: 18px;
                    height: 18px;
                }

                span {
                    display: flex;
                }
            }

            a {
                display: flex;
                gap: 10px;

                svg {
                    width: 18px;
                    height: 18px;
                    color: ${theme.colors.text.secondary};
                }
            }
        }
        @media (max-width: 550px) {
            .according-header {
                .sub-title {
                    svg {
                        width: 25px !important;
                    }
                }
            }
        }
    `
);

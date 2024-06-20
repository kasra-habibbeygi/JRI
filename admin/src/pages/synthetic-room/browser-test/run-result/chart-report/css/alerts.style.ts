import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AlertsContainer = styled.div(
    ({ theme }) => css`
        position: relative;
        margin: 20px 0px;

        .date-field {
            position: relative;
            left: 10px;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 6px;
            color: #7a7a7a;
            margin-bottom: 20px;
            font-size: 14px;

            svg {
                width: 20px;
                height: auto;
            }
        }

        .line {
            display: flex;
            position: absolute;
            width: 2px;
            border-radius: 4px;
            height: calc(100% - 60px);
            background-color: ${theme.colors.border.primary};
            top: 30px;
            left: 20px;
            z-index: 0;
        }

        .card-field {
            padding: 20px;
            border-radius: 4px;
            margin-bottom: 20px;
            border: 1px solid ${theme.colors.border.primary};
            background-color: ${theme.colors.background.primary};
            position: relative;
            z-index: 1;
            font-size: 14px;

            .time {
                display: flex;
                gap: 4px;
                align-items: center;
                color: ${theme.colors.text.secondary};

                svg {
                    width: 14px;
                }
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-wrap: wrap;
                color: ${theme.colors.text.primary};
                margin-bottom: 10px;

                .left-side {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 10px;

                    small {
                        color: ${theme.colors.text.secondary};
                    }

                    p {
                        font-size: 14px;
                    }
                }

                .right-side {
                    color: gray;
                    font-size: 14px;
                }
            }

            .error-field {
                padding: 10px;
                border-radius: 4px;
                background-color: ${theme.colors.background.danger};
                color: ${theme.colors.text.danger};
                margin-top: 10px;
                font-size: 12px;
                line-height: 20px;
                word-wrap: break-word !important;
                word-break: break-word !important;
            }
        }

        .show-more {
            font-size: 14px;
            color: ${theme.colors.text.secondary};
        }

        @media (max-width: 350px) {
            .line {
                height: calc(100% - 80px);
            }

            .card-field {
                header {
                    .right-side {
                        font-size: 12px;
                    }

                    .left-side {
                        p {
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    `
);

export const FilterContainer = styled.div(
    ({ theme }) => css`
        h4 {
            font-weight: bold;
            margin-bottom: 16px;
            color: ${theme.colors.text.primary};
        }

        p {
            font-size: 14px;
        }

        .form {
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .MuiSvgIcon-root {
                color: ${theme.colors.text.secondary};
            }
        }

        .label-checkbox {
            display: flex;
            align-items: center;
            gap: 4px;

            .red {
                width: 14px;
                height: 14px;
                background-color: ${theme.colors.text.danger};
                border-radius: 50%;
            }

            .green {
                width: 14px;
                height: 14px;
                background-color: ${theme.colors.text.success};
                border-radius: 50%;
            }

            .yellow {
                width: 14px;
                height: 14px;
                background-color: ${theme.colors.text.warning};
                border-radius: 50%;
            }

            small {
                color: ${theme.colors.text.secondary};
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

                    svg {
                        color: ${theme.colors.text.danger};
                    }
                }

                &.green-pill {
                    background-color: ${theme.colors.background.success};
                    color: ${theme.colors.text.success};
                    border-color: ${theme.colors.text.success};

                    svg {
                        color: ${theme.colors.text.success};
                    }
                }
            }
        }
    `
);

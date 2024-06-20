import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AddBrowserTestContainer = styled.div(
    ({ theme }) => css`
        .general-setting {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(2, 1fr);
            border-bottom: 1px solid ${theme.colors.divider.primary};
            padding-bottom: 16px;
        }

        .loc-time-setting {
            border-bottom: 1px solid ${theme.colors.divider.primary};
            padding-bottom: 16px;

            h3 {
                font-size: 16px;
            }

            h3,
            .MuiSlider-markLabel {
                color: ${theme.colors.text.primary};
            }

            .location {
                padding-bottom: 16px;

                .input-container {
                    width: 400px;
                }
            }

            .Scheduling {
                margin-top: 16px;
                .MuiSlider-root {
                    display: inline-block;
                    margin-left: 16px;
                    width: 400px;
                }
            }
        }

        .cta {
            margin-top: 10px;
            margin-left: auto;
        }

        .step-description3 {
            width: calc(100% - 50px) !important;
        }

        @media (max-width: 650px) {
            .general-setting {
                grid-template-columns: repeat(1, 1fr);
            }
        }

        @media (max-width: 500px) {
            .general-setting {
                padding-bottom: 10px;
            }

            .step-description small {
                margin-bottom: 10px;
            }

            .loc-time-setting {
                padding-bottom: 10px;
                .location {
                    .input-container {
                        width: 100%;
                    }
                }

                .Scheduling {
                    margin-top: 0px;
                    .MuiSlider-root {
                        width: 90%;

                        .MuiSlider-markLabel {
                            font-size: 10px;
                        }
                    }
                }
            }
        }

        @media (max-width: 650px) {
            .container {
                padding: 10px 6px !important;
            }
        }
    `
);

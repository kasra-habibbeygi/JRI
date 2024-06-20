import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RetriesAlertContainer = styled.div(
    ({ theme }) => css`
        .content {
            border: 1px solid ${theme.colors.border.primary};
            padding: 16px;
            margin: 20px 0px;
            border-radius: 8px;
            color: ${theme.colors.text.primary};
        }

        .container {
            box-shadow: none;
        }

        span,
        small,
        p,
        label {
            font-weight: 400;
            font-size: 14px;
            display: block !important;
        }

        h3 {
            margin-bottom: 20px;
        }

        small {
            margin-bottom: 0 !important;
            padding: 0;
            margin-top: 6px;
            width: 100%;
        }

        .radio-checkbox-group {
            display: flex;
            gap: 10px;
        }

        .row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;

            .input-container,
            .select-field {
                width: 70px;
                min-width: 70px;
                height: 28px;

                input {
                    height: 28px;
                }
            }

            .more-details {
                display: flex;
                align-items: center;

                svg {
                    width: 16px;
                    height: 16px;
                    color: ${theme.colors.text.secondary};
                    cursor: pointer;
                }
            }
        }

        .horizontal-form-group {
            display: grid;
            grid-template-columns: 1fr 3fr;
            margin-top: 20px;

            p {
                font-weight: 500;
                font-size: 16px;
            }

            .row {
                margin-top: 10px;
                margin-bottom: 10px;
            }
        }

        .reminder-content {
            align-items: center;
        }

        .table-item {
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;

            span {
                width: 24px;
                height: 24px;
                text-align: center;
                border: 3px solid ${theme.colors.border.primary};
                border-radius: 50%;
            }

            .email-icon {
                color: ${theme.colors.text.secondary};
                width: 20px;
            }
        }

        .switch-item {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 650px) {
            .radio-checkbox-group {
                flex-direction: column;
            }
        }

        @media (max-width: 650px) {
            .horizontal-form-group {
                grid-template-columns: 1fr;
            }
        }
    `
);

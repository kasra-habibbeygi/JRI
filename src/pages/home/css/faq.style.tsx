import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FAQContainer = styled.section(
    () => css`
        display: flex;
        gap: 74px;
        padding-top: 148px;
        padding-bottom: 200px;

        h3 {
            min-width: max-content;
            font-size: 36px;
        }

        .MuiPaper-elevation {
            background-color: transparent !important;
            box-shadow: none !important;
            border-top: 1px solid #0f0f0f;
            border-radius: 0 !important;

            &:last-child {
                border-bottom: 1px solid #0f0f0f;
            }

            &::before {
                display: none !important;
            }
        }

        .MuiAccordionSummary-content {
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 25px;
        }

        .MuiAccordionDetails-root {
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 25px;
        }

        .MuiAccordionSummary-expandIconWrapper {
            svg {
                width: 20px;
                height: auto;
            }
        }

        @media (max-width: 1200px) {
            h3 {
                font-size: 26px;
            }
        }

        @media (max-width: 992px) {
            flex-direction: column;
            gap: 24px;
        }

        @media (max-width: 500px) {
            padding-top: 80px;
            padding-bottom: 80px;

            h3 {
                font-size: 20px;
            }

            .MuiAccordionSummary-content {
                font-size: 18px !important;
            }

            .MuiAccordionDetails-root {
                font-size: 18px !important;
            }
        }
    `
);

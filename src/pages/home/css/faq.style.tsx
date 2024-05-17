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
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 25px;
        }
    `
);

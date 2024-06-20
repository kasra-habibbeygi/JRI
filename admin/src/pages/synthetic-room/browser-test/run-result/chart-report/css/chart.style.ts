import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ChartHeader = styled.div(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        margin: 20px 0px;
        align-items: center;

        svg {
            width: 24px;
            color: ${theme.colors.text.secondary};
        }

        p {
            font-size: 14px;
            color: ${theme.colors.text.primary};

            span {
                display: block;
                font-weight: 500;

                &:last-child {
                    font-size: 14px;
                    font-weight: 400;
                    color: ${theme.colors.text.secondary};
                }
            }
        }

        @media (max-width: 500px) {
            svg {
                width: 18px;
            }
        }
    `
);

export const ChartContainer = styled.div(
    () => css`
        .recharts-responsive-container {
            height: 300px !important;
        }

        .recharts-tooltip-wrapper {
            font-size: 12px !important;
        }

        tspan {
            font-size: 12px !important;
        }

        .recharts-default-legend {
            display: flex !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
        }

        .recharts-legend-item {
            display: flex !important;
            align-items: center !important;
            font-size: 12px !important;

            svg {
                border-radius: 4px;
            }
        }
    `
);
export const PerformanceResultContainer = styled.div(
    ({ theme }) => css`
        h4 {
            color: ${theme.colors.text.primary};
        }
    `
);

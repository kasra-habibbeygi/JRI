import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MonitoringResultsContainer = styled.div(
    ({ theme }) => css`
        .recharts-wrapper {
            width: 100%;
        }

        h4 {
            margin-top: 30px;
            color: ${theme.colors.text.primary};
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

        p {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            color: ${theme.colors.text.secondary};
            font-size: 14px;
            margin-top: 10px;
        }

        tspan {
            font-size: 12px !important;
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

        .recharts-responsive-container {
            height: 300px !important;
        }

        .bar-chart {
            margin-top: 20px;
        }
    `
);

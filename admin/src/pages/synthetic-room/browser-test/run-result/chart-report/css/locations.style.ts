import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LocationsContainer = styled.div(
    ({ theme }) => css`
        margin-top: 20px;

        h4 {
            color: ${theme.colors.text.primary};
        }

        .chart {
            svg {
                width: 150px;
            }
        }

        .sub-title {
            font-size: 14px;
            color: ${theme.colors.text.secondary};
        }
    `
);

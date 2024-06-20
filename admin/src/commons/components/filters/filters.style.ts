import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FilterContainer = styled.section(
    ({ theme }) => css`
        margin-top: 20px;

        h3 {
            font-size: 20px;
            color: ${theme.colors.text.primary};
        }

        .filter-content {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 20px;
        }

        .apply-button {
            margin-left: auto;
            margin-top: 20px;
        }

        @media (max-width: 900px) {
            .filter-content {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 650px) {
            .filter-content {
                grid-template-columns: 1fr;
            }
        }
    `
);

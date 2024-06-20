import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CheckboxContainer = styled.div<{ haveLabel: boolean }>(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        gap: 0;
        color: ${theme.colors.text.primary};

        .MuiCheckbox-root {
            color: ${theme.colors.text.primary};
            display: flex !important;
            align-items: center;
        }

        svg {
            color: ${theme.colors.text.accent};
        }

        label {
            cursor: pointer;
            display: block !important;
        }
    `
);

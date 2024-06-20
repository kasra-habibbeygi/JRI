import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const DatePickerContainer = styled.div<{ disabled: boolean }>(
    ({ theme, disabled }) => css`
        width: 100%;
        position: relative;
        opacity: ${disabled ? '0.5' : '1'};
        pointer-events: ${disabled ? 'none' : 'initial'};

        .MuiStack-root {
            visibility: hidden;
            position: absolute;
            pointer-events: none;
            top: -18px;
        }

        label {
            width: 100%;
            background-color: transparent;
            border-radius: 50px;
            padding: 10px 12px;
            height: 38px;
            outline: 1px solid transparent;
            transition: all linear 0.1s;
            border: 1px solid ${theme.colors.border.primary};
            font-weight: 400;
            font-size: 14px;
            color: ${theme.colors.text.secondary};
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const UploaderContainer = styled.div(
    ({ theme }) => css`
        width: 100%;
        background-color: transparent;
        border-radius: 50px;
        padding: 10px 12px;
        height: 38px;
        outline: 1px solid transparent;
        transition: all linear 0.1s;
        border: 1px solid ${theme.colors.border.primary};
        color: ${theme.colors.text.secondary};
        display: flex;
        align-items: center;
        cursor: pointer;

        label {
            font-size: 14px;
            width: 100%;
            font-weight: 400;
            font-size: 14px;
            display: block;
            max-width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;

            :focus {
                border: 1px solid ${theme.colors.text.accent};
            }

            &::placeholder {
            }

            &[disabled] {
                background-color: ${theme.colors.background.tertiary};
                opacity: 0.3;
            }
        }
    `
);

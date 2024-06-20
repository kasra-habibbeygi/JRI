import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextareaContainer = styled.div(
    ({ theme }) => css`
        width: 100%;

        textarea {
            width: 100%;
            color: ${theme.colors.text.primary};
            background-color: transparent;
            border-radius: 8px;
            padding: 10px 12px;
            height: 150px;
            outline: 1px solid transparent;
            transition: all linear 0.1s;
            border: 1px solid ${theme.colors.border.primary};
            font-weight: 400;
            font-size: 14px;
            resize: none;
            font-family: 'Product Sans';

            :focus {
                border: 1px solid ${theme.colors.text.accent};
            }

            &::placeholder {
                color: ${theme.colors.text.secondary};
                font-size: 14px;
            }

            &[disabled] {
                background-color: ${theme.colors.background.tertiary};
                opacity: 0.3;
            }
        }

        label {
            color: ${theme.colors.text.primary};
            margin-bottom: 8px;
            display: block;
            font-size: 14px;
        }
    `
);

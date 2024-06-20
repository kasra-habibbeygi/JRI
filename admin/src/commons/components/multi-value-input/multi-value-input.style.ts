import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MultiValueInputContainer = styled.div(
    ({ theme }) => css`
        width: 100%;
        position: relative;

        input {
            width: 100%;
            color: ${theme.colors.text.primary};
            background-color: transparent;
            border-radius: 50px;
            padding: 10px 12px;
            height: 38px;
            outline: 1px solid transparent;
            transition: all linear 0.1s;
            border: 1px solid ${theme.colors.border.primary};
            font-weight: 400;
            font-size: 14px;
            text-transform: capitalize;
            padding-right: 42px;

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

        .add_value {
            position: absolute;
            top: 0;
            right: 10px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                width: 20px;
                height: auto;
                color: ${theme.colors.text.primary};
                cursor: pointer;
            }
        }

        .pill_field {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
            margin-top: 10px;

            span {
                display: flex;
                align-items: center;
                gap: 6px;
                padding: 2px 10px;
                background-color: ${theme.colors.background.tertiary};
                font-size: 12px;
                color: ${theme.colors.text.primary};
                border-radius: 4px;

                svg {
                    width: 16px;
                    height: auto;
                    color: ${theme.colors.text.danger};
                }
            }
        }
    `
);

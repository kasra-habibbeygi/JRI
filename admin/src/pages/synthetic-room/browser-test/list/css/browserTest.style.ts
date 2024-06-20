import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BrowserTestContainer = styled.div(
    ({ theme }) => css`
        .add-test {
            font-size: 14px;
            padding: 6px 16px;
            display: flex !important;
            align-items: center;
            justify-content: center;
            min-height: 30px;
            border-radius: 4px;
            display: inline-block;
            height: 30px;
            color: white !important;
            font-weight: 400 !important;
            text-transform: capitalize !important;
            background-color: ${theme.shared.success};
        }

       

        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;

            span {
                font-size: 13px;
            }
        }

        td {
            p {
                font-weight: 600;
                color: ${theme.colors.text.primary};

                span {
                    font-weight: 400;
                    font-size: 12px;
                    margin-left: 10px;
                    color: ${theme.colors.text.secondary};
                }
            }

            small {
                margin-bottom: 10px;
                color: ${theme.colors.text.primary};

                font-size: 13px;
                display: inline-block;
            }

            button {
                padding: 2px;
                min-width: max-content;

                svg {
                    width: 18px;
                }
            }
        }
    `
);

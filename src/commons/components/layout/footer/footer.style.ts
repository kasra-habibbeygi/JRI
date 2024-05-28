import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;

        small {
            font-size: 16px;
            font-weight: 400;
        }

        .social-media {
            display: flex;
            align-items: center;
            gap: 40px;

            svg {
                width: 20px;
                height: 20px;
                color: black;
            }
        }

        a {
            &:hover {
                transition: all linear 0.1s;
                text-decoration: underline;
                color: ${theme.colors.text.accent1};

                svg {
                    transition: all linear 0.1s;
                    color: ${theme.colors.text.accent1};
                }
            }
        }

        .contact {
            display: flex;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            margin-top: 60px;

            b {
                font-weight: 400;
            }

            a {
                color: ${theme.colors.text.accent1};
            }
        }
    `
);

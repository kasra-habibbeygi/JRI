import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavbarContainer = styled.nav(
    ({ theme }) => css`
        width: 100%;
        padding: 16px 20px;
        border-bottom: 1px solid ${theme.colors.text.accent2};

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .left-side {
            display: flex;
            align-items: center;

            .logo {
                margin-right: 100px;
            }

            ul {
                list-style: none;
                display: flex;
                align-items: center;

                li {
                    display: flex;
                    align-items: center;

                    a {
                        color: ${theme.colors.text.primary};
                        font-weight: 500;
                        padding: 16px 18px;

                        &.active {
                            color: ${theme.colors.text.accent1};
                        }
                    }
                }
            }
        }

        .right-side {
            button {
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                font-size: 16px;
                padding: 8px 26px;
                padding-top: 10px;
            }
        }
    `
);

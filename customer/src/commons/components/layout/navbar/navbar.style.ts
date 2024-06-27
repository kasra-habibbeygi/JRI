import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavbarContainer = styled.nav(
    ({ theme }) => css`
        width: 100%;
        height: 68px;
        border-bottom: 1px solid ${theme.colors.text.accent2};
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 9999;

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .left-side {
            display: flex;
            align-items: center;

            .logo {
                margin-right: 110px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            ul {
                list-style: none;
                display: flex;
                align-items: center;
                gap: 50px;

                li {
                    display: flex;
                    align-items: center;

                    &.accent {
                        a {
                            color: ${theme.colors.text.accent1};
                        }
                    }

                    a {
                        color: ${theme.colors.text.primary};
                        font-weight: 400;
                        padding: 2px 4px;
                        border-bottom: 2px solid transparent;
                        transition: all linear 0.1s;

                        &:hover {
                            color: ${theme.colors.text.accent2} !important;
                            border-bottom: 2px solid ${theme.colors.text.accent2};
                            text-decoration: none;
                        }

                        &.active {
                            color: ${theme.colors.text.accent2} !important;
                            border-bottom: 2px solid ${theme.colors.text.accent2};
                            text-decoration: none;
                        }
                    }
                }
            }
        }

        .right-side {
            button {
                box-shadow: ${theme.colors.text.accent2} 0px 0px 11px -1px;
                font-size: 16px;
                width: 220px;
                height: 38px;
                padding-top: 8px;

                &:hover {
                    background: linear-gradient(90deg, ${theme.colors.background.accent2} 21%, ${theme.colors.background.accent1} 100%);
                    color: white !important;
                    box-shadow: none;
                    border: none;
                }
            }

            .connect-wallet {
                opacity: 0.6;
            }
        }

        .sandwich-menu {
            display: none;
            cursor: pointer;
        }

        @media (max-width: 1400px) {
            .left-side {
                .logo {
                    margin-right: 50px;
                }
            }

            .left-side {
                ul {
                    gap: 30px;
                }
            }
        }

        @media (max-width: 1200px) {
            padding: 0 20px;

            .right-side {
                button {
                    display: none !important;
                }
            }

            .sandwich-menu {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;

                svg {
                    color: black;
                    width: 28px;
                    height: auto;
                }

                .doc-icon {
                    width: 22px;
                }
            }

            .left-side {
                ul {
                    display: none;
                }
            }

            .container {
                width: 100%;
                padding: 0;
            }
        }
    `
);

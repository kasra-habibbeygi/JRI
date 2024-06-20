import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const NavbarContainer = styled.nav(
    ({ theme }) => css`
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: ${theme.colors.background.secondary};
        gap: 20px;
        padding: 0 20px;
        position: relative;
        border-bottom: 1px solid ${theme.colors.border.primary};

        .mobile-sidebar-icon {
            display: none;
        }

        .add-test {
            height: 20px;
        }

        svg {
            width: 20px;
            height: auto;
            color: ${theme.colors.text.primary};
            cursor: pointer;
        }

        .notification {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 999;

            .drop-down {
                position: absolute;
                right: 0;
                top: 40px;
                width: 400px;
                padding: 10px;
                background-color: ${theme.colors.background.secondary};
                border-radius: 8px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                opacity: 0;
                transition: all 0.15s ease-out;
                pointer-events: none;

                &.active {
                    opacity: 1;
                    pointer-events: initial;
                    top: 54px;
                }

                p {
                    font-size: 14px;
                    font-weight: bold;
                    margin-bottom: 6px;
                }

                .row-field {
                    padding: 20px;
                    max-height: 400px;
                    overflow: auto;
                }

                .row {
                    border-bottom: 1px solid ${theme.colors.border.primary};
                    padding-bottom: 16px;
                    margin-bottom: 16px;
                    color: ${theme.colors.text.primary};

                    &:last-of-type {
                        border: none;
                        padding-bottom: 0;
                        margin-bottom: 0;
                    }

                    small {
                        color: ${theme.colors.text.secondary};
                        line-height: 17px;
                        display: block;
                    }
                }
            }

            .see-more {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                color: ${theme.colors.text.primary};
                margin-top: 24px;
                font-size: 14px;
                font-weight: 300;

                svg {
                    width: 16px;
                    height: 16px;
                }
            }
        }

        .avatar-field {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 999;

            .profile-drop-down {
                position: absolute;
                right: 0;
                top: 40px;
                min-width: 150px;
                width: max-content;
                padding: 6px;
                background-color: ${theme.colors.background.secondary};
                border-radius: 8px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                opacity: 0;
                transition: all 0.15s ease-out;
                pointer-events: none;
                display: flex;
                flex-direction: column;
                gap: 4px;

                &.active {
                    opacity: 1;
                    pointer-events: initial;
                    top: 54px;
                }
            }

            .item {
                display: flex;
                align-items: center;
                gap: 8px;
                color: ${theme.colors.text.primary};
                font-size: 14px;
                padding: 8px 10px;
                border-radius: 4px;
                font-weight: 500;
                transition: all linear 0.1s;
                cursor: pointer;

                &:hover {
                    background-color: ${theme.mode === 'light' ? '#f0f0f0' : '#2d2d2d'};
                }

                svg {
                    width: 20px;
                    height: auto;
                    color: ${theme.colors.background.accent};
                }

                &.red-one {
                    color: ${theme.colors.text.danger};

                    svg {
                        color: ${theme.colors.text.danger};
                    }
                }
            }
        }

        @media (max-width: 1200px) {
            .mobile-sidebar-icon {
                display: block;
                position: absolute;
                left: 20px;
            }
        }
    `
);

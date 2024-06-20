import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SideBarContainer = styled.aside<{ status: boolean }>(
    ({ theme, status }) => css`
        min-width: 270px;
        width: 270px;
        background-color: ${theme.colors.background.secondary};
        position: relative;
        border-right: 1px solid ${theme.colors.border.primary};

        .menu-sidebar {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: calc(100% - 100px);
        }

        .side-bar-content {
            height: 100vh;
            overflow: auto;
            width: 100%;
            position: sticky;
            top: 0;
        }

        .invite-member {
            display: flex;
            width: 100%;
            gap: 10px;
            align-items: center;
            margin: auto;
            svg {
                width: 20px;
            }
        }

        .logo-img {
            width: 40px;
            height: 40px;
            margin: 20px;
        }

        .bottom-list {
            border-top: 1px solid ${theme.colors.divider.primary};
        }

        .top-list,
        .bottom-list {
            list-style: none;

            .button-item {
                padding: 12px 20px;
            }

            .single-menu-item {
                display: flex;
                align-items: center;
                gap: 12px;
                color: ${theme.colors.text.primary};
                padding: 12px 20px;
                transition: all linear 0.1s;
                font-size: 14px;
                font-weight: 500;

                &:hover {
                    background-color: ${theme.colors.background.accent};
                    color: white;

                    svg {
                        color: white;
                    }
                }

                svg {
                    width: 18px;
                    height: 18px;
                    color: ${theme.colors.text.accent};
                    transition: all linear 0.1s;
                }
            }
        }

        .collapse-header {
            display: flex;
            align-items: center;
            padding: 12px 20px;
            justify-content: space-between;
            cursor: pointer;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
            font-size: 14px;

            &:hover {
                background-color: ${theme.colors.background.accent};
                color: white;

                span {
                    color: white;
                }

                svg {
                    color: white;
                }
            }

            span {
                display: flex;
                align-items: center;
                gap: 12px;
                color: ${theme.colors.text.primary};
                transition: all linear 0.1s;
                font-weight: 500;

                svg {
                    width: 18px;
                    height: 18px;
                    color: ${theme.colors.text.accent};
                    transition: all linear 0.1s;
                }
            }

            .angle {
                color: ${theme.colors.text.primary};
                width: 20px;
                height: 20px;
            }
        }

        @media (max-width: 1200px) {
            position: fixed;
            left: ${status ? '0' : '-270px'};
            top: 0;
            z-index: 1002;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }
    `
);

export const CollapseField = styled.ul<{ itemCount: number }>(
    ({ theme, itemCount }) => css`
        overflow: hidden;
        height: 0;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;

        &.active {
            height: calc(${itemCount}* 41px);
        }

        a {
            display: flex;
            align-items: center;
            gap: 12px;
            color: ${theme.colors.text.primary};
            padding: 12px 20px;
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
            position: relative;
            left: 0;
            font-size: 14px;
            padding: 10px 44px;

            &:hover {
                left: 10px;
            }
        }

        svg {
            width: 18px;
            height: 18px;
            color: ${theme.colors.text.accent};
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }
    `
);

export const MobileLayer = styled.div<{ status: boolean }>(
    ({ status }) => css`
        display: none;

        @media (max-width: 1200px) {
            display: block;
            cursor: pointer;
            opacity: ${status ? '1' : '0'};
            pointer-events: ${status ? 'initial' : 'none'};
            width: 100%;
            height: 100vh;
            background-color: black;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1001;
            background: rgb(0 0 0 / 20%);
            backdrop-filter: blur(4px);
            transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FullVersionContainer = styled.section<{ status: boolean }>(
    ({ theme, status }) => css`
        margin-top: 80px;
        margin-bottom: 120px;

        a {
            color: black;
        }

        .title {
            margin-bottom: 10px;
            display: block;
        }

        aside {
            width: 300px;
            position: relative;
            position: fixed;
            top: 100px;

            .active {
                color: ${theme.colors.text.accent2};
            }

            .main-list {
                list-style: none;
                overflow: auto;
                max-height: 80vh;
                padding-right: 10px;

                .category {
                    margin-top: 20px;
                    font-weight: 500;
                    cursor: initial;
                    font-size: 16px;

                    &:first-of-type {
                        margin: 0;
                        margin-bottom: 6px;
                    }
                }

                li {
                    cursor: pointer;
                    font-size: 14px;
                    margin-bottom: 6px;
                    transition: all linear 0.1s;
                    width: 100%;

                    a {
                        display: block;
                        width: 100%;
                    }

                    svg {
                        width: 12px;
                        height: auto;
                        position: absolute;
                        right: 0;
                    }
                }

                .field {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 6px 12px;
                    border-radius: 4px;
                    margin-bottom: 2px;
                    width: 100%;

                    &:hover {
                        background-color: #8a63d21f;

                        a {
                            color: ${theme.colors.text.accent2};
                        }
                    }
                }
            }
        }

        article {
            width: calc(100% - 350px);
            margin-left: auto;
            display: block;

            h3 {
                font-size: 32px;
                margin-bottom: 4px;
            }

            h4 {
                font-size: 20px;
                margin-bottom: 4px;
            }

            p {
                margin-bottom: 26px;
                line-height: 28px;
                font-size: 16px;
                font-weight: 300;
            }

            img {
                width: 100%;
                border-radius: 6px;
            }

            .roadmap-field {
                margin: 80px 0;
                display: flex;
                flex-direction: column;
                gap: 100px;

                img {
                    width: 50%;
                    margin: auto;
                    border-radius: 0;
                }
            }

            ul {
                padding-left: 36px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                line-height: 28px;
                margin-bottom: 26px;
                font-weight: 300;
            }

            .team-field {
                li {
                    a {
                        color: ${theme.colors.text.accent1};
                        font-weight: 500;
                        text-decoration: underline;
                        display: inline-block;
                        margin-left: 6px;
                    }
                }
            }
        }

        @media (max-width: 1200px) {
            aside {
                position: fixed;
                top: 0;
                left: ${status ? '0' : '-350px'};
                min-width: 300px;
                width: 300px;
                height: 100vh;
                background-color: white;
                z-index: 99999;
                transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;

                .main-list {
                    top: 40px;
                    max-height: 100%;
                    padding: 20px;
                }
            }

            article {
                width: 100%;
            }
        }
    `
);

export const MainList = styled.ol(
    () => css`
        position: relative;
        left: 20px;
        list-style: none;
        width: calc(100% - 20px);

        &::before {
            position: absolute;
            content: '';
            width: 1px;
            height: 100%;
            background-color: #dddddd;
            top: 0;
            left: 0;
        }

        .field {
            border-radius: 0 4px 4px 0;
        }
    `
);

export const LayerContainer = styled.span<{ status: boolean }>(
    ({ status }) => css`
        position: fixed;
        transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: black;
        opacity: ${status ? '0.6' : '0'};
        pointer-events: ${status ? 'initial' : 'none'};
        cursor: pointer;
        z-index: 99999;
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FullVersionContainer = styled.section(
    () => css`
        display: flex;
        gap: 80px;
        margin-top: 80px;
        margin-bottom: 120px;

        a {
            color: black;
        }

        aside {
            min-width: 350px;

            .main-list {
                list-style: none;
                position: sticky;
                top: 40px;
                overflow: auto;
                max-height: 82vh;
                padding-right: 10px;

                .category {
                    margin-top: 20px;
                    font-weight: 500;
                    cursor: initial;
                    font-size: 16px;

                    &:first-child {
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
                        background-color: #ededed;
                    }
                }
            }
        }

        article {
            width: 100%;
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

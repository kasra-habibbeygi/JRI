import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FullVersionContainer = styled.section(
    () => css`
        display: flex;
        gap: 140px;
        margin-top: 80px;
        margin-bottom: 120px;

        aside {
            min-width: 250px;

            .main-list {
                list-style: none;
                position: sticky;
                top: 40px;
                overflow: auto;
                max-height: 82vh;

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

                    svg {
                        width: 12px;
                        height: auto;
                    }
                }

                .field {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 6px 12px;
                    border-radius: 4px;
                    margin-bottom: 2px;

                    &:hover {
                        background-color: #ededed;
                    }
                }
            }
        }

        article {
            width: 100%;
            display: block;
        }
    `
);

export const MainList = styled.ol<{ index: number }>(
    ({ index }) => css`
        position: relative;
        left: 20px;
        list-style: none;
        width: calc(100% - 20px * ${index});

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

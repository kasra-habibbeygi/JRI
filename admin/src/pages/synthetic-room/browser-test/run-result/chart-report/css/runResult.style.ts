import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RunResultContainer = styled.div(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: auto 260px;
        gap: 20px;

        .main-result {
            margin-top: 20px;
        }

        .parent {
            position: sticky;
            top: 20px;
        }

        .run-result-content {
            display: flex;
            margin-top: 20px;
            flex-direction: column;
            gap: 10px;
            right: 40px;

            h4 {
                color: ${theme.colors.text.primary};
                margin-bottom: 20px;
            }

            .filter-list {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                margin-bottom: 20px;

                p {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    gap: 4px;
                    max-height: 30px;
                    background-color: ${theme.colors.background.tertiary};
                    border-radius: 4px;
                    padding: 4px 8px;
                    color: ${theme.colors.text.primary};

                    span {
                        font-size: 12px;
                        font-weight: 500;
                        width: max-content;
                    }

                    svg {
                        width: 16px;
                        height: 16px;
                    }
                }
            }

            ul {
                list-style: none;

                li {
                    &:last-child a {
                        border-bottom: none;
                    }
                }

                a {
                    color: ${theme.colors.text.primary};
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid ${theme.colors.border.primary};
                    padding: 6px;

                    svg {
                        width: 26px;
                        display: inline-block;
                        margin: 0;
                        border-radius: 4px;
                        padding: 4px;
                    }

                    p {
                        span {
                            display: block;
                            font-size: 14px;
                            font-weight: 500;
                        }

                        small {
                            font-size: 13px;
                        }
                    }
                }
            }
        }

        @media (max-width: 950px) {
            grid-template-columns: 1fr;
        }
        @media (max-width: 550px) {
            .run-result-content {
                .filter-list {
                    grid-template-columns: 1fr;
                }
            }
        }
    `
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SecurityContainer = styled.section(
    ({ theme }) => css`
        display: flex;
        gap: 100px;

        .left-side {
            min-width: 550px;
            display: flex;
            flex-direction: column;

            h3 {
                color: ${theme.colors.text.accent1};
                font-size: 36px;
            }

            small {
                font-size: 20px;
                font-weight: 500;
                display: block;
                margin-bottom: 78px;
            }

            .person-img {
                margin: 0 auto;
                width: 300px;
                margin-bottom: 98px;
                display: block;
            }

            .road-map {
                width: 100%;
            }
        }

        a {
            color: ${theme.colors.text.accent1};

            &:hover {
                text-decoration: underline;
            }
        }

        .right-side {
            p {
                font-size: 16px;
                line-height: 28px;
            }

            b {
                margin-top: 32px;
                margin-bottom: 20px;
                display: block;
                font-size: 20px;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 12px;
                font-size: 20px;

                .accent-1 {
                    color: ${theme.colors.text.accent2};
                }
            }
        }

        @media (max-width: 1200px) {
            .left-side {
                min-width: 300px;
            }
        }

        @media (max-width: 992px) {
            flex-direction: column;

            .left-side .road-map {
                width: 50%;
                margin: auto;
            }

            .left-side {
                min-width: unset;
            }
        }

        @media (max-width: 760px) {
            gap: 50px;

            .left-side {
                min-width: unset;

                h3 {
                    font-size: 20px;
                    margin-bottom: 20px;
                }

                small {
                    font-size: 16px;
                }
            }
        }
    `
);

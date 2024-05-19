import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const HeaderContainer = styled.section(
    ({ theme }) => css`
        margin-top: 80px;

        header {
            margin-bottom: 140px;

            h3 {
                font-size: 36px;
                color: ${theme.colors.text.accent1};
                margin-bottom: 24px;
            }

            p {
                font-size: 20px;
                line-height: 30px;
            }
        }

        .card-container {
            margin-bottom: 120px;
            padding-bottom: 80px;
            border-bottom: 1px solid #0f0f0f;

            h3 {
                font-size: 36px;
                margin-bottom: 36px;
            }

            .card-field {
                display: flex;
                flex-wrap: wrap;
                gap: 40px;

                .card {
                    background-color: #f0f2f5;
                    padding: 32px 48px;
                    flex: 1 0 30%;

                    .icon-field {
                        height: 80px;
                    }

                    svg {
                        width: 54px;
                        height: auto;
                        margin-bottom: 70px;
                    }

                    b {
                        font-size: 20px;
                        display: block;
                        margin-bottom: 28px;
                        line-height: 26px;
                        height: 60px;
                    }

                    p {
                        font-size: 16px;
                        line-height: 28px;
                    }
                }
            }
        }
    `
);

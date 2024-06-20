import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const AddTestTypeContainer = styled.div(
    ({ theme }) => css`
        .test-types {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;

            a {
                color: ${theme.colors.text.primary};
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                padding: 16px;
                border-radius: 8px;

                p {
                    font-weight: 500;
                }

                svg {
                    width: 30px;
                    color: ${theme.colors.background.accent};
                }
            }
        }

        @media (max-width: 550px) {
            header {
                h3 {
                    font-size: 18px;
                }

                svg {
                    width: 24px;
                }
            }

            .test-types {
                grid-template-columns: repeat(1, 1fr);

                a {
                    p {
                        font-size: 14px;
                    }

                    svg {
                        width: 24px;
                    }
                }
            }
        }
    `
);

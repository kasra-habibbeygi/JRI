import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const GetStartedContainer = styled.div(
    ({ theme }) => css`
        .main-content {
            width: 100%;
            display: flex;
            gap: 40px;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
        }

        .main-container {
            width: 100%;
            height: 300px;
            min-width: 250px;
            color: ${theme.colors.text.primary};
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 30px;
            align-items: center;

            img {
                width: 160px;
                height: 160px;
            }
        }

        a {
            font-size: 14px;
            font-weight: 600;
            padding: 6px 16px;
            min-height: 30px;
            line-height: 24px;
            height: 36px;
            border-radius: 4px;
            color: white !important;
            background-color: ${theme.shared.success};
        }

        @media (max-width: 650px) {
            .main-content {
                flex-direction: column;
                gap: 14px;
            }

            a {
                font-weight: 500;
            }

            .main-container {
                height: 250px;
                gap: 14px;
                img {
                    width: 140px;
                    height: 140px;
                }
            }
        }
    `
);

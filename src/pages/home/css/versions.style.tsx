import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const VersionsContainer = styled.section(
    () => css`
        background: linear-gradient(90deg, rgba(137, 99, 209, 1) 21%, rgba(5, 45, 255, 1) 100%);
        height: 500px;
        display: flex;

        .left-side {
            width: 40%;
            border-right: 10px solid white;
            padding: 60px 80px;
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 36px;
            color: white;
        }

        .right-side {
            padding: 60px 80px;
            font-size: 36px;
            color: white;

            button {
                border: 1px solid white;
                color: white !important;
                width: 156px;
                height: 32px;
                font-size: 16px !important;
                font-weight: 300 !important;
            }
        }

        .mrl-container {
            width: 100%;
            height: 500px;
        }

        @media (max-width: 1200px) {
            .left-side {
                padding: 30px 20px;
            }

            .right-side {
                padding: 30px 20px;
            }
        }

        @media (max-width: 900px) {
            flex-direction: column;

            h3 {
                font-size: 20px;
                text-align: left;
            }

            .left-side {
                align-items: flex-start;
                width: 100%;
                border-right: 0;
                border-bottom: 8px solid white;
                height: 200px;
            }
        }
    `
);

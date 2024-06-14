import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StickerContainer = styled.div(
    () => css`
        position: fixed;
        bottom: 0;
        right: 50px;
        border-radius: 20px 20px 0 0;
        background-color: white;
        border: 1px solid #8a63d2;
        padding: 12px;
        z-index: 999;
        width: 320px;
        box-shadow: #7a5cd7 0px 4px 12px;

        p {
            margin-bottom: 16px;
            text-align: center;
            width: 100%;
            color: #052dff;
        }

        div {
            display: flex;
            align-items: center;
            gap: 12px;

            a {
                display: flex;
                align-items: center;
                gap: 10px;
                color: white;
                border-radius: 8px;
                width: 100%;
                justify-content: center;
                height: 36px;

                &:first-of-type {
                    background-color: #27272a;
                }
                &:last-of-type {
                    background-color: #4a57bb;
                }

                svg {
                    width: 20px;
                    height: auto;
                }
            }
        }

        @media (max-width: 600px) {
            width: 92%;
            right: 4%;
        }
    `
);

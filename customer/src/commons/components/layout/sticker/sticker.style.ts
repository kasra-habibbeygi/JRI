import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const StickerContainer = styled.div(
    () => css`
        position: fixed;
        bottom: 98px;
        z-index: 999;
        display: flex;
        justify-content: center;
        width: 100%;
        max-height: 0;

        .container {
            display: flex;
            justify-content: flex-end;
            max-height: 0;
        }

        .disabled {
            pointer-events: none;
            opacity: 0.5;
        }

        .sticky-field {
            border-radius: 20px 20px 0 0;
            background-color: white;
            border: 1px solid #8a63d2;
            padding: 12px;
            width: 320px;
            box-shadow: #7a5cd7 0px 4px 12px;
            height: 100px;

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
        }

        p {
            margin-bottom: 16px;
            text-align: center;
            width: 100%;
            color: #052dff;
        }

        @media (max-width: 600px) {
            .sticky-field {
                width: 100%;
            }
        }
    `
);

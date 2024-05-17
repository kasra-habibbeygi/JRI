import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FooterContainer = styled.footer(
    () => css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 32px;

        small {
            font-size: 16px;
            font-weight: 400;
        }

        div {
            display: flex;
            align-items: center;
            gap: 40px;

            svg {
                width: 20px;
                height: 20px;
            }
        }
    `
);

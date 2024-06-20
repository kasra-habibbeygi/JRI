import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const LayoutContainer = styled.section(
    () => css`
        display: flex;

        .main-content {
            width: calc(100% - 270px);
        }

        .section-content-field-layout {
            padding: 40px;
        }

        .loader {
            width: calc(100% - 270px);
            height: calc(100vh - 100px);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: all linear 0.5s;
            position: fixed;
            top: 50px;
            right: 0;

            &.show {
                opacity: 1;
            }
        }

        .hide {
            display: none;
        }

        @media (max-width: 1200px) {
            .main-content {
                width: 100%;
            }
        }

        @media (max-width: 600px) {
            .section-content-field-layout {
                padding: 20px;
            }
        }
    `
);

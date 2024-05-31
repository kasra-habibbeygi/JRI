import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MobileNavbarContainer = styled.aside<{ status: boolean }>(
    ({ theme, status }) => css`
        position: fixed;
        top: 0;
        left: ${status ? '0' : '-300px'};
        width: 280px;
        height: 100vh;
        background-color: white;
        z-index: 99999;
        transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;

        ul {
            list-style: none;

            a {
                display: flex;
                padding: 12px 20px;
                color: black;

                &.active {
                    color: ${theme.colors.text.accent1};
                }
            }
        }
    `
);

export const LayerContainer = styled.span<{ status: boolean }>(
    ({ status }) => css`
        position: fixed;
        transition: all cubic-bezier(0.25, 0.8, 0.25, 1) 0.5s;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: black;
        opacity: ${status ? '0.6' : '0'};
        pointer-events: ${status ? 'initial' : 'none'};
        cursor: pointer;
        z-index: 99999;
    `
);

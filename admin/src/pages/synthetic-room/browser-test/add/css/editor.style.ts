import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const EditorContainer = styled.div<{ matches: boolean }>(
    ({ theme, matches }) => css`
        display: flex;
        width: 100%;
        overflow: hidden;
        height: ${!matches ? '100%' : '100vh'};
        border: 1px solid ${theme.colors.border.primary};
        border-radius: 20px;
        margin-bottom: 20px;

        .splitter {
            width: 4px;
            background-color: ${theme.colors.border.primary};
        }
    `
);
export const NextStepContainer = styled.div(
    () => css`
        margin-top: 20px;
        button {
            margin-left: auto;
        }
    `
);

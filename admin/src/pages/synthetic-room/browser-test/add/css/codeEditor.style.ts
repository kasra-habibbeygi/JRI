import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CodeEditorContainer = styled.div(
    ({ theme }) => css`
        background-color: #1e1e1e;
        padding: 20px;
        color: ${theme.shared.ghost};
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .actions {
            background-color: transparent;
            min-width: max-content;
            border: 0.5px solid ${theme.shared.ghost};
            padding: 4px 6px;

            svg {
                color: ${theme.shared.ghost};
                width: 16px;
                height: 16px;
            }
        }

        .action-bar {
            border-top: 1px solid ${theme.colors.border.primary};
            display: flex;
            gap: 10px;
            margin-top: 10px;
            padding-top: 10px;
        }

        @media (max-width: 350px) {
            .action-bar {
                flex-wrap: wrap;
                min-height: 80px;
            }
        }
    `
);

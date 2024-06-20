import { Dialog } from '@mui/material';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ModalContainer = styled(Dialog)(
    ({ theme }) => css`
        .MuiModal-backdrop {
            background: rgb(0 0 0 / 20%);
            backdrop-filter: blur(4px);
        }

        .MuiPaper-elevation {
            background-color: ${theme.colors.background.secondary};
            padding: 20px;
            overflow-x: hidden;
        }

        @media (max-width: 700px) {
            .MuiPaper-elevation {
                padding: 16px;
            }
        }
    `
);

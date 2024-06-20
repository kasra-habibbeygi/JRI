import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SwitchContainer = styled.div<{ haveLabel: boolean }>(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        gap: 0;
        color: ${theme.colors.text.primary};

        .MuiSwitch-root {
            height: 22px;
            width: 38px;
            padding: 0;
            overflow: visible;
        }

        .MuiSwitch-switchBase {
            top: -6.5px;
            left: -5px;
        }

        .MuiSwitch-track {
            border-radius: 50px;
            background-color: ${theme.mode === 'dark' ? '#4f4f4f' : '#ccc'};
        }

        .MuiSwitch-thumb {
            width: 16px;
            height: 16px;
            background-color: ${theme.mode === 'dark' ? '#4f4f4f' : '#ccc'};
        }

        .Mui-checked {
            transform: translateX(14px) !important;

            .MuiSwitch-thumb {
                background-color: ${theme.shared.success} !important;
            }
        }

        .Mui-checked + .MuiSwitch-track {
            background-color: ${theme.shared.success} !important;
        }

        label {
            cursor: pointer;
        }
    `
);

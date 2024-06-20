import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SelectContainer = styled.div(
    ({ theme }) => css`
        width: 100%;
        position: relative;

        label {
            color: ${theme.colors.text.secondary};
            font-size: 14px;
            display: block;
            margin-bottom: 4px;
        }

        .select-field {
            width: 100%;
            color: white;
            background-color: transparent;
            border-radius: 30px;
            padding: 10px 12px;
            height: 38px;
            border: 1px solid ${theme.colors.border.primary};
            transition: all linear 0.1s;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;

            .placeholder {
                color: ${theme.colors.text.secondary};
                font-size: 14px;
            }
        }

        .select-arrow {
            width: 16px;
            height: 16px;
            color: ${theme.colors.text.secondary};
            transform: rotate(90deg);
            position: absolute;
            right: 12px;
            transition: all 0.15s ease-out;
        }

        .drop-down-field {
            width: 100%;
            position: absolute;
            top: 60px;
            border-radius: 8px;
            padding: 6px;
            background: ${theme.mode === 'dark' ? '#5a5a5a29' : '#ffffff2b'};
            backdrop-filter: blur(10px);
            box-shadow: #0000001a 0px 2px 8px 0px;
            z-index: 1000;
            transition: all 0.15s ease-out;
            opacity: 0;
            pointer-events: none;
            max-height: 250px;
            overflow: auto;

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 6px;

                li {
                    padding: 10px 12px;
                    border-radius: 4px;
                    color: ${theme.colors.text.primary};
                    font-size: 14px;
                    cursor: pointer;
                    transition: all linear 0.1s;

                    &.active-row {
                        background-color: #ffffff1a;
                    }

                    &:hover {
                        background-color: #ffffff0d;
                        backdrop-filter: blur(1.5px);
                    }
                }
            }
        }

        &.select-active {
            .select-arrow {
                transform: rotate(0);
            }
        }

        .multi-select-pill {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 6px;
            border-radius: 80px;
            background-color: ${theme.colors.background.tertiary};
            gap: 10px;

            svg {
                width: 16px;
                height: 16px;
                cursor: pointer;
                color: ${theme.colors.text.danger};
            }
        }

        .multi-select-pill-container {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
        }

        .empty-field-select {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            color: ${theme.colors.text.secondary};
            font-size: 14px;
            padding: 20px 0;

            svg {
                width: 40px;
                height: 40px;
            }
        }
    `
);

export const SelectDropDownContainer = styled.div<{ selectPosition: { width: number; left: number; top: number } }>(
    ({ theme, selectPosition }) => css`
        &.drop-down-field {
            width: ${selectPosition.width}px;
            position: absolute;
            top: calc(${selectPosition.top}px - 20px);
            border-radius: 8px;
            padding: 6px;
            background: ${theme.mode === 'dark' ? '#5a5a5a29' : '#ffffff2b'};
            backdrop-filter: blur(10px);
            box-shadow: #0000001a 0px 2px 8px 0px;
            z-index: 9999999999999;
            transition: all 0.15s ease-out;
            opacity: 0;
            pointer-events: none;
            max-height: 250px;
            overflow: auto;
            left: ${selectPosition.left}px;

            &.drop-down-active {
                top: calc(${selectPosition.top}px + 10px);
                left: ${selectPosition.left}px;
                opacity: 1;
                pointer-events: initial;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 6px;

                li {
                    padding: 10px 12px;
                    border-radius: 4px;
                    color: ${theme.colors.text.primary};
                    font-size: 14px;
                    cursor: pointer;
                    transition: all linear 0.1s;

                    &.active-row {
                        background-color: #ffffff1a;
                    }

                    &:hover {
                        background-color: #ffffff0d;
                        backdrop-filter: blur(1.5px);
                    }
                }
            }
        }

        .empty-field-select {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            color: ${theme.colors.text.secondary};
            font-size: 14px;
            padding: 20px 0;

            svg {
                width: 40px;
                height: 40px;
            }
        }

        .search-field {
            margin-bottom: 8px;

            input {
                border-radius: 6px;
            }
        }
    `
);

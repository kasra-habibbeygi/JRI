/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { Global } from '@emotion/react';

const GlobalStyles = ({ theme }: { theme: any }) => {
    return (
        <Global
            styles={css`
                * {
                    font-family: 'Product Sans !important';
                }

                body {
                    background-color: ${theme.mode === 'light' ? '#F7F7F7' : '#141416'};
                }

                ::-webkit-scrollbar-thumb {
                    background-color: ${theme.mode === 'light' ? '#ebebeb' : '#4b4b4b'};
                }

                ::-webkit-scrollbar-thumb:hover {
                    background-color: ${theme.mode === 'light' ? '#ebebeb' : '#5d5d5d'};
                }

                .container {
                    background-color: ${theme.colors.background.secondary};
                    padding: 10px 20px;
                    border-radius: 8px;
                    box-shadow:
                        rgb(0 0 0 / 2%) 0px 1px 3px,
                        rgb(0 0 0 / 0%) 0px 1px 2px;
                }

                .modal-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: ${theme.colors.text.primary};
                    margin-bottom: 20px;

                    svg {
                        width: 26px;
                        height: 26px;
                        cursor: pointer;
                    }

                    h3 {
                        font-size: 20px;
                    }
                }

                .MuiPickersPopper-paper {
                    background: ${theme.mode === 'dark' ? '#5a5a5a29' : '#ffffff2b'};
                    backdrop-filter: blur(10px);
                    color: ${theme.colors.text.primary};
                    border-radius: 8px;

                    * {
                        font-family: 'Product Sans';
                    }

                    .MuiPickersDay-root,
                    .MuiDayCalendar-weekDayLabel,
                    .MuiSvgIcon-root {
                        color: ${theme.colors.text.primary};
                    }

                    .Mui-selected {
                        color: #fff !important;
                        background-color: #3570fa !important;
                    }
                }

                .table_row_pill {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4px 8px;
                    width: max-content;
                    margin: auto;
                    border-radius: 50px;
                    font-size: 14px;

                    &.red {
                        background-color: ${theme.colors.background.danger};
                        color: ${theme.colors.text.danger};
                    }

                    &.green {
                        background-color: ${theme.colors.background.success};
                        color: ${theme.colors.text.success};
                    }

                    &.yellow {
                        background-color: ${theme.colors.background.warning};
                        color: ${theme.colors.text.warning};
                    }
                }
            `}
        />
    );
};

export default GlobalStyles;

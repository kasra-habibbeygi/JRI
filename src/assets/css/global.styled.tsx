/* eslint-disable @typescript-eslint/no-explicit-any */
import { css } from '@emotion/react';
import { Global } from '@emotion/react';

const GlobalStyles = ({ theme, direction }: { theme: any; direction: 'rtl' | 'ltr' }) => {
    return (
        <Global
            styles={css`
                * {
                    font-family: ${direction === 'rtl' ? 'iranSans !important' : 'Product Sans !important'};
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
            `}
        />
    );
};

export default GlobalStyles;

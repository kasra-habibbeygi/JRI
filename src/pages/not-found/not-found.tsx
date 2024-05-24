import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NotFoundContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
        flex-direction: column;

        h1 {
            font-size: 50px;
            color: ${theme.colors.text.accent1};
        }

        p {
            font-size: 30px;
            color: ${theme.colors.text.primary};
            font-weight: 200;
        }
    `
);

const NotFound = () => {
    return (
        <NotFoundContainer>
            <h1>404</h1>
            <p>There is nothing here ...</p>
        </NotFoundContainer>
    );
};

export default NotFound;

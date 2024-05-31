/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo } from 'react';
import { Helmet } from 'react-helmet';

// Types
interface IHelmetTmp {
    title: string;
}

const HelmetTmp: FC<IHelmetTmp> = ({ title }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta property='og:title' content='Just Read It' />
            <meta
                property='og:description'
                content='Join us to support innovative projects and become part of a decentralized funding revolution!'
            />
            <meta property='og:image' content='link.jpg' />
        </Helmet>
    );
};

export default memo(HelmetTmp);

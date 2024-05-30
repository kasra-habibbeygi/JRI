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
        </Helmet>
    );
};

export default memo(HelmetTmp);

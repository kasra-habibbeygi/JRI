import { useEffect } from 'react';

// Components
import { Contracts, Header, Security, Trust, WhiteListTable } from './components';
import { Helmet } from 'commons/components';

const CoolVersion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Helmet title='JRI | Cool Version' />
            <Header />
            <Contracts />
            <WhiteListTable />
            <Security />
            <Trust />
        </main>
    );
};

export default CoolVersion;

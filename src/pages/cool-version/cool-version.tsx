import { useEffect } from 'react';

// Components
import { Contracts, Header, Security, Trust, WhiteListTable } from './components';

const CoolVersion = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Header />
            <Contracts />
            <WhiteListTable />
            <Security />
            <Trust />
        </main>
    );
};

export default CoolVersion;

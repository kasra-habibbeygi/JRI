import { useEffect } from 'react';

// Components
import { Header, List } from './components';
import { Helmet } from 'commons/components';

const Mint = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Helmet title='JRI | Mint' />
            <Header />
            <List />
        </main>
    );
};

export default Mint;

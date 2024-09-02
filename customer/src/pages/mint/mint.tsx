import { useEffect } from 'react';

// Components
import { Header, List } from './components';
import { Helmet } from 'commons/components';
import OnLoad from 'pages/on-load';

const Mint = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Helmet title='JRI | Mint' />
            <OnLoad isCover={true} />
            <Header />
            <List />
        </main>
    );
};

export default Mint;

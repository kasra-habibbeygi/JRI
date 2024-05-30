import { useEffect } from 'react';

// Components
import { Header, List } from './components';

const Mint = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <List />
        </>
    );
};

export default Mint;

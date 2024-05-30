import { useEffect } from 'react';

// Components
import { FAQ, Header, Versions } from './components';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Header />
            <Versions />
            <FAQ />
        </main>
    );
};

export default Home;

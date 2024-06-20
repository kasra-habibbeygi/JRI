import { useEffect } from 'react';

// Components
import { FAQ, Header, Versions } from './components';
import { Helmet } from 'commons/components';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <Helmet title='Just Read It' />
            <Header />
            <Versions />
            <FAQ />
        </main>
    );
};

export default Home;

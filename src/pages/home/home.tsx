// Components
import { FAQ, Header, Versions } from './components';

const Home = () => {
    return (
        <main className='container'>
            <Header />
            <Versions />
            <FAQ />
        </main>
    );
};

export default Home;

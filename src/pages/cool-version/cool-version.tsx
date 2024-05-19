// Components
import { Contracts, Header, Security, Trust, WhiteListTable } from './components';

const CoolVersion = () => {
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

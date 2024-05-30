// Assets
import { WhiteListTableContainer } from '../css';

// Components
import { WhiteList } from 'commons/components';

const WhiteListTable = () => {
    return (
        <WhiteListTableContainer className='container'>
            <h3>The Three Whitelist Tiers</h3>
            <ul>
                <li>
                    <b>OG/GOLD</b>
                    <p>
                        Reserved for the top 100 participants with the highest points. First 24 hours Each participant can mint 1 JRI
                        Contract 0.005 ETH.
                    </p>
                </li>
                <li>
                    <b>Silver</b>
                    <p>
                        Comprising 1000 individuals ranked 101st to 1100th. Following 24 hours Each participant can mint 1 JRI Contract for
                        0.01 ETH.
                    </p>
                </li>
                <li>
                    <b>Bronze</b>
                    <p>
                        Open to 10,000 participants ranked 1101st to 11,100th. Final 24 hours Each participant can mint 1 JRI Contract for
                        0.02 ETH.
                    </p>
                </li>
            </ul>
            <WhiteList />
        </WhiteListTableContainer>
    );
};

export default WhiteListTable;

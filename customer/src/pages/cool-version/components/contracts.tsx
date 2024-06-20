// Assets
import { ContractsContainer } from '../css/contracts.style';

const Contracts = () => {
    return (
        <ContractsContainer className='container'>
            <header>
                <h3>Phase 0</h3>
                <h4>Distribution of JRI Contract NFTs</h4>
                <p>
                    Phase 0 of the JUST READ IT (JRI) project focuses on distributing JRI Contracts NFTs across three whitelist tiers: Gold,
                    Silver, and Bronze. These tiers offer varied benefits and privileges to participants. Among the 11,100 JRI Contracts,
                    1,090 are special NFTs with guaranteed values, including
                </p>
            </header>
            <ol>
                <li>
                    <b>1 x 5 ETH OG Tier Contract</b>
                    <small>
                        This exclusive JRI Contract guarantees a minimum value of 5 ETH. It will be awarded to the top-ranking OG with the
                        highest points.
                    </small>
                </li>
                <li>
                    <b>1 x 4 ETH OG Tier Contract</b>
                    <small>
                        This exclusive JRI Contract guarantees a minimum value of 4 ETH. It will be awarded to the second-rank OG.
                    </small>
                </li>
                <li>
                    <b>1 x 3 ETH OG Tier Contract</b>
                    <small>This exclusive JRI Contract guarantees a minimum value of 3 ETH. It will be awarded to the third-rank OG.</small>
                </li>
                <li>
                    <b>1 x 2 ETH OG Tier Contract</b>
                    <small>
                        This exclusive JRI Contract guarantees a minimum value of 2 ETH. It will be awarded to the fourth-rank OG.
                    </small>
                </li>
            </ol>
            <ol>
                <li>
                    <b>6 x 1 ETH OG Tier Contract</b>
                    <small>
                        Each of these exclusive JRI Contracts guarantees a minimum value of 1 ETH. They will be awarded to the individuals
                        ranked 5th to 10th.
                    </small>
                </li>
                <li className='gold-one'>
                    <b>90 x 0.5 ETH Gold Tier Contracts</b>
                    <small>
                        Each of these exclusive JRI Contracts guarantees a minimum value of 0.5 ETH. They will be awarded to the individuals
                        ranked 11th to 100th.
                    </small>
                </li>
                <li className='ghost-one'>
                    <b>90 x 0.2 ETH Silver Tier Contracts</b>
                    <small>
                        Randomly awarded to 90 participants from the Silver Tier, each contract ensures a minimum value of 0.2 ETH. This
                        gives Silver Tier members a 9% chance of winning.
                    </small>
                </li>
                <li className='bronze-one'>
                    <b>900 x 0.1 ETH Bronze Tier Contracts</b>
                    <small>
                        Randomly awarded to 900 participants from Bronze Tier, each contract ensures a minimum value of 0.1 ETH. This gives
                        Bronze Tier members a 9% chance of winning.
                    </small>
                </li>
            </ol>
        </ContractsContainer>
    );
};

export default Contracts;

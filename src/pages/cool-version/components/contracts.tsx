// Assets
import { ContractsContainer } from '../css/contracts.style';

const Contracts = () => {
    return (
        <ContractsContainer className='container'>
            <header>
                <h3>Phase 1</h3>
                <h4>Distribution of JRI Contract NFTs</h4>
                <p>
                    Phase 1 of the JUST READ IT (JRI) project focuses on distributing JRI Contract NFTs across three whitelist tiers: WL1,
                    WL2, and WL3. These tiers offer varied benefits and privileges to participants. Among the 11,100 JRI Contracts, 540 are
                    special NFTs with guaranteed values, including:
                </p>
            </header>
            <ol>
                <li>
                    <b>1 x 5 ETH OG Tier Contract</b>
                    <small>
                        This exclusive JRI Contract guarantees a minimum value of 5ETH. It will be awarded to the highest-ranked individual
                        in the OG ranking with the highest points.
                    </small>
                </li>
                <li>
                    <b>1 x 4 ETH OG Tier Contract</b>
                    <small>This exclusive JRI Contract guarantees a minimum value of 4ETH. It will be awarded to the second-rank OG.</small>
                </li>
                <li>
                    <b>1 x 3 ETH OG Tier Contract</b>
                    <small>This exclusive JRI Contract guarantees a minimum value of 3ETH. It will be awarded to the third-rank OG.</small>
                </li>
                <li>
                    <b>2 x 2 ETH OG Tier Contract</b>
                    <small>
                        This exclusive JRI Contract guarantees a minimum value of 2ETH. It will be randomly awarded to two of the other
                        seven individuals of OGs.
                    </small>
                </li>
            </ol>
            <ol>
                <li className='black-one'>
                    <b>95 x 1 ETH Black Tier Contract</b>
                    <small>
                        Each of these contracts guarantees a minimum value of 1ETH, distributed to all WL1 participants except those who
                        receive the 5 OG contracts.
                    </small>
                </li>
                <li className='gold-one'>
                    <b>40 x 0.5 ETH Gold Tier Contracts</b>
                    <small>Randomly awarded to 40 participants from WL2, each contract ensures a minimum value of 0.5ETH.</small>
                </li>
                <li className='ghost-one'>
                    <b>400 x 0.1 ETH Silver Tier Contracts</b>
                    <small>This exclusive JRI Contract guarantees a minimum value of 3ETH. It will be awarded to the third-rank OG.</small>
                </li>
            </ol>
        </ContractsContainer>
    );
};

export default Contracts;

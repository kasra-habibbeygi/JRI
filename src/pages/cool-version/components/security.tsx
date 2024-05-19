// Assets
import { SecurityContainer } from '../css';

const Security = () => {
    return (
        <SecurityContainer className='container'>
            <div className='left-side'>
                <h3>Securing Your Spot</h3>
                <small>Navigating Whitelist Tiers for Exclusive Benefits</small>
            </div>
            <article className='right-side'>
                <p>
                    This phase features three whitelist tiers: WL1, WL2, and WL3, each with unique entry requirements. WL1 demands 2000
                    points and WL2 and WL3 need 600 and 400 points, respectively, for entry (You can find more details about the scoring
                    methods on our Discord server.). In WL1, the top 10 participants with the highest points become our OGs, enjoying
                    special privileges.
                </p>
                <b className='mt'>Minting Details</b>
                <ul>
                    <li>
                        <p className='accent-1'>WL1 Minting</p>
                        <small>1st Day / Each participant can mint 1 JRI Contract for 0.005 ETH.</small>
                    </li>
                    <li>
                        <p className='accent-1'>WL2 Minting</p>
                        <small>2nd Day / Each participant can mint 1 JRI Contract for 0.01 ETH.</small>
                    </li>
                    <li>
                        <p className='accent-1'>WL3 Minting</p>
                        <small>3rd Day / Each participant can mint 1 JRI Contract for 0.02 ETH.</small>
                    </li>
                </ul>
                <b className='mt'>Day 1 Floor-Swiping Strategy</b>
                <p>
                    WL1 participants will play a crucial role in stabilizing the market and enhancing the value of our collection through
                    our innovative floor-swiping strategy. Upon the minting on day one, the project treasury will already have accumulated
                    0.5 ETH. With this initial earning, the treasury's total funds will amount to 1 ETH. This entire sum will then be
                    allocated among a team of 10 OGs. These select individuals will strategically purchase JRI Contracts listed below the
                    WL2 minting price of 0.01 ETH, effectively contributing to market stabilization and bolstering the floor price. The team
                    will focus on swiping the first 100 contracts listed below the designated price.
                </p>
                <b className='mt'>Day 2 Floor-Swiping Strategy</b>
                <p>
                    As day two of minting begins, the treasury will earn an additional 10 ETH from the minting of 1,000 contracts priced at
                    0.01 ETH each.This entire sum of 10 ETH will be distributed among all WL1 participants, ensuring each individual
                    receives 0.1 ETH. Participants are encouraged to utilize this ETH to engage in floor-swiping activities by purchasing
                    any JRI Contracts listed below the WL3 minting price of 0.02 ETH. The team will focus on swiping the first 500 contracts
                    listed below the designated price, ensuring a swift and impactful implementation of the floor-swiping strategy.
                </p>
            </article>
        </SecurityContainer>
    );
};

export default Security;

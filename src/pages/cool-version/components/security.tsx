// Assets
import { SecurityContainer } from '../css';
import Person from 'assets/img/person.png';
import RoadMap from 'assets/img/road-map.png';

const Security = () => {
    return (
        <SecurityContainer className='container'>
            <div className='left-side'>
                <h3>Securing Your Spot</h3>
                <small>Navigating Whitelist Tiers for Exclusive Benefits</small>
                <img src={Person} alt='' className='person-img' />
                <img src={RoadMap} alt='' className='road-map' />
            </div>
            <article className='right-side'>
                <p>
                    This phase features three whitelist tiers: OGs/Gold Tier participants, Silver Tier and Bronze Tier, each with unique
                    entry requirements.
                </p>
                <b>Ranking System</b>
                <p>
                    We have a ranking system in place where participants can earn points by completing tasks on{' '}
                    <a href='https://www.guild.xyz/justreadit' target='_blank'>
                        Guild
                    </a>{' '}
                    <br /> Here's how the tiers are structured based on your ranking.
                </p>
                <b className='mt'>Minting Details</b>
                <ul>
                    <li>
                        <p className='accent-1'>OG/GOLD Tier Minting</p>
                        <small>1st Day / Each participant can mint 1 JRI Contract for 0.005 ETH.</small>
                    </li>
                    <li>
                        <p className='accent-1'>Silver Minting</p>
                        <small>2nd Day / Each participant can mint 1 JRI Contract for 0.01 ETH.</small>
                    </li>
                    <li>
                        <p className='accent-1'>Bronze Minting</p>
                        <small>3rd Day / Each participant can mint 1 JRI Contract for 0.02 ETH.</small>
                    </li>
                </ul>
                <b className='mt'>1st Day Floor-Sweeping Strategy</b>
                <p>
                    OGs and Gold tier participants will play a crucial role in stabilizing the market and enhancing the value of our
                    collection through our innovative floor-sweeping strategy. Upon the minting on day one, the project treasury will
                    already have accumulated 0.5 ETH. With this initial earning, the treasury's total funds will amount to 1 ETH. This
                    entire sum will then be allocated among a team of 10 OGs. These select individuals will strategically purchase JRI
                    Contracts listed below the Silver Tier minting price of 0.01 ETH, effectively contributing to market stabilization and
                    bolstering the floor price. The OG team will focus on sweeping the first 100 contracts listed below the designated
                    price. At this stage, all participants who minted JRI Contracts can sell them at twice the mint price, reflecting the
                    increased market value. At this point, the collection will have the first 1 ETH total volume on the market and a floor
                    price of 0.01 ETH.
                </p>
                <b className='mt'>2nd Day Floor-Sweeping Strategy</b>
                <p>
                    As day two of minting begins, the treasury will earn an additional 10 ETH from the minting of 1000 contracts priced at
                    0.01 ETH each. This entire sum of 10 ETH will be distributed among all Gold Tier participants, ensuring each individual
                    receives 0.1 ETH. Participants are encouraged to utilize this ETH to engage in floor-sweeping activities by purchasing
                    any JRI Contracts listed below the Bronze minting price of 0.02 ETH. The team will focus on sweeping the first 500
                    contracts listed below the designated price, ensuring a swift and impactful implementation of the floor-sweeping
                    strategy. By this time, the collection in the market will have a total volume of 11 ETH and a floor price of 0.02 ETH,
                    allowing participants to sell their NFTs for about 2x to 4x the initial mint price.
                </p>
                <b className='mt'>3rd Day Boosting Market Growth:</b>
                <p>
                    At this point, the market floor price is already above the 0.02 ETH Bronze Tier minting price. For each 25 mints, we are
                    making an unlimited time offer to Gold Tier members worth 0.5 ETH. This will force the market to grow in volume by 65
                    ETH, reaching a total of 76 ETH. This strategy will push the floor price above 0.5 ETH, enhancing the overall market
                    value and providing substantial returns for participants. This offer is designed to encourage continuous participation
                    and market activity, ensuring sustained growth and stability.
                </p>
            </article>
        </SecurityContainer>
    );
};

export default Security;

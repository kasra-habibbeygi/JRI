// Components
import { Button } from 'commons/components';

// Assets
import { GradientContainer, TrustContainer } from '../css';
import { Link } from 'react-router-dom';

const Trust = () => {
    return (
        <>
            <GradientContainer className='gradient-field'>
                <div className='container'>
                    <p>
                        By actively participating in this floor-swiping endeavor, OGs and Gold Tier participants not only contribute to
                        market stabilization but also increase their chances of acquiring more JRI Contracts, thereby enhancing their
                        opportunities to obtain more of special NFTs with guaranteed values during the reveal phase.
                    </p>
                </div>
            </GradientContainer>
            <TrustContainer className='container'>
                <span className='circle-background'></span>
                <h3>How to trust the system</h3>
                <p>
                    To establish trust in our guarantees, <span>no team member participates in NFT minting</span>. Prior to the first day of
                    minting, the treasury holds 0.5 ETH, equivalent to the entire first day allocation of 100 contracts at 0.005 ETH each.
                    <span>Before minting begins, we allocate this 0.5 ETH to the OGs</span>. As Gold Tier mints progress,
                    <span>we transfer the additional 0.5 ETH earned from these mints to the OGs</span>. On the second day, as the treasury
                    gains 10 ETH from the minting of 1000 contracts, we allocate this sum to the 100 individuals on Gold Tier. Moving to the
                    third day, with every 25 contracts minted, the treasury earns 0.5 ETH. We utilize this 0.5 ETH to extend an
                    unlimited-time offer on Gold Tier NFTs, enabling participants to accept the offer even before the official reveal.
                </p>

                <h3 className='gradient'>Reveal Date</h3>

                <p>
                    If you are fortunate enough to possess a special JRI Contract, the project will make an offer to purchase it at the
                    guaranteed price specified.
                </p>
                <br />
                <p>After a week, the NFTs' metadata will be refreshed, revealing their unique characteristics.</p>
                <div className='next-Phase'>
                    <h2>Phase 1</h2>
                    <p>There is no short cool version of this one :)</p>
                    <Link to='/full-version'>
                        <Button radius='rounded'>Just Read It</Button>
                    </Link>
                </div>
            </TrustContainer>
        </>
    );
};

export default Trust;

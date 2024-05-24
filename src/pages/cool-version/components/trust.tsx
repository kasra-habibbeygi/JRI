// Components
import { Button } from 'commons/components';

// Assets
import { GradientContainer, TrustContainer } from '../css';

const Trust = () => {
    return (
        <>
            <GradientContainer className='gradient-field'>
                <div className='container'>
                    <p>
                        By actively participating in this floor-swiping endeavor, WL1 participants not only contribute to market
                        stabilization but also increase their chances of acquiring more JRI Contracts, thereby enhancing their opportunities
                        to obtain Gold (0.5 ETH) & Silver (0.1 ETH) Tier contracts during the reveal phase.
                    </p>
                </div>
            </GradientContainer>
            <TrustContainer className='container'>
                <span className='circle-background'></span>
                <h3>How to trust the system</h3>
                <p>
                    To establish trust in our guarantees, <span>no team member participates in NFT minting</span>. Prior to the first day of
                    minting, the treasury holds 0.5 ETH, equivalent to the entire WL1 allocation of 100 contracts at 0.005 ETH each.
                    <span>Before minting begins, we allocate this 0.5 ETH to the OGs</span>. As WL1 mints progress,
                    <span>we transfer the additional 0.5 ETH earned from these mints to the OGs</span>. On the second day, as the treasury
                    gains gains 10 ETH from the minting of 1,000 contracts, we allocate this sum to the 100 individuals on WL1. Moving to
                    the third day, with every 50 contracts minted, the treasury earns 1 ETH. We utilize this ETH to extend an unlimited-time
                    offer on WL1 NFTs, enabling participants to accept the offer even before the official reveal. However, it's essential to
                    note that among the OGs, two NFTs are valued at 2 ETH each. Therefore, it's advisable for them not to accept the offer
                    before the reveal to maximize their potential gains.
                </p>

                <h3 className='gradient'>Reveal Date</h3>

                <p>
                    The NFTs' metadata will be refreshed and their unique characteristics revealed 24 hours after the collection is sold
                    out.
                    <br />
                    If you are fortunate enough to possess a special JRI Contract, the project will make an offer to purchase it at the
                    guaranteed price specified.
                </p>
                <br />
                <p>After a week, the NFTs' metadata will be refreshed, revealing their unique characteristics.</p>
                <div className='next-Phase'>
                    <h2>Phase 2</h2>
                    <p>There is no cool version of this one :)</p>
                    <Button radius='rounded'>Just Read It</Button>
                </div>
            </TrustContainer>
        </>
    );
};

export default Trust;

// Components
// import { Button } from 'commons/components';
// import OnLoad from 'pages/on-load';

// Assets
import { StakeContainer } from './stake.style';
import { BigArrow, LittleArrow } from 'assets/icons';
import ChartImg from '/chart.svg';

const Stake = () => {
    return (
        <StakeContainer className='container'>
            {/* <OnLoad isCover={true} /> */}
            <header>
                <h1>Turning Donations Into Profit</h1>
                <p>Stake Your LP Tokens and Get JRI Points to be Unique Airdrop Eligible</p>
            </header>
            <section className='card-section'>
                <p className='token'>
                    JRI Token CA :{' '}
                    <a href='https://app.uniswap.org/swap?outputCurrency=0x2C4aE47A033A7c651e2502c46E703150621Cd861&chain=base'>
                        0x2C4aE47A033A7c651e2502c46E703150621Cd861
                        <BigArrow />
                    </a>
                </p>
                <div className='content'>
                    <div className='item'>
                        <div className='card'>
                            <b>LP Token Balance</b>
                            <p>
                                Connect wallet to see <LittleArrow className='arrow' />
                            </p>
                        </div>
                        {/* <input type='text' placeholder='Stake Amount' value='' onChange={() => {}} />
                    <Button radius='rounded'>Stake</Button> */}
                    </div>
                    <div className='card'>
                        <b>JRI Points Balance</b>
                        <p>
                            Connect wallet to see <LittleArrow className='arrow' />
                        </p>
                    </div>
                    <div className='item'>
                        <div className='card'>
                            <b>Staked amount</b>
                            <p>
                                Connect wallet to see <LittleArrow className='arrow' />
                            </p>
                        </div>
                        {/* <input type='text' placeholder='Stake Amount' value='' onChange={() => {}} />
                    <Button radius='rounded'>Unstake</Button> */}
                    </div>
                    <div className='card'>
                        <b>Current Points</b>
                        <p>
                            Connect wallet to see <LittleArrow className='arrow' />
                        </p>
                    </div>
                </div>
            </section>
            <section className='chart-section'>
                <h3>Tokenomics</h3>
                <p>
                    We initially created 1 billion tokens. Out of these, 75% are designated for the community, 15% are set aside to create a
                    liquidity pool, and the remaining 10% are allocated to support our team, investors, and the broader ecosystem.
                </p>

                <img src={ChartImg} alt='' />

                <div className='chart-helper'>
                    <div>
                        <span className='dark-blue'></span>
                        <p>Ecosystem</p>
                    </div>
                    <div>
                        <span className='blue'></span>
                        <p>Lig. Pool</p>
                    </div>
                    <div>
                        <span className='light-purple'></span>
                        <p>Liq. Mining</p>
                    </div>
                    <div>
                        <span className='purple'></span>
                        <p>Airdrop 3</p>
                    </div>
                    <div>
                        <span className='purple'></span>
                        <p>Airdrop 2</p>
                    </div>
                    <div>
                        <span className='purple'></span>
                        <p>Airdrop 1</p>
                    </div>
                </div>
            </section>
        </StakeContainer>
    );
};

export default Stake;

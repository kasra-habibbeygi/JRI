// MUI
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useMediaQuery } from '@mui/material';

// Components
// import { Button } from 'commons/components';

// Assets
import { StakeContainer } from './stake.style';
import { LittleArrow } from 'assets/icons';

const Stake = () => {
    const media600 = useMediaQuery('(max-width:600px)');
    const media420 = useMediaQuery('(max-width:420px)');

    return (
        <StakeContainer className='container'>
            <header>
                <h1>Turning Donations Into Profit</h1>
                <p>Stake Your LP Tokens and Get JRI Points to be Unique Airdrop Eligible</p>
            </header>
            <section className='card-section'>
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
            </section>
            <section className='chart-section'>
                <h3>Tokenomics</h3>
                <p>
                    We initially created 1 billion tokens. Out of these, 75% are designated for the community, 15% are set aside to create a
                    liquidity pool, and the remaining 10% are allocated to support our team, investors, and the broader ecosystem.
                </p>
                <PieChart
                    height={400}
                    series={[
                        {
                            data: [
                                { value: 10, label: 'Airdrop 1' },
                                { value: 15, label: 'Airdrop 2' },
                                { value: 20, label: 'Airdrop 3' },
                                { value: 15, label: 'Liq. Mining' },
                                { value: 30, label: 'Lig. Pool' },
                                { value: 10, label: 'Ecosystem' }
                            ],
                            arcLabel: item => `${item.label}`,
                            arcLabelMinAngle: 0,
                            innerRadius: 30,
                            outerRadius: media420 ? 130 : 180,
                            paddingAngle: 2,
                            cornerRadius: 6,
                            startAngle: 0,
                            endAngle: 360,
                            cx: media600 ? '65%' : media420 ? '80%' : '53%',
                            cy: '50%',
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' }
                        }
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontSize: '12px'
                        }
                    }}
                />
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
                        <span className='purple'></span>
                        <p>Liq. Mining</p>
                    </div>
                    <div>
                        <span className='pink'></span>
                        <p>Airdrop 3</p>
                    </div>
                    <div>
                        <span className='light-blue'></span>
                        <p>Airdrop 2</p>
                    </div>
                    <div>
                        <span className='green'></span>
                        <p>Airdrop 1</p>
                    </div>
                </div>
            </section>
        </StakeContainer>
    );
};

export default Stake;

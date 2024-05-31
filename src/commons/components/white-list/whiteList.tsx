import { ProgressBar, WhiteListContainer } from './whiteList.style';

// One of the reasons I didn't use the TABLE tag for this table was that it caused a
// serious bug in Safari due to the gradient and progress, so I had to implement it this way.

const WhiteList = () => {
    return (
        <WhiteListContainer>
            <small className='last-update'>This table refreshes automatically every day to provide the latest information</small>
            <div className='table-field'>
                <div className='table'>
                    <div className='thead'>
                        <div className='tr'>
                            <div className='th title'></div>
                            <div className='th'>Mint Time</div>
                            <div className='th'>Mint Price</div>
                            <div className='th'>Ranking</div>
                            <div className='th u-item'>Unique Items (value, quantity)</div>
                            <div className='th roles'>Roles</div>
                        </div>
                    </div>
                    <div className='tbody'>
                        <div className='tr'>
                            <div className='title td'>Gold</div>
                            <div className='td'>1st Day</div>
                            <div className='td'>0.005 ETH</div>
                            <div className='td'>1-100</div>
                            <div className='td u-item'>65 ETH, 100 Pcs</div>
                            <td className='pill-field roles'>
                                <div>
                                    <span className='black-outline'>10 OG</span>
                                    <span className='gold'>90 Gold Tier</span>
                                </div>
                            </td>
                        </div>
                        <div className='tr'>
                            <div className='title td'>Silver</div>
                            <div className='td'>2st Day</div>
                            <div className='td'>0.01 ETH</div>
                            <div className='td'>101-1100</div>
                            <div className='td u-item'>18 ETH, 90 Pcs</div>
                            <td className='pill-field roles'>
                                <span className='silver'>1000 Silver Tier</span>
                            </td>
                        </div>
                        <div className='tr last-one'>
                            <div className='title td'>Bronze</div>
                            <div className='td'>3st Day</div>
                            <div className='td'>0.02 ETH</div>
                            <div className='td'>1101-11100</div>
                            <div className='td u-item'>90 ETH, 900 Pcs</div>
                            <td className='pill-field roles'>
                                <span className='bronze'>10000 Bronze Tier</span>
                            </td>
                        </div>
                        <ProgressBar percent={(88 * 100) / 11100}>
                            <span className='progress-line'></span>
                            <div className='text'>88/11100</div>
                        </ProgressBar>
                    </div>
                </div>
            </div>
        </WhiteListContainer>
    );
};

export default WhiteList;

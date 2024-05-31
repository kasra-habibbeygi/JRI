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
                            <div className='title td'>OG/Gold</div>
                            <div className='td'>1st Day</div>
                            <div className='td'>0.005 ETH</div>
                            <div className='td'>2000</div>
                            <div className='td u-item'>65 ETH, 100 Pcs</div>
                            <td className='pill-field roles'>
                                <div>
                                    <span className='black-outline'>10 OG</span>
                                    <span className='gold'>90 Gold Tier</span>
                                </div>
                            </td>
                        </div>
                        <ProgressBar percent={100}>
                            <span className='progress-line'></span>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td roles'>100/100</div>
                        </ProgressBar>
                        <div className='tr'>
                            <div className='title td'>Silver</div>
                            <div className='td'>2st Day</div>
                            <div className='td'>0.01 ETH</div>
                            <div className='td'>600</div>
                            <div className='td u-item'>18 ETH, 90 Pcs</div>
                            <td className='pill-field roles'>
                                <span className='silver'>1000 Silver Tier</span>
                            </td>
                        </div>
                        <ProgressBar percent={40}>
                            <span className='progress-line'></span>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td roles'>98/1000</div>
                        </ProgressBar>
                        <div className='tr'>
                            <div className='title td'>Bronze</div>
                            <div className='td'>3st Day</div>
                            <div className='td'>0.02 ETH</div>
                            <div className='td'>400</div>
                            <div className='td u-item'>90 ETH, 900 Pcs</div>
                            <td className='pill-field roles'>
                                <span className='bronze'>10000 Bronze Tier</span>
                            </td>
                        </div>
                        <ProgressBar percent={0}>
                            <span className='progress-line'></span>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td'></div>
                            <div className='td roles'>0/10000</div>
                        </ProgressBar>
                    </div>
                </div>
            </div>
        </WhiteListContainer>
    );
};

export default WhiteList;

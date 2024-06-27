import axios from 'axios';
import { useEffect, useState } from 'react';

// Components
import { ProgressBar, WhiteListContainer } from './whiteList.style';

// Types
interface ILeaderBoardData {
    leaderboard: {
        totalPoints: number;
        address: string;
    }[];
    total: number;
}

// One of the reasons I didn't use the TABLE tag for this table was that it caused a
// serious bug in Safari due to the gradient and progress, so I had to implement it this way.

const WhiteList = () => {
    const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData>(null);

    useEffect(() => {
        axios.get('https://api-jri.com/v2/LeaderBoard').then(res => setLeaderBoardData(res.data));
    }, []);

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
                        <ProgressBar percent={leaderBoardData ? (leaderBoardData?.total * 100) / 11100 : 0}>
                            {/* <span className='progress-line'></span>
                            <div className='text'>{leaderBoardData?.total}/11100</div> */}
                            <div className='progress-container'>
                                <div className='border-field'></div>
                                <div className='backdrop'>
                                    <div className='source'>
                                        <div className='barBg'>
                                            <div className='bar' id='bar'></div>
                                        </div>
                                        <div className='contents'>
                                            <span id='percent'>{leaderBoardData?.total}/11100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ProgressBar>
                    </div>
                </div>
            </div>
        </WhiteListContainer>
    );
};

export default WhiteList;

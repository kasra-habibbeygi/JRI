import { ProgressBar, WhiteListContainer } from './whiteList.style';

const WhiteList = () => {
    return (
        <WhiteListContainer>
            <small className='last-update'>Last Updated 14/06/2024</small>
            <div className='table-field'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Mint Time</th>
                            <th>Mint Price</th>
                            <th>Required Score</th>
                            <th>Unique Items (value, quantity)</th>
                            <th>Roles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='title'>WL 1</td>
                            <td>1st Day</td>
                            <td>0.005 ETH</td>
                            <td>2000</td>
                            <td>111 ETH, 100 Pcs</td>
                            <td className='pill-field'>
                                <div>
                                    <span className='black-outline'>10 OG</span>
                                    <span className='black-filled'>90 Black Tier</span>
                                </div>
                            </td>
                        </tr>
                        <ProgressBar percent={100}>
                            <span className='progress-line'></span>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>100/100</td>
                        </ProgressBar>
                        <tr>
                            <td className='title'>WL 2</td>
                            <td>2st Day</td>
                            <td>0.01 ETH</td>
                            <td>600</td>
                            <td>20 ETH, 40 Pcs</td>
                            <td className='pill-field'>
                                <span className='gold'>1000 Gold Tier</span>
                            </td>
                        </tr>
                        <ProgressBar percent={40}>
                            <span className='progress-line'></span>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>98/1000</td>
                        </ProgressBar>
                        <tr>
                            <td className='title'>WL 3</td>
                            <td>3st Day</td>
                            <td>0.02 ETH</td>
                            <td>400</td>
                            <td>40 ETH, 400 Pcs</td>
                            <td className='pill-field'>
                                <span className='silver'>10000 Silver Tier</span>
                            </td>
                        </tr>
                        <ProgressBar percent={0}>
                            <span className='progress-line'></span>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>0/10000</td>
                        </ProgressBar>
                    </tbody>
                </table>
            </div>
        </WhiteListContainer>
    );
};

export default WhiteList;

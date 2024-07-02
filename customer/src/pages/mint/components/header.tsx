import { useEffect, useState } from 'react';
import axios from 'axios';

// Assets
import { CurveText } from 'assets/icons';
import { HeaderContainer } from '../css';
import Person from 'assets/img/person.png';

// Components
import { noiseProvider, skeletonProvider } from '../utils';

// Types
interface ILeaderBoardData {
    address: string;
    totalPoints: number;
    displayName: string;
}

const Header = () => {
    const [loader, setLoader] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData[]>(null);

    useEffect(() => {
        noiseProvider();
        setLoader(true);
        axios.get('https://api-jri.com/v2/LeaderBoard').then(res => {
            setLeaderBoardData(res.data.leaderboard);
            setLoader(false);
        });

        const script = document.createElement('script');
        script.src = 'https://launchpad.heymint.xyz/embed.js';
        script.defer = true;
        script.setAttribute('data-project-id', '30400');
        script.setAttribute('data-chain', 'BASE');

        const container = document.querySelector('.min-button');
        if (container) {
            container.appendChild(script);
        }

        return () => {
            if (container) {
                container.removeChild(script);
            }
        };
    }, []);

    return (
        <HeaderContainer className='container'>
            <div className='left-field'>
                <h3>LEADERBOARD</h3>
                <div className='table-field'>
                    {/* <div className='search-field'>
                        <Search />
                        <input
                            type='text'
                            placeholder='Search your user id'
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </div> */}
                    <header className='header'>
                        <span>User ID</span>
                        <span>Score</span>
                    </header>
                    <ul>
                        {leaderBoardData &&
                            !loader &&
                            leaderBoardData.map((item, index) => (
                                <li key={`leader-board-${index}`}>
                                    <span>
                                        {index + 1}-{item.displayName}
                                    </span>
                                    <span>{item.totalPoints.toLocaleString()}</span>
                                </li>
                            ))}
                        {loader && skeletonProvider()}
                    </ul>
                </div>
            </div>
            <div className='right-field'>
                <h3>
                    <span>The Mint is</span>
                    <span>NOT live</span>
                    <span>Right Now</span>
                </h3>
                <p className='sub-title'>
                    The mint button will soon be available to access our minting event, where you can acquire your JRI Contracts. Stay tuned
                    for updates on when the minting process will begin. Get ready to be part of the future of crowdfunding with JUST READ
                    IT!
                </p>
                <div className='content'>
                    <span className='animated-text'>
                        <CurveText />
                    </span>
                    <div className='main-noise-field'>
                        <img src={Person} alt='' className='mask-img' />
                        <canvas id='c' width='750' height='200'></canvas>
                    </div>
                </div>

                <div className='min-button'></div>
            </div>
        </HeaderContainer>
    );
};

export default Header;

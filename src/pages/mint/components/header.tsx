import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

// Assets
import { CurveText, NotFound, Search } from 'assets/icons';
import { HeaderContainer } from '../css';
import Person from 'assets/img/person.png';

// Components
import { Button } from 'commons/components';
import { noiseProvider, skeletonProvider } from '../utils';

// Types
interface ILeaderBoardData {
    address: string;
    totalPoints: number;
    displayName: string;
}

const Header = () => {
    const [loader, setLoader] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData[]>(null);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        noiseProvider();
        setLoader(true);
        axios.get(`https://api-jri.com/v2/LeaderBoard?filter=${searchValue}`).then(res => {
            setLeaderBoardData(res.data.leaderboard);
            setLoader(false);
        });
    }, []);

    useEffect(() => {
        setLoader(true);
        const delayDebounceFn = setTimeout(() => {
            axios.get(`https://api-jri.com/v2/LeaderBoard?filter=${searchValue}`).then(res => {
                setLeaderBoardData(res.data.leaderboard);
                setIsEmpty(!res.data.leaderboard);
                setLoader(false);
            });
        }, 1500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchValue]);

    return (
        <HeaderContainer className='container'>
            <div className='left-field'>
                <h3>LEADERBOARD</h3>
                <div className='table-field'>
                    <div className='search-field'>
                        <Search />
                        <input
                            type='text'
                            placeholder='Search your user id'
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                        />
                    </div>
                    <header className='header'>
                        <span>User ID</span>
                        <span>Score</span>
                    </header>
                    <ul>
                        {leaderBoardData &&
                            !loader &&
                            leaderBoardData.map((item, index) => (
                                <li key={`leader-board-${index}`}>
                                    <span>{item.displayName}</span>
                                    <span>{item.totalPoints.toLocaleString()}</span>
                                </li>
                            ))}
                        {loader && skeletonProvider()}
                        {isEmpty && (
                            <div className='not-found-container'>
                                <NotFound />
                                <p>No data found !</p>
                            </div>
                        )}
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
                <Button
                    className='min-button'
                    buttonType='outline'
                    radius='rounded'
                    variant='accent1'
                    onClick={() => toast.error('You should connect your wallet first, So wait until end of the June :)')}
                >
                    Mint Now
                </Button>
            </div>
        </HeaderContainer>
    );
};

export default Header;

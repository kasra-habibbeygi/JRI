/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from 'axios';

// Assets
import { CurveText, HumanBronze, HumanGold, HumanOG, HumanSilver } from 'assets/icons';
import { HeaderContainer } from '../css';
import Person from 'assets/img/person.png';

// Components
import { noiseProvider, skeletonProvider } from '../utils';
import { Button } from 'commons/components';

import { usersData } from './users';
import toast from 'react-hot-toast';

// Types
interface ILeaderBoardData {
    address: string;
    totalPoints: number;
    displayName: string;
}

const Header = () => {
    const [loader, setLoader] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData[]>(null);
    const [addressSearch, setAddressSearch] = useState('');
    const [addressResult, setAddressResult] = useState<'og' | 'gold' | 'silver' | 'bronze' | null>(null);

    useEffect(() => {
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

        // Clean up function
        return () => {
            if (container && container.contains(script)) {
                container.removeChild(script);
            }
        };
    }, []);

    useEffect(() => {
        if (addressResult === null) {
            noiseProvider();
        }
    }, [addressResult]);

    const findKeyByValue = (data: any, value: string): 'og' | 'gold' | 'silver' | 'bronze' => {
        for (let i = 0; i < data.length; i++) {
            const obj = data[i];
            for (const key in obj) {
                if (obj[key] === value) {
                    console.log(obj);
                    return key as 'og' | 'gold' | 'silver';
                }
            }
        }
        return 'bronze';
    };

    const onCheckAddress = () => {
        if (addressSearch === '') {
            toast.error('Please enter your wallet address first !');
            setAddressResult(null);
        } else if (!addressSearch.startsWith('0x') || addressSearch.length < 38 || addressSearch.length > 42) {
            toast.error('Please enter correct address wallet');
            setAddressResult(null);
        } else {
            setAddressResult(findKeyByValue(usersData, addressSearch.toLowerCase()));
        }
    };

    return (
        <HeaderContainer className='container' addressResult={!!addressResult}>
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
                    <span className='green'>live</span>
                    <span>Right Now</span>
                </h3>
                <p className='sub-title'>
                    Thanks for all your support in June. We are finally at the end of Phase 0. Check your spot here and meet back on your
                    minting date. We build together, we celebrate together.
                </p>
                <div className='address-search-field'>
                    <input
                        type='text'
                        placeholder='Your wallet address'
                        value={addressSearch}
                        onChange={e => setAddressSearch(e.target.value)}
                    />
                    <Button onClick={onCheckAddress}>Check</Button>
                </div>
                <div className='content'>
                    <span className='animated-text'>
                        <CurveText />
                    </span>
                    <div className='main-noise-field'>
                        {addressResult !== null ? (
                            <div className='search-result-field'>
                                <div>
                                    <b>Congratulations!</b>
                                    <p>You are in the {addressResult} tier.</p>
                                    <p>Mint Date: July 5th.</p>
                                </div>
                                {addressResult === 'bronze' ? (
                                    <HumanBronze />
                                ) : addressResult === 'gold' ? (
                                    <HumanOG />
                                ) : addressResult === 'og' ? (
                                    <HumanGold />
                                ) : (
                                    addressResult === 'silver' && <HumanSilver />
                                )}
                            </div>
                        ) : (
                            <>
                                <img src={Person} alt='' className='mask-img' />
                                <canvas id='c' width='750' height='200'></canvas>
                            </>
                        )}
                    </div>
                </div>

                <div className='min-button'></div>
            </div>
        </HeaderContainer>
    );
};

export default Header;

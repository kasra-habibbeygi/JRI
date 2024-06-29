import { useEffect, useState } from 'react';
import axios from 'axios';

// Assets
import { AirDropContainer } from './air-drop.style';

// Components
import { Button } from 'commons/components';
import { skeletonProvider } from 'pages/mint/utils';
import { Airdrop } from 'assets/icons';

// Types
interface ILeaderBoardData {
    address: string;
    totalPoints: number;
    displayName: string;
}

const AirDrop = () => {
    const [loader, setLoader] = useState(false);
    const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData[]>(null);
    useEffect(() => {
        setLoader(true);
        axios.get('https://api-jri.com/v2/LeaderBoard').then(res => {
            setLeaderBoardData(res.data.leaderboard);
            setLoader(false);
        });
    }, []);

    return (
        <AirDropContainer className='container'>
            <Airdrop className='icon-1 air-drop-img' />
            <Airdrop className='icon-2 air-drop-img' />
            <Airdrop className='icon-3 air-drop-img' />
            <Airdrop className='icon-4 air-drop-img' />
            <h1>Welcome to the JRI Airdrop Claim Portal!</h1>
            <h2>Airdrop 1.1</h2>
            <p>Check your eligibility and claim your rewards!</p>
            <p>Airdrop 1.1: July 15 - OG NFT Holders</p>
            <p>Airdrop 1.2: July 30 - Farcaster Tips</p>

            <div className='button-group'>
                <Button radius='rounded' className='gradient'>
                    Check Eligibility
                </Button>
                <Button radius='rounded' className='ghost'>
                    Claim
                </Button>
            </div>
            <div className='table'>
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
        </AirDropContainer>
    );
};

export default AirDrop;

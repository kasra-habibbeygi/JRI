/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import toast from 'react-hot-toast';
// import axios from 'axios';

// Assets
import { CurveText } from 'assets/icons';
import { HeaderContainer } from '../css';
import Person from 'assets/img/person.png';

// Components
import { Button } from 'commons/components';

// Types
// interface ILeaderBoardData {
//     address: string;
//     totalPoints: number;
// }

// function shortenAddress(address: string) {
//     const firstPart = address.slice(0, 6);
//     const lastPart = address.slice(-4);
//     return `${firstPart}…${lastPart}`;
// }

const Header = () => {
    // const [leaderBoardData, setLeaderBoardData] = useState<null | ILeaderBoardData[]>(null);

    useEffect(() => {
        // @ts-ignore
        const w = c.width;
        // @ts-ignore
        const h = c.height;
        const ocanvas = document.createElement('canvas');
        ocanvas.width = w << 1;
        ocanvas.height = h << 1;

        const octx = ocanvas.getContext('2d', { alpha: false });
        // @ts-ignore
        const idata = octx.createImageData(ocanvas.width, ocanvas.height);
        const buffer32 = new Uint32Array(idata.data.buffer);

        noise(octx);

        // @ts-ignore
        const ctx = c.getContext('2d', { alpha: false });
        (function loop() {
            const x = (w * Math.random()) | 0;
            const y = (h * Math.random()) | 0;
            ctx.drawImage(ocanvas, -x, -y);
            requestAnimationFrame(loop);
        })();

        function noise(ctx: any) {
            let len = buffer32.length - 1;
            while (len--) {
                buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
            }
            ctx.putImageData(idata, 0, 0);
        }

        // axios.get('https://103.75.199.27:4431/LeaderBoard').then(res => setLeaderBoardData(res.data.splice(0, 10)));
    }, []);

    return (
        <HeaderContainer className='container'>
            <div className='left-field'>
                <h3>LEADERBOARD</h3>
                <div className='table-field'>
                    <header className='header'>
                        <span>User ID</span>
                        <span>Score</span>
                    </header>
                    <ul>
                        {/* {leaderBoardData &&
                            leaderBoardData.map((item, index) => (
                                <li key={`leader-board-${index}`}>
                                    <span>{shortenAddress(item.address)}</span>
                                    <span>{item.totalPoints.toLocaleString()}</span>
                                </li>
                            ))} */}
                        <li>
                            <span>0x9b11…9e9b</span>
                            <span>33630</span>
                        </li>
                        <li>
                            <span>0x13e0…a053</span>
                            <span>24930</span>
                        </li>
                        <li>
                            <span>warpbase.eth</span>
                            <span>24930</span>
                        </li>
                        <li>
                            <span>iashish.eth</span>
                            <span>21350</span>
                        </li>
                        <li>
                            <span>0x962c…e5ad</span>
                            <span>19630</span>
                        </li>
                        <li>
                            <span>0x90e2…7832</span>
                            <span>19630</span>
                        </li>
                        <li>
                            <span>0x944d…4a56</span>
                            <span>19630</span>
                        </li>
                        <li>
                            <span>0xb56b…e32d</span>
                            <span>19430</span>
                        </li>
                        <li>
                            <span>0xe6b6…30d0</span>
                            <span>19080</span>
                        </li>
                        <li>
                            <span>0x123a…bb41</span>
                            <span>18950</span>
                        </li>
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

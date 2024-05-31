/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from 'react-hot-toast';

// Assets
import { CurveText } from 'assets/icons';
import { HeaderContainer } from '../css';

// Components
import { Button } from 'commons/components';
import { useEffect } from 'react';

const Header = () => {
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
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
                        </li>
                        <li>
                            <span>KSD28190divine</span>
                            <span>1100</span>
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
                    <canvas id='c' width='750' height='200'></canvas>
                </div>
                <Button
                    className='min-button'
                    buttonType='outline'
                    radius='rounded'
                    variant='accent1'
                    onClick={() => toast.error('Minting is not available yet. Please check back later when the Minting phase starts!')}
                >
                    Mint Now
                </Button>
            </div>
        </HeaderContainer>
    );
};

export default Header;

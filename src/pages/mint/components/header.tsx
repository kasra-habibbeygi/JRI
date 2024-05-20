// Assets
import { CurveText } from 'assets/icons';
import { HeaderContainer } from '../css';

// Components
import { Button } from 'commons/components';

const Header = () => {
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
                </div>
                <Button className='min-button' buttonType='outline' radius='rounded' variant='accent1'>
                    Mint Now
                </Button>
            </div>
        </HeaderContainer>
    );
};

export default Header;

// Assets
import { BigArrow, ShiningStar } from 'assets/icons';
import { HeaderContainer } from '../css';

// Components
import { Button } from 'commons/components';

const Header = () => {
    return (
        <HeaderContainer className='container'>
            <h1>
                <Button buttonType='ghost' radius='rounded'>
                    Web3 Crowdfunding Platform
                </Button>
                No Easy Money, Assured Gains
                <ShiningStar />
            </h1>
            <div className='arrow-field'>
                <div className='arrow-button'>
                    <BigArrow />
                </div>
                <h2>Just Read It</h2>
            </div>
        </HeaderContainer>
    );
};

export default Header;

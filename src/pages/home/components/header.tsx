// Components
import { Button } from 'commons/components';

// Assets
import { BigArrow, ShiningStar } from 'assets/icons';
import { HeaderContainer } from '../css';

const Header = () => {
    return (
        <HeaderContainer className='container'>
            <h1>
                No Easy Money, But Assured Gains
                <ShiningStar />
            </h1>
            <div className='arrow-field'>
                <Button>
                    <BigArrow />
                </Button>
                <h2>Just Read It</h2>
            </div>
        </HeaderContainer>
    );
};

export default Header;

// Assets
import { BigArrow, ShiningStar } from 'assets/icons';
import { HeaderContainer } from '../css';

const Header = () => {
    return (
        <HeaderContainer className='container'>
            <h1>
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

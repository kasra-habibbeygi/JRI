import { NavLink } from 'react-router-dom';

// Assets
import { NavbarContainer } from './navbar.style';

// Components
import { Button } from 'commons/components';

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className='container'>
                <div className='left-side'>
                    <p className='logo'>JRI</p>
                    <ul>
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/full-version'>Full Version</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cool-version'>Cool Version</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Mint'>Mint</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='right-side'>
                    <Button radius='rounded' variant='accent2' buttonType='outline'>
                        Connect Wallet
                    </Button>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

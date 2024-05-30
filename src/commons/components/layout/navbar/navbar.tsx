import { NavLink } from 'react-router-dom';
import { toggleSideBarStatus } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Assets
import { NavbarContainer } from './navbar.style';
import { Logo, Menu } from 'assets/icons';

// Components
import { Button } from 'commons/components';

const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <NavbarContainer>
            <div className='container'>
                <div className='left-side'>
                    <p className='logo'>
                        <Logo />
                    </p>
                    <ul>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/full-version'>Full Version BP</NavLink>
                        </li>
                        <li className='accent'>
                            <NavLink to='/cool-version'>Cool Version BP</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Mint'>Mint</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='right-side'>
                    <Button disabled radius='rounded' variant='accent2' buttonType='outline'>
                        Connect Wallet
                    </Button>
                </div>
                <div className='sandwich-menu' onClick={() => dispatch(toggleSideBarStatus())}>
                    <Menu />
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

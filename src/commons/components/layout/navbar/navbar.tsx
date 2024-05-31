import { NavLink, useLocation } from 'react-router-dom';
import { toggleFullVersionTitleMenu, toggleSideBarStatus } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Assets
import { NavbarContainer } from './navbar.style';
import { Document, Logo, Menu } from 'assets/icons';

// Components
import { Button } from 'commons/components';
import toast from 'react-hot-toast';

const Navbar = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    console.log(pathname);

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
                    <Button
                        radius='rounded'
                        variant='accent2'
                        buttonType='outline'
                        className='connect-wallet'
                        onClick={() =>
                            toast.error('Wallet connection is currently unavailable. Please check back soon when we launch this feature!')
                        }
                    >
                        Connect Wallet
                    </Button>
                </div>
                <div className='sandwich-menu'>
                    {pathname === '/full-version' && (
                        <Document className='doc-icon' onClick={() => dispatch(toggleFullVersionTitleMenu())} />
                    )}

                    <Menu onClick={() => dispatch(toggleSideBarStatus())} />
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

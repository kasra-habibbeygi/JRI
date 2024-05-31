import { Link, NavLink, useLocation } from 'react-router-dom';
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

    return (
        <NavbarContainer>
            <div className='container'>
                <div className='left-side'>
                    <Link to='/' className='logo'>
                        <Logo />
                    </Link>
                    <ul>
                        <li>
                            <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/full-version' onClick={() => window.scrollTo(0, 0)}>
                                Full Version BP
                            </NavLink>
                        </li>
                        <li className='accent'>
                            <NavLink to='/cool-version' onClick={() => window.scrollTo(0, 0)}>
                                Cool Version BP
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Mint' onClick={() => window.scrollTo(0, 0)}>
                                Mint
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='right-side'>
                    <Button
                        radius='rounded'
                        variant='accent2'
                        buttonType='outline'
                        className='connect-wallet'
                        onClick={() => toast.error('Wait until end of the June!')}
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

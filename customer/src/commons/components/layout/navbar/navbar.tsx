import { Link, NavLink, useLocation } from 'react-router-dom';
import { toggleFullVersionTitleMenu, toggleSideBarStatus } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Assets
import { NavbarContainer } from './navbar.style';
import { Document, Logo, Menu } from 'assets/icons';

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
                        <li>
                            <NavLink to='/beta-test' onClick={() => window.scrollTo(0, 0)}>
                                Beta Test
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/jri-token' onClick={() => window.scrollTo(0, 0)}>
                                JRI Token
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/airdrop' onClick={() => window.scrollTo(0, 0)}>
                                Airdrop
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* <div className='right-side'></div> */}
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

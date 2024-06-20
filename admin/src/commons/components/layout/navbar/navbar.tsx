'use client';

import { useDispatch } from 'react-redux';
import { themeProvider } from 'store/reducers/theme';
import { toggleSideBarStatus } from 'store/reducers/app';
import { Link } from 'react-router-dom';

// Assets
import { NavbarContainer } from './navbar.style';
import { Angle } from 'assets/icons';
import { Avatar, Bell, LogOut, Menu, Moon, Plus, Sun } from './icons';

// Components
import { useAppSelector, useOutsideClick } from 'commons/hooks';
import { Tooltip } from '@mui/material';

const Navbar = () => {
    const dispatch = useDispatch();
    const [notifDropDownState, setNotifDropDownState, notifRef] = useOutsideClick();
    const [profileDropDownState, setProfileDropDownState, profileRef] = useOutsideClick();
    const theme = useAppSelector(state => state.ThemeProvider.theme);

    const logoutHandler = () => {};

    return (
        <NavbarContainer className='main-navbar'>
            <Tooltip title='add new test'>
                <Link to='/en/add-test' className='add-test'>
                    <Plus />
                </Link>
            </Tooltip>
            {theme === 'light' ? (
                <Sun className='dark-mode-icon' onClick={() => dispatch(themeProvider())} />
            ) : (
                <Moon className='dark-mode-icon' onClick={() => dispatch(themeProvider())} />
            )}
            <Menu className='mobile-sidebar-icon' onClick={() => dispatch(toggleSideBarStatus())} />
            <div className='notification' ref={notifRef}>
                <Bell onClick={() => setNotifDropDownState(!notifDropDownState)} />
                <div className={`drop-down ${notifDropDownState ? 'active' : ''}`}>
                    <div className='row-field'>
                        <div className='row'>
                            <p>Your Identity Verification is Approved</p>
                            <small>
                                Congratulations! Your identity verification process is successfully completed. You can now enjoy full access
                                to all features.
                            </small>
                        </div>
                        <div className='row'>
                            <p>Your Identity Verification is Approved</p>
                            <small>
                                Congratulations! Your identity verification process is successfully completed. You can now enjoy full access
                                to all features.
                            </small>
                        </div>
                        <div className='row'>
                            <p>Your Identity Verification is Approved</p>
                            <small>
                                Congratulations! Your identity verification process is successfully completed. You can now enjoy full access
                                to all features.
                            </small>
                        </div>
                        <div className='row'>
                            <p>Your Identity Verification is Approved</p>
                            <small>
                                Congratulations! Your identity verification process is successfully completed. You can now enjoy full access
                                to all features.
                            </small>
                        </div>
                        <div className='row'>
                            <p>Your Identity Verification is Approved</p>
                            <small>
                                Congratulations! Your identity verification process is successfully completed. You can now enjoy full access
                                to all features.
                            </small>
                        </div>
                    </div>
                    <Link to='/' className='see-more'>
                        View More <Angle />
                    </Link>
                </div>
            </div>
            <div className='avatar-field' ref={profileRef}>
                <Avatar onClick={() => setProfileDropDownState(!profileDropDownState)} />
                <div className={`profile-drop-down ${profileDropDownState ? 'active' : ''}`}>
                    <Link to='/en/profile' className='item'>
                        <Avatar /> Profile
                    </Link>
                    <div className='item red-one' onClick={logoutHandler}>
                        <LogOut /> Logout
                    </div>
                </div>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;

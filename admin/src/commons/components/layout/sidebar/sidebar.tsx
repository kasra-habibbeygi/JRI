import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import { CollapseField, MobileLayer, SideBarContainer } from './sidebar.style';
import { Angle } from 'assets/icons';

// Configs
import { useAppDispatch, useAppSelector } from 'commons/hooks';
import { toggleSideBarStatus } from 'store/reducers/app';
import { getSidebarBottomItems, getSidebarTopItems } from 'commons/configs';
import Button from 'commons/components/button';
import { Plus } from './icons';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const sidebarTopItems = getSidebarTopItems();
    const sidebarBottomItems = getSidebarBottomItems();
    const sideBarMobileStatus = useAppSelector(state => state.App.sideBarStatus);
    const theme = useAppSelector(state => state.ThemeProvider.theme);
    const [collapseName, setCollapseName] = useState<string | null>('Synthetic Room');
    const [themeState, setThemeState] = useState('light');

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    return (
        <>
            <MobileLayer status={sideBarMobileStatus} onClick={() => dispatch(toggleSideBarStatus())} />
            <SideBarContainer className='main-side-bar' status={sideBarMobileStatus}>
                <div className='side-bar-content'>
                    {themeState === 'light' ? (
                        <img src='/img/logo-light.png' alt='' width={100} height={50} className='logo-img 1' />
                    ) : (
                        <img src='/img/logo.png' alt='' width={100} height={50} className='logo-img 2' />
                    )}
                    <div className='menu-sidebar'>
                        <ul className='top-list'>
                            {sidebarTopItems.map((item, index) => {
                                if (!item.subMenu) {
                                    return (
                                        <li key={`single-menu-item-${index}`}>
                                            <Link to={item.link ?? '/'} className='single-menu-item'>
                                                {item.icon} {item.title}
                                            </Link>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={`collapse-field-menu-item-${index}`}>
                                        <div
                                            className='collapse-header'
                                            onClick={() => setCollapseName(collapseName === item.title ? null : item.title)}
                                        >
                                            <span>
                                                {item.icon} {item.title}
                                            </span>
                                            <Angle className='angle' />
                                        </div>
                                        <CollapseField
                                            itemCount={item.subMenu.length}
                                            className={collapseName === item.title ? 'active' : ''}
                                        >
                                            {item.subMenu.map((sumItem, subIndex) => (
                                                <li key={`collapse-menu-item-${subIndex}`}>
                                                    <Link to={sumItem.link ?? '/'}>
                                                        {sumItem.icon}
                                                        {sumItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </CollapseField>
                                    </li>
                                );
                            })}
                        </ul>
                        <ul className='bottom-list'>
                            {sidebarBottomItems.map((item, index) => {
                                if (!item.subMenu) {
                                    return (
                                        <li key={`single-menu-item-${index}`}>
                                            <Link to={item.link ?? '/'} className='single-menu-item'>
                                                {item.icon} {item.title}
                                            </Link>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={`collapse-field-menu-item-${index}`}>
                                        <div
                                            className='collapse-header'
                                            onClick={() => setCollapseName(collapseName === item.title ? null : item.title)}
                                        >
                                            <span>
                                                {item.icon} {item.title}
                                            </span>
                                            <Angle className='angle' />
                                        </div>
                                        <CollapseField
                                            itemCount={item.subMenu.length}
                                            className={collapseName === item.title ? 'active' : ''}
                                        >
                                            {item.subMenu.map((sumItem, subIndex) => (
                                                <li key={`collapse-menu-item-${subIndex}`}>
                                                    <Link to={sumItem.link ?? '/'}>
                                                        {sumItem.icon}
                                                        {sumItem.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </CollapseField>
                                    </li>
                                );
                            })}
                            <li className='button-item'>
                                <Button buttonType='outline' onClick={() => {}} variant='accent' className='invite-member'>
                                    <Plus />
                                    <p>Invite new member</p>
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </SideBarContainer>
        </>
    );
};

export default SideBar;

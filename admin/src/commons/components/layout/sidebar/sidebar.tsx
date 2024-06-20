import { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import { CollapseField, MobileLayer, SideBarContainer } from './sidebar.style';
import { Angle, Logo, Logout } from 'assets/icons';

// Configs
import { useAppDispatch, useAppSelector } from 'commons/hooks';
import { toggleSideBarStatus } from 'store/reducers/app';
import { getSidebarTopItems } from 'commons/configs';

const SideBar = () => {
    const dispatch = useAppDispatch();
    const sidebarTopItems = getSidebarTopItems();
    const sideBarMobileStatus = useAppSelector(state => state.App.sideBarStatus);
    const [collapseName, setCollapseName] = useState<string | null>('Synthetic Room');

    return (
        <>
            <MobileLayer status={sideBarMobileStatus} onClick={() => dispatch(toggleSideBarStatus())} />
            <SideBarContainer className='main-side-bar' status={sideBarMobileStatus}>
                <div className='side-bar-content'>
                    <Logo className='logo-img' />
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
                        <div className='logout-button'>
                            <Logout /> Logout
                        </div>
                    </div>
                </div>
            </SideBarContainer>
        </>
    );
};

export default SideBar;

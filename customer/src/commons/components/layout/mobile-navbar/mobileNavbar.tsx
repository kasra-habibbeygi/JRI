import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'commons/hooks';
import { toggleSideBarStatus } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Assets
import { LayerContainer, MobileNavbarContainer } from './mobileNavbar.style';

const MobileNavbar = () => {
    const dispatch = useDispatch();
    const sideBarStatus = useAppSelector(state => state.App.sideBarStatus);

    const onLinkClickHandler = () => {
        dispatch(toggleSideBarStatus());
        window.scrollTo(0, 0);
    };

    return (
        <>
            <LayerContainer className='layer' status={sideBarStatus} onClick={onLinkClickHandler}></LayerContainer>
            <MobileNavbarContainer status={sideBarStatus}>
                <ul>
                    <li>
                        <NavLink to='/' onClick={onLinkClickHandler}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/full-version' onClick={onLinkClickHandler}>
                            Full Version
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cool-version' onClick={onLinkClickHandler}>
                            Cool Version
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/mint' onClick={onLinkClickHandler}>
                            Mint
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/beta-test' onClick={onLinkClickHandler}>
                            Beta Test
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/jri-token' onClick={onLinkClickHandler}>
                            JRI Token
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/airdrop' onClick={onLinkClickHandler}>
                            Airdrop
                        </NavLink>
                    </li>
                </ul>
            </MobileNavbarContainer>
        </>
    );
};

export default MobileNavbar;

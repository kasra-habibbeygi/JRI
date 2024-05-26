import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'commons/hooks';
import { toggleSideBarStatus } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Assets
import { LayerContainer, MobileNavbarContainer } from './mobileNavbar.style';

const MobileNavbar = () => {
    const dispatch = useDispatch();
    const sideBarStatus = useAppSelector(state => state.App.sideBarStatus);

    return (
        <>
            <LayerContainer className='layer' status={sideBarStatus} onClick={() => dispatch(toggleSideBarStatus())}></LayerContainer>
            <MobileNavbarContainer status={sideBarStatus}>
                <ul>
                    <li>
                        <NavLink to='/' onClick={() => dispatch(toggleSideBarStatus())}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/full-version' onClick={() => dispatch(toggleSideBarStatus())}>
                            Full Version
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/cool-version' onClick={() => dispatch(toggleSideBarStatus())}>
                            Cool Version
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/mint' onClick={() => dispatch(toggleSideBarStatus())}>
                            Mint
                        </NavLink>
                    </li>
                </ul>
            </MobileNavbarContainer>
        </>
    );
};

export default MobileNavbar;

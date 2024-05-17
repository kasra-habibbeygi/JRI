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
            </MobileNavbarContainer>
        </>
    );
};

export default MobileNavbar;

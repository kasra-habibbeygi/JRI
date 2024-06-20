'use client';

import { Link } from 'react-router-dom';

// Assets
import { AddTestContainer } from './addTest.style';
import { Browser, ComingSoon, Phone, Progress } from './images';

// Components
import { Header } from 'commons/components';

const AddTest = () => {
    return (
        <>
            <AddTestContainer>
                <Header title='Add Test' />
                <div className='container room-item'>
                    <h3>Synthetic Rooms</h3>
                    <div className='test'>
                        <Link to='/en/browser-test'>
                            <Browser />
                            <p>Add Browser Test</p>
                        </Link>
                        <Link to='/en/mobile-test'>
                            <Phone />
                            <p>Add Mobile Test</p>
                        </Link>
                    </div>
                </div>
                <div className='container new-room'>
                    <h3>
                        <Progress className='progress' />
                        Cyber Rooms...
                    </h3>
                    <ComingSoon />
                </div>
            </AddTestContainer>
        </>
    );
};

export default AddTest;

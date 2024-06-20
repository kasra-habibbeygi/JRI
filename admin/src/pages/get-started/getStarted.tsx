'use client';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useAppSelector } from 'commons/hooks';

// Assets
import { GetStartedContainer } from './getStarted.style';
import { Code, DarkCode, User } from './images';

// Components
import { Header } from 'commons/components';

const GetStarted = () => {
    const theme = useAppSelector(state => state.ThemeProvider.theme);
    const [themeState, setThemeState] = useState('light');

    useEffect(() => {
        setThemeState(theme);
    }, [theme]);

    return (
        <GetStartedContainer>
            <Header title="Welcome to QT Rooms. let's get started ..." />
            <div className='main-content'>
                <div className='container main-container'>
                    <img src={User} />
                    <Link to='/en/profile'>Complete your profile</Link>
                </div>
                <div className='container main-container'>
                    {themeState === 'light' ? <img src={Code} /> : <img src={DarkCode} />}

                    <Link to='/en/add-test'>Start your new test</Link>
                </div>
            </div>
        </GetStartedContainer>
    );
};

export default GetStarted;

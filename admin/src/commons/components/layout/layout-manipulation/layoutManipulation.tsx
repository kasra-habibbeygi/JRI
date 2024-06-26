'use client';
import { FC, ReactNode } from 'react';
import Lottie from 'react-lottie-player';

// Assets
import { LayoutContainer } from './layoutManipulation.style';
import LoaderJson from 'assets/json/loader.json';

// Components
import { SideBar } from 'commons/components';
import { useAppSelector } from 'commons/hooks';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    const contentLoaderStatus = useAppSelector(state => state.App.contentLoader);

    return (
        <LayoutContainer>
            <SideBar />
            <main className='main-content'>
                <div className={`loader ${contentLoaderStatus ? 'show' : ''}`}>
                    <Lottie loop animationData={LoaderJson} play style={{ width: 150, height: 150 }} />
                </div>
                <section className={`${contentLoaderStatus ? 'hide' : ''} section-content-field-layout`}>{children}</section>
            </main>
        </LayoutContainer>
    );
};

export default MainLayout;

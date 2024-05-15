'use client';
import { FC, ReactNode } from 'react';

// Assets
import { LayoutContainer } from './layoutManipulation.style';

// Components
import Footer from '../footer';
import Navbar from '../navbar';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    return (
        <LayoutContainer>
            <Navbar />
            {children}
            <Footer />
        </LayoutContainer>
    );
};

export default MainLayout;

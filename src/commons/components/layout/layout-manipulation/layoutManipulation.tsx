'use client';
import { FC, ReactNode } from 'react';

// Assets

// Components
import Footer from '../footer';
import Navbar from '../navbar';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;

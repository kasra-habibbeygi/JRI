import { FC, ReactNode, useEffect } from 'react';

// Assets

// Components
import Footer from '../footer';
import Navbar from '../navbar';
import MobileNavbar from '../mobile-navbar';
import { useLocation } from 'react-router-dom';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <MobileNavbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;

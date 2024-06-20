import { FC, ReactNode } from 'react';

// Assets

// Components
import Footer from '../footer';
import Navbar from '../navbar';
import Sticker from '../sticker';
import MobileNavbar from '../mobile-navbar';

// Types
interface IMainLayout {
    children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <Sticker />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;

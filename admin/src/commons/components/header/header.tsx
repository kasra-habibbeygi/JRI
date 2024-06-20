import { FC, ReactNode } from 'react';

// Assets
import { HeaderContainer } from './header.style';

// Types
interface IHeader {
    title: string;
    action?: ReactNode;
}

const Header: FC<IHeader> = ({ title, action }) => {
    return (
        <HeaderContainer className='container'>
            <h3>{title}</h3>
            {action && <div>{action}</div>}
        </HeaderContainer>
    );
};

export default Header;

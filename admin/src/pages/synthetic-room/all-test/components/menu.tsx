import { MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';

// Component
import { Button } from 'commons/components';

// Assets
import { Ban, Bin, More, Muted, Pencil, Schedule } from 'assets/icons';
import { MenuContainer } from '../css';

const MenuTable = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button buttonType='ghost' onClick={handleClick as () => void}>
                <More />
            </Button>
            <MenuContainer anchorEl={anchorEl} open={open} onClose={handleClose}>
                <span className='menu-item'>
                    <Link to='en/profile'>
                        <Schedule />
                        <span>Run now</span>
                    </Link>
                </span>
                <span className='menu-item'>
                    <Link to='en/profile'>
                        <Ban />
                        <span>Deactivate</span>
                    </Link>
                </span>
                <span className='menu-item'>
                    <Link to='en/profile'>
                        <Muted />
                        <span>Muted</span>
                    </Link>
                </span>
                <span className='menu-item'>
                    <Link to='en/profile'>
                        <Pencil />
                        <span>Edit Test</span>
                    </Link>
                </span>
                <span className='menu-item'>
                    <Button>
                        <Bin />
                        <span>Delete Test</span>
                    </Button>
                </span>
            </MenuContainer>
        </>
    );
};

export default MenuTable;

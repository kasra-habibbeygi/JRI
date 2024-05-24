// Components
import { Button } from 'commons/components';

// Assets
import { VersionsContainer } from '../css';
import { Link } from 'react-router-dom';

const Versions = () => {
    return (
        <VersionsContainer>
            <Link to='/full-version' className='left-side'>
                <h3>Full Version BP</h3>
            </Link>
            <Link to='/cool-version' className='right-side'>
                <h3>Cool Version BP</h3>
                <Button buttonType='ghost' radius='rounded'>
                    Recommended
                </Button>
            </Link>
        </VersionsContainer>
    );
};

export default Versions;

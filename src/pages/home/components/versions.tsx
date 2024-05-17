// Components
import { Button } from 'commons/components';

// Assets
import { VersionsContainer } from '../css';

const Versions = () => {
    return (
        <VersionsContainer>
            <div className='left-side'>
                <h3>Full Version BP</h3>
            </div>
            <div className='right-side'>
                <h3>Cool Version BP</h3>
                <Button buttonType='ghost' radius='rounded'>
                    Recommended
                </Button>
            </div>
        </VersionsContainer>
    );
};

export default Versions;

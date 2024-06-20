import { useParams } from 'react-router-dom';

// Asset
import { MainResultHeaderContainer } from '../css';
import { Avatar, URL } from '../images';
import { Schedule } from 'assets/icons';

// Component
import { Button } from 'commons/components';

const MainResultHeader = () => {
    const { id } = useParams();

    return (
        <MainResultHeaderContainer>
            <div className='right-box'>
                <h4>Browser Test #{id}</h4>
                <p className='green'>Test is Passing</p>
                <div className='url-location-box'>
                    <span>
                        <URL />
                        <small>Digikala</small>
                    </span>
                    <span className='pill'>Shiraz</span>
                    <span className='pill'>Tehran</span>
                    <span className='pill'>Mashhad</span>
                </div>
            </div>
            <div className='left-box'>
                <Button variant='accent' className='run-button'>
                    <Schedule />
                    <span>Run now</span>
                </Button>
                <Button buttonType='ghost'>Edit</Button>
                <div className='user'>
                    <Avatar />
                    <span>nadie najm</span>
                </div>
            </div>
        </MainResultHeaderContainer>
    );
};

export default MainResultHeader;

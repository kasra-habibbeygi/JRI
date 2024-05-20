import { Link } from 'react-router-dom';

// Assets
import { ListContainer } from '../css';
import { BigArrow } from 'assets/icons';

// Components
import { WhiteList } from 'commons/components';

const List = () => {
    return (
        <ListContainer className='container'>
            <h3>Where It All Begins !!</h3>
            <p>
                The mint date will be announced soon, check your stats on
                <Link to='/'>
                    Discord <BigArrow />
                </Link>
            </p>
            <WhiteList />
        </ListContainer>
    );
};

export default List;

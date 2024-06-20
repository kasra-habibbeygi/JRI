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
                The mint date will be announced soon, Check your stats on
                <a href='https://guild.xyz/justreadit' target='_blank'>
                    Guild <BigArrow />
                </a>
            </p>
            <WhiteList />
        </ListContainer>
    );
};

export default List;

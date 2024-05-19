// Assets
import { WhiteListTableContainer } from '../css';

// Components
import { WhiteList } from 'commons/components';

const WhiteListTable = () => {
    return (
        <WhiteListTableContainer className='container'>
            <h3>The Three Whitelist Tiers</h3>
            <ul>
                <li>
                    <b>Whitelist1</b>
                    <p>
                        Reserved for our OGs, consisting of the top 10 participants with the highest points, alongside 90 Black Tier
                        members.
                    </p>
                </li>
                <li>
                    <b>Whitelist2</b>
                    <p>Comprising 1,000 individuals who join through the invitations of WL1 participants.</p>
                </li>
                <li>
                    <b>Whitelist3</b>
                    <p>Open to 10,000 participants who join through the invitations of WL2 participants.</p>
                </li>
            </ul>
            <WhiteList />
        </WhiteListTableContainer>
    );
};

export default WhiteListTable;

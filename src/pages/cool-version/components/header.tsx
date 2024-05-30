// Assets
import { HeaderContainer } from '../css';
import { CardIcon1, CardIcon2, CardIcon3 } from '../img';

const Header = () => {
    return (
        <HeaderContainer className='container'>
            <header>
                <h3>No Easy Money, Assured Gains</h3>
                <p>
                    Dear crypto enthusiasts, JUST READ IT: (JRI), will serve as a groundbreaking platform akin to Kickstarter. An innovative
                    NFT project that promises to redefine the landscape of crowdfunding and empower creators worldwide to bring their
                    visions to life in a decentralized and community-driven ecosystem.
                </p>
            </header>
            <div className='card-container'>
                <h3>JRI’s Mission</h3>
                <div className='card-field'>
                    <div className='card'>
                        <div className='icon-field'>
                            <CardIcon1 />
                        </div>
                        <b>Decentralized Funding Mechanism</b>
                        <p>
                            Unlike traditional crowdfunding platforms, JRI will utilize blockchain technology to decentralize the funding
                            process. Individuals seeking funding will submit their business plans or project proposals to the JRI platform
                            using their JRI contract.
                        </p>
                    </div>
                    <div className='card'>
                        <div className='icon-field'>
                            <CardIcon2 />
                        </div>
                        <b>Tokenized Funding Allocation</b>
                        <p>
                            Upon approval, the requested funding amount will be tokenized into a set number of NFTs, known as "project
                            puzzle pieces". Each puzzle piece represents a fraction of the total funding amount and will be available for
                            purchase by interested community members.
                        </p>
                    </div>
                    <div className='card'>
                        <div className='icon-field'>
                            <CardIcon3 />
                        </div>
                        <b>Community Support and Participation</b>
                        <p>
                            Community members will have the opportunity to purchase project puzzle pieces to support the projects they
                            believe in. By doing so, they become stakeholders in the funded projects, holding a share of the project's value
                            in their wallets.
                        </p>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;

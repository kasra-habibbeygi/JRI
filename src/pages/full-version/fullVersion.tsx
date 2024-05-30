import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'commons/hooks';
import { toggleFullVersionTitleMenu } from 'store/reducers/app';
import { useDispatch } from 'react-redux';

// Components
import { Helmet } from 'commons/components';

// Assets
import { LittleArrow } from 'assets/icons';
import { FullVersionContainer, LayerContainer, MainList } from './fullVersion.style';
import FV01 from 'assets/img/FV01.png';
import Persons from 'assets/img/person.png';
import RoadMap from 'assets/img/road-map.png';

const FullVersion = () => {
    const { hash } = useLocation();
    const dispatch = useDispatch();
    const sidebarStatus = useAppSelector(state => state.App.fullPageTitleMenu);
    // const [collapseStatus, setCollapseStatus] = useState<string | null>(null);

    // const onCollapseStatusChange = (name: string) => {
    //     if (collapseStatus === 'name') {
    //         setCollapseStatus(null);
    //     } else {
    //         setCollapseStatus(name);
    //     }
    // };

    useEffect(() => {
        if (hash) {
            const elementId = hash.replace('#', '');
            const element = document.getElementById(elementId);

            const allAnchors = document.querySelectorAll('a.active');
            allAnchors.forEach(anchor => anchor.classList.remove('active'));

            const anchor = document.querySelector(`a[href="${hash}"]`);
            if (anchor) {
                anchor.classList.add('active');
            }
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <FullVersionContainer className='container' status={sidebarStatus}>
            <Helmet title='JRI | Full Version' />
            <LayerContainer
                className='layer'
                status={sidebarStatus}
                onClick={() => dispatch(toggleFullVersionTitleMenu())}
            ></LayerContainer>
            <aside>
                <ol className='main-list'>
                    <li className='category'>Just Read It (JRI) Business Plan</li>
                    <li>
                        <MainList>
                            <a href='#executive-summary' className='field'>
                                Executive Summary <LittleArrow />
                            </a>
                            <MainList>
                                <li className='field'>
                                    <a href='#introduction'>Introduction</a>
                                </li>
                                <li className='field'>
                                    <a href='#mission-statement'>Mission Statement</a>
                                </li>
                                <li className='field'>
                                    <a href='#vision-statement'>Vision Statement</a>
                                </li>
                            </MainList>
                        </MainList>
                        <MainList>
                            <a href='#business-model' className='field'>
                                Business Model <LittleArrow />
                            </a>
                            <MainList>
                                <li className='field'>
                                    <a href='#key-objectives'>Key Objectives</a>
                                </li>
                                <li className='field'>
                                    <a href='#services-overview'>Services Overview</a>
                                </li>
                            </MainList>
                        </MainList>
                        <MainList>
                            <li>
                                <a className='field' href='#market-position'>
                                    Market Position
                                </a>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a className='field' href='#financial-projections'>
                                    Financial Projections
                                </a>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a className='field' href='#company-description'>
                                    Company Description <LittleArrow />
                                </a>
                                <MainList>
                                    <li>
                                        <a href='#goals' className='field'>
                                            Goals <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#short-term-goals'>Short-Term Goals</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#long-term-goals'>Long-Term Goals</a>
                                            </li>
                                        </MainList>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a className='field' href='#conclusion'>
                                    Conclusion
                                </a>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#phase-0' className='field'>
                                    Phase 0: Distribution of JRI Contracts NFTs <LittleArrow />
                                </a>
                                <MainList>
                                    <li className='field'>
                                        <a href='#whitelist-tiers-and-OG-rewards'>Whitelist Tiers and OG Rewards</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#ranking-system'>Ranking System</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#minting-details'>Minting Details</a>
                                    </li>
                                    <li>
                                        <a href='#floor-sweeping-strategy' className='field'>
                                            Floor-Sweeping Strategy <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#1st-day-floor-sweeping-strategy'>1st Day Floor-Sweeping Strategy</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#2nd-day-floor-sweeping-strategy'>2nd Day Floor-Sweeping Strategy</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#3rd-Day-boosting-market-growth'>3rd Day Boosting Market Growth</a>
                                            </li>
                                        </MainList>
                                    </li>
                                    <li className='field'>
                                        <a href='#the-day'>The Day</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#ensuring-trust'>Ensuring Trust</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#reveal-date'>Reveal Date</a>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#market-analysis' className='field'>
                                    Market Analysis <LittleArrow />
                                </a>
                                <MainList>
                                    <li className='field'>
                                        <a href='#industry-overview'>Industry Overview</a>
                                    </li>
                                    <li>
                                        <a href='#target-market' className='field'>
                                            Target Market <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#perspective-of-project-funders'>Perspective of Project Funders</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#perspective-of-individuals'>Perspective of Individuals with Ideas</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#perspective-of-skilled-individuals'>Perspective of Skilled Individuals</a>
                                            </li>
                                        </MainList>
                                    </li>
                                    <li className='field'>
                                        <a href='#market-needs'>Market Needs</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#market-trends'>Market Trends</a>
                                    </li>
                                    <li>
                                        <li>
                                            <a href='#Competitive-Analysis' className='field'>
                                                Competitive Analysis <LittleArrow />
                                            </a>
                                            <MainList>
                                                <li>
                                                    <a href='#SWOT-Analysis' className='field'>
                                                        SWOT Analysis <LittleArrow />
                                                    </a>
                                                    <MainList>
                                                        <li className='field'>
                                                            <a href='#Strengths'>Strengths</a>
                                                        </li>
                                                        <li className='field'>
                                                            <a href='#Weaknesses'>Weaknesses</a>
                                                        </li>
                                                        <li className='field'>
                                                            <a href='#Opportunities'>Opportunities</a>
                                                        </li>
                                                        <li className='field'>
                                                            <a href='#Threats'>Threats</a>
                                                        </li>
                                                    </MainList>
                                                </li>
                                            </MainList>
                                        </li>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#Marketing-Strategy' className='field'>
                                    Marketing Strategy <LittleArrow />
                                </a>
                                <MainList>
                                    <li>
                                        <a href='#Marketing-Objectives' className='field'>
                                            Marketing Objectives <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#Brand-Awareness'>Brand Awareness</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#Community-Building'>Community Building</a>
                                            </li>
                                        </MainList>
                                    </li>
                                    <li className='field'>
                                        <a href='#Target-Audience'>Target Audience</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Marketing Channels'>Marketing Channels</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Growth Strategy'>Growth Strategy</a>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#Financial-Plan' className='field'>
                                    Financial Plan <LittleArrow />
                                </a>
                                <MainList>
                                    <li className='field'>
                                        <a href='#Revenue-Model'>Revenue Model</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Financial-Projections'>Financial Projections</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Funding-Requirements'>Funding Requirements</a>
                                    </li>
                                    <li>
                                        <a href='#Use-of-Funds' className='field'>
                                            Use of Funds <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#Platform-Development'>Platform Development</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#Marketing-and-Community-Building'></a>
                                            </li>
                                            <li className='field'>
                                                <a href='#Operational-Costs'>Operational Costs</a>
                                            </li>
                                            <li className='field'>
                                                <a href='#Research-and-Development'>Research and Development</a>
                                            </li>
                                        </MainList>
                                    </li>
                                    <li className='field'>
                                        <a href='#Explanation'>Explanation of Revenue Generation</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Net-Revenue-Calculation'>Net Revenue Calculation</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Risk-Analysis'>Risk Analysis</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Conclusion'>Conclusion</a>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#Organization-and-Management' className='field'>
                                    Organization and Management <LittleArrow />
                                </a>
                                <MainList>
                                    <li>
                                        <a href='#Organizational-Structure' className='field'>
                                            Organizational Structure <LittleArrow />
                                        </a>
                                        <MainList>
                                            <li className='field'>
                                                <a href='#Team-Members'>Team Members</a>
                                            </li>
                                        </MainList>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <a href='#Legal-and-Regulatory' className='field'>
                                    Legal and Regulatory Compliance <LittleArrow />
                                </a>
                                <MainList>
                                    <li className='field'>
                                        <a href='#Blockchain-and-Legal-Compliance'>Blockchain and Legal Compliance</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#KYC'>Know Your Customer (KYC) and Anti-Money Laundering (AML) Compliance</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Data-Protection'>Data Protection and Privacy Regulations</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Smart-Contract-Audits'>Smart Contract Audits</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Intellectual'>Intellectual Property Rights</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Jurisdictional'>Jurisdictional Considerations</a>
                                    </li>
                                    <li className='field'>
                                        <a href='#Legal-Counsel'>Legal Counsel and Compliance Oversight</a>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li className='field'>
                                <a href='#Final-Thoughts'>Final Thoughts</a>
                            </li>
                        </MainList>
                    </li>
                </ol>
            </aside>
            <article>
                <h3 id='executive-summary'>Executive Summary</h3>
                <h4 id='introduction'>Introduction</h4>
                <p>
                    In the Web 3 space, there's a noticeable gap for a company dedicated to helping projects through crowdfunding. Many
                    individuals have innovative ideas but lack the necessary funding, while others have capital, often earned from the Web 3
                    market, that they wish to invest in trusted projects. Web 3 has already achieved remarkable feats, and with the
                    potential for group investments, we aim to facilitate even greater accomplishments. Join us on this journey to create
                    something extraordinary. Our team of programmers, economists, and designers is committed to simplifying this process.
                </p>
                <h4 id='mission-statement'>Mission Statement</h4>
                <p>
                    Our mission is to democratize access to funding for innovative projects through the power of blockchain technology and
                    NFTs. We strive to create a transparent, secure, and collaborative environment where creators and investors can come
                    together to bring valuable ideas to life.
                </p>
                <h4 id='vision-statement'>Vision Statement</h4>
                <p>
                    Our vision is to become the leading platform for decentralized crowdfunding, empowering a global community of creators
                    and investors to drive innovation and economic growth.
                </p>
                <h3 id='business-model'>Business Model</h3>
                <p>
                    JUST READ IT (JRI) operates on a decentralized crowdfunding model using Non-Fungible Tokens (NFTs). Creators post their
                    projects on our platform and specify their funding requirements. We tokenize these funding needs into divisible $1 NFTs,
                    allowing a wide range of investors to contribute. Once fully funded, the project owner receives the funds, and the
                    investors receive NFTs that represent their stake in the project.
                </p>
                <h4 id='key-objectives'>Key Objectives</h4>
                <ul>
                    <li>
                        Facilitate Innovation: Enable creators to secure funding for their projects without the need for traditional
                        financial intermediaries.
                    </li>
                    <li>
                        Empower Investors: Provide a transparent and accessible platform for investors to discover and support innovative
                        projects.
                    </li>
                    <li>
                        Foster Collaboration: Create opportunities for skilled individuals to connect and collaborate on funded projects.
                    </li>
                    <li>
                        Ensure Security and Transparency: Leverage blockchain technology to maintain the integrity and transparency of all
                        transactions.
                    </li>
                </ul>
                <h4 id='services-overview'>Services Overview</h4>
                <ul>
                    <li>Crowdfunding Platform: A decentralized platform where creators can list their projects and seek funding.</li>
                    <li>
                        NFT Issuance: Tokenization of project funding into divisible NFTs, allowing for fractional ownership and investment.
                    </li>
                    <li>Marketplace: A secondary market for trading project-related NFTs.</li>
                    <li>Collaboration Hub: A space for project owners and skilled professionals to connect and collaborate.</li>
                </ul>
                <h3 id='market-position'>Market Position</h3>
                <p>
                    In the evolving realm of blockchain and decentralized finance, JRI is positioned to fill a critical gap by providing a
                    secure and transparent platform for crowdfunding. By leveraging the power of NFTs, we offer a unique value proposition
                    that sets us apart from traditional crowdfunding platforms.
                </p>
                <h3 id='financial-projections'>Financial Projections</h3>
                <p>
                    While detailed financial projections will be provided in the Financial Plan section, it is important to note that we
                    anticipate significant growth as we launch and scale our platform. Initial funding will be focused on platform
                    development, marketing, and building a strong community of creators and investors.
                </p>
                <h3 id='company-description'>Company Description</h3>
                <p>
                    We founded JRI in April 2024 to address the funding challenges faced by innovators in the Web 3 space. Our team,
                    comprised of experienced programmers, economists, and designers, came together with a shared vision to create a platform
                    that leverages the transparency and security of blockchain technology to democratize access to funding.
                </p>
                <h4 id='goals'>Goals</h4>
                <h4 id='short-term-goals'>Short-Term Goals</h4>
                <ul>
                    <li>Launch the initial version of the platform within the next three months.</li>
                    <li>Secure initial funding for operational costs and marketing efforts.</li>
                    <li>Build a community of early adopters and influencers in the Web 3 space.</li>
                </ul>
                <h4 id='long-term-goals'>Long-Term Goals:</h4>
                <ul>
                    <li>Expand our user base to include a diverse range of creators and investors globally.</li>
                    <li>Continuously enhance the platform with new features and improved security measures.</li>
                    <li>Establish JRI as the go-to platform for decentralized crowdfunding.</li>
                    <li>
                        Support Web3 Business Development: Help a multitude of innovative ideas come to life and function as successful,
                        real businesses.
                    </li>
                </ul>
                <h3 id='conclusion'>Conclusion</h3>
                <p>
                    JRI is not just a crowdfunding platform; it is a revolutionary approach to funding and collaboration in the Web 3 space.
                    By joining us, you become part of a transformative movement that empowers innovation and fosters economic growth.
                    Together, we can create a thriving ecosystem where ideas flourish and investments yield tangible results.
                </p>
                <h3 id='phase-0'>Phase 0: Distribution of JRI Contracts NFTs</h3>
                <h4 id='whitelist-tiers-and-OG-rewards'>Whitelist Tiers and OG Rewards</h4>
                <p>
                    Phase 0 of the JUST READ IT (JRI) project focuses on distributing JRI Contracts NFTs across three whitelist tiers: Gold,
                    Silver, and Bronze. These tiers offer varied benefits and privileges to participants. Among the 11,100 JRI Contracts,
                    1,090 are special NFTs with guaranteed values, including:
                </p>
                <ul>
                    <li>1 x 5 ETH OG Tier Contract: Awarded to the top-ranking OG.</li>
                    <li>1 x 4 ETH OG Tier Contract: Awarded to the second-rank OG.</li>
                    <li>1 x 3 ETH OG Tier Contract: Awarded to the third-rank OG.</li>
                    <li>1 x 2 ETH OG Tier Contract: Awarded to the fourth-rank OG.</li>
                    <li>6 x 1 ETH OG Tier Contracts: Awarded to the 5th to 10th ranking individuals.</li>
                    <li>90 x 0.5 ETH Gold Tier Contracts: Awarded to the 11th to 100th ranking individuals.</li>
                    <li>90 x 0.2 ETH Silver Tier Contracts: Randomly awarded to Silver Tier participants.</li>
                    <li>900 x 0.1 ETH Bronze Tier Contracts: Randomly awarded to Bronze Tier participants.</li>
                </ul>
                <img src={FV01} alt='' />
                <p>
                    This phase features three whitelist tiers: OGs and Gold Tier participants, Silver Tier, and Bronze Tier, each with
                    unique entry requirements.
                </p>
                <h4 id='ranking-system'>Ranking System</h4>
                <p>
                    Participants earn points by completing tasks on{' '}
                    <a href='https://www.guild.xyz/justreadit' target='_blank'>
                        www.guild.xyz/justreadit
                    </a>
                    . Here's how the tiers are structured based on your ranking. We will take a snapshot of the rankings at the end of June
                    2024.
                </p>
                <h4 id='minting-details'>Minting Details:</h4>
                <ul>
                    <li>OG/Gold Tier Minting: Reserved for the top 100 participants with the highest points. Minting price: 0.005 ETH.</li>
                    <li>Silver Minting: For individuals ranked 101st to 1100th. Minting price: 0.01 ETH.</li>
                    <li>Bronze Minting: For participants ranked 1001st to 11,100th. Minting price: 0.02 ETH.</li>
                </ul>
                <p>
                    Following the completion of the three-day minting period for JRI Contracts, if all 11,100 NFTs are not sold out, the
                    project will open the minting process to the public at the same Bronze Tier mint price of 0.02 ETH for another 24 hours.
                    If any NFTs remain unsold after this period, they will be burned to ensure exclusivity and maintain the collection's
                    value.
                </p>
                <h4 id='floor-sweeping-strategy'>Floor-Sweeping Strategy:</h4>
                <h4 id='#1st-day-floor-sweeping-strategy'>1st Day Floor-Sweeping Strategy:</h4>
                <p>
                    OGs and Gold tier participants will play a crucial role in stabilizing the market and enhancing the value of our
                    collection through our innovative floor-sweeping strategy. Upon the minting on day one, the project treasury will
                    already have accumulated 0.5 ETH. With this initial earning, the treasury's total funds will amount to 1 ETH. This
                    entire sum will then be allocated among a team of 10 OGs. These select individuals will strategically purchase JRI
                    Contracts listed below the Silver Tier minting price of 0.01 ETH, effectively contributing to market stabilization and
                    bolstering the floor price. The OG team will focus on sweeping the first 100 contracts listed below the designated
                    price. At this stage, all participants who minted JRI Contracts can sell them at twice the mint price, reflecting the
                    increased market value. At this point, the collection will have the first 1 ETH total volume on the market and a floor
                    price of 0.01 ETH.
                </p>
                <h4 id='2nd-day-floor-sweeping-strategy'>2nd Day Floor-Sweeping Strategy:</h4>
                <p>
                    As day two of minting begins, the treasury will earn an additional 10 ETH from the minting of 1000 contracts priced at
                    0.01 ETH each. This entire sum of 10 ETH will be distributed among all Gold Tier participants, ensuring each individual
                    receives 0.1 ETH. Participants are encouraged to utilize this ETH to engage in floor-sweeping activities by purchasing
                    any JRI Contracts listed below the Bronze minting price of 0.02 ETH. The team will focus on sweeping the first 500
                    contracts listed below the designated price, ensuring a swift and impactful implementation of the floor-sweeping
                    strategy. By this time, the collection in the market will have a total volume of 11 ETH and a floor price of 0.02 ETH,
                    allowing participants to sell their NFTs for about 2x to 4x the initial mint price.
                </p>
                <h4 id='3rd-Day-boosting-market-growth'>3rd Day Boosting Market Growth : </h4>
                <p>
                    At this point, the market floor price is already above the 0.02 ETH Bronze Tier minting price. The funds earned on the
                    third day will be used to make an unlimited-time offer to all holders of guaranteed value items, starting with all Gold
                    Tier contracts. Since all Gold Tier contracts have the same price, this offer will allow participants to sell their NFTs
                    even before the reveal.For each 25 mints, we are making an unlimited time offer to Gold Tier members worth 0.5 ETH. This
                    will force the market to grow in volume by 65 ETH, reaching a total of 76 ETH. This strategy will push the floor price
                    above 0.5 ETH, enhancing the overall market value and providing substantial returns for participants. This offer is
                    designed to encourage continuous participation and market activity, ensuring sustained growth and stability.
                </p>
                <div className='roadmap-field'>
                    <img src={Persons} alt='' />
                    <img src={RoadMap} alt='' />
                </div>
                <h3 id='the-day'>The Day</h3>
                <b>
                    At this point, we have already made an unlimited-time offer for all 1,090 guaranteed value NFTs, making the collection's
                    total volume more than 184 ETH.
                </b>
                <p>Secret Reward :</p>
                <p>
                    Attention devs and crypto enthusiasts! 📢 If you're reading this, we’ve got a special Easter egg for you. Guess the
                    floor price at the moment of reveal and the closest guess will win 1 ETH! 💰
                </p>
                <p>Submit your guess in the Discord general chat with this format:</p>
                <p>Happy guessing and good luck! 🚀</p>
                <h4 id='ensuring-trust'>Ensuring Trust</h4>
                <p>
                    <b>No team member participates in NFT minting.</b> Treasury allocations and participant rewards are transparently
                    managed to build trust and ensure the integrity of the minting process.
                </p>
                <p>
                    To establish trust in our guarantees, <b>no team member participates in NFT minting</b>. Prior to the first day of
                    minting, the treasury holds 0.5 ETH, equivalent to the entire first day allocation of 100 contracts at 0.005 ETH each.
                    <b>Before minting begins, we allocate this 0.5 ETH to the OGs</b>. As Gold Tier mints progress,
                    <b>we transfer the additional 0.5 ETH earned from these mints to the OGs</b>. On the second day, as the treasury gains
                    10 ETH from the minting of 1000 contracts, we allocate this sum to the 100 individuals on Gold Tier. Moving to the third
                    day, with every 25 contracts minted, the treasury earns 0.5 ETH. We utilize this 0.5 ETH to extend an unlimited-time
                    offer on Gold Tier NFTs, enabling participants to accept the offer even before the official reveal.
                </p>
                <h4 id='reveal-date'>Reveal Date:</h4>
                <p>Post-minting, the NFTs' metadata will be updated 48 hours later, unveiling their unique characteristics.</p>
                <h3 id='#market-analysis'>Market Analysis</h3>
                <h4 id='#industry-overview'>Industry Overview:</h4>
                <p>
                    The blockchain and decentralized finance (DeFi) industry is rapidly growing, with increasing interest in crowdfunding
                    and NFTs. This industry is characterized by its innovative approach to traditional financial systems, leveraging
                    blockchain technology to create transparent, secure, and decentralized platforms.
                </p>
                <h4 id='#target-market'>Target Market:</h4>
                <p>Our target market includes:</p>
                <ul>
                    <li>
                        <h4 id='perspective-of-project-funders'>Perspective of Project Funders</h4>
                        <p>
                            Many individuals who provide funding for others to start their businesses do so with the intent of supporting
                            innovative ideas, even if financial return and recognition are not their primary goals. They aim to give good
                            ideas the chance to be executed. However, funders deserve to benefit as well, both financially and in terms of
                            recognition for their contributions to various projects. Our platform allows funders to see all the projects in
                            need of funding within this space and invest in the ones they believe in. As these projects grow, funders hold
                            NFTs associated with these projects, which they can keep as a mark of their contribution or sell as valuable
                            assets. This approach ensures funders receive both financial rewards and acknowledgment for their support,
                            making the process rewarding in multiple ways.
                        </p>
                    </li>
                    <li>
                        <h4 id='perspective-of-individuals'>Perspective of Individuals with Ideas</h4>
                        <p>
                            From the viewpoint of those with innovative ideas, possessing a JRI NFT simplifies the process of finding
                            investors to fund their startups. They are directly showcased to funders within their industry, significantly
                            increasing their chances of securing the necessary capital. Additionally, many developers and designers in this
                            space can see their ideas. If these professionals find the ideas appealing, they might join the project,
                            allowing the idea creators to easily assemble a team of skilled individuals and collaborate in various ways to
                            bring their projects to life.
                        </p>
                    </li>
                    <li>
                        <h4 id='perspective-of-skilled-individuals'>Perspective of Skilled Individuals</h4>
                        <p>
                            From the viewpoint of those with valuable skills, they can send their resumes to projects in need of assistance
                            based on their requirements. This allows them to participate in successful projects, gaining experience and
                            recognition in their field while contributing to the growth of innovative ideas.
                        </p>
                    </li>
                </ul>
                <h4 id='market-needs'>Market Needs:</h4>
                <ul>
                    <li>Access to Funding: Creators need a reliable platform to secure funding for their projects.</li>
                    <li>Investment Opportunities: Investors seek transparent and secure platforms to invest in innovative projects.</li>
                    <li>
                        Collaboration: Both creators and investors benefit from a collaborative environment that fosters successful project
                        development.
                    </li>
                </ul>
                <h4 id='market-trends'>Market Trends:</h4>
                <ul>
                    <li>
                        Growing Interest in NFTs: The NFT market is expanding rapidly, with increasing adoption across various industries.
                    </li>
                    <li>
                        Decentralized Crowdfunding: There is a shift towards decentralized crowdfunding platforms that offer greater
                        transparency and security.
                    </li>
                    <li>Blockchain Adoption: More industries are adopting blockchain technology to enhance transparency and efficiency.</li>
                </ul>
                <h4 id='Competitive-Analysis'>Competitive Analysis:</h4>
                <p>
                    Our main competitors include traditional crowdfunding platforms and emerging blockchain-based crowdfunding platforms.
                    However, JRI stands out due to its unique approach of tokenizing funding needs into divisible NFTs, offering greater
                    flexibility and security for both creators and investors.
                </p>
                <h4 id='SWOT-Analysis'>SWOT Analysis:</h4>
                <h4 id='Strengths'>Strengths:</h4>
                <ul>
                    <li>
                        Innovative Platform: JRI's use of NFTs for decentralized crowdfunding is a pioneering approach that sets it apart
                        from traditional methods.
                    </li>
                    <li>
                        Strong Team: Our team is composed of experts in Web3, including experienced programmers, economists, designers, and
                        marketing specialists, ensuring a well-rounded expertise base.
                    </li>
                    <li>
                        Ensuring Project Commitment: Any person can participate with a low amount of money, but the project creator only
                        gets the funds when the majority of the community decides that the project is worth running. This lowers the risk
                        significantly. The creator needs to have our NFT to post their idea, indicating they have been in the market or have
                        invested some money already. Moreover, if the required funds are fully raised, it means several funders trust the
                        idea, suggesting it’s likely a good one that the creator is motivated to implement rather than pocket the initial
                        funds and abandon the project.
                    </li>
                    <li>
                        High Value of NFTs: The high value of our NFTs ensures that only committed individuals can participate. If someone
                        buys an expensive contract just to apply their business on our platform, it means they have strong faith in their
                        project. We also provide opportunities for those who can't afford NFTs to collaborate with existing NFT holders to
                        gather the necessary funds. However, if you believe strongly in your idea, it's best to secure this initial
                        investment yourself and then use your skills to market it to potential investors.
                    </li>
                    <li>
                        Strategic Partnerships: Our platform's credibility and reach are enhanced by our use of Base chain and rewarding
                        people with Degen. Additionally, our promotion on Farcaster sets the stage for future partnerships with these key
                        stakeholders in the blockchain and NFT space.
                    </li>
                    <li>
                        Transparent and Secure Transactions: Leveraging blockchain technology guarantees transparency and security, building
                        trust among users.
                    </li>
                    <li>
                        Investor Benefits: Investors not only gain profits from funded projects but also receive NFTs as tangible trophies
                        representing their contributions.
                    </li>
                </ul>
                <h4 id='Weaknesses'>Weaknesses:</h4>
                <ul>
                    <li>
                        Early-Stage Development: As a newly launched platform, JRI faces the typical challenges of growth and initial market
                        penetration.
                    </li>
                    <li>
                        Continuous Technology Updates: The fast-paced nature of blockchain technology necessitates regular updates and
                        improvements to stay competitive.
                    </li>
                    <li>
                        Limited Awareness of Web3: Blockchain technology is still relatively unknown to the general public. Many people are
                        not familiar with its concepts, benefits, or how it operates. This lack of awareness can create challenges in
                        attracting users and investors who might be hesitant to engage with a platform built on decentralized technologies.
                        Educating potential users and overcoming the initial skepticism will require significant effort and resources, which
                        could slow down our growth and adoption rates.
                    </li>
                    <li>
                        Navigating Global Regulatory Compliance: Operating on a global scale presents significant challenges due to the
                        varying laws and regulations surrounding blockchain transactions in different countries and jurisdictions. Each
                        region has its own legal framework, which can impact how we operate, onboard users, and manage transactions. This
                        complexity requires a dedicated effort to stay informed about regulatory changes, ensure compliance, and adapt our
                        operations accordingly. Managing these diverse legal requirements can be resource-intensive and may slow down our
                        expansion efforts.
                    </li>
                </ul>
                <h4 id='Opportunities'>Opportunities:</h4>
                <ul>
                    <li>
                        Collaborative Execution: We recognize that good ideas can sometimes suffer from poor execution. That's why we have
                        enabled collaboration on our platform. If you believe you can contribute to the better execution of a project, you
                        can assist the creator to ensure that neither your money nor others' investments go to waste. This collaborative
                        approach maximizes the chances of project success and effective use of resources.
                    </li>
                    <li>
                        Growing Interest in NFTs: The expanding market for NFTs provides a fertile ground for attracting a broad audience
                        interested in blockchain investments.
                    </li>
                    <li>
                        Expanding Target Market: The platform has the potential to reach a global audience of innovators, investors, and
                        skilled professionals.
                    </li>
                    <li>
                        Decentralized Finance (DeFi) Growth: Increasing adoption of DeFi solutions can drive more users to seek out
                        innovative crowdfunding platforms like JRI.
                    </li>
                </ul>
                <h4 id='Threats'>Threats:</h4>
                <ul>
                    <li>
                        Idea Theft: In the modern world, the concept of "idea theft" doesn't hold as much weight because any idea can be
                        executed in a thousand different ways. When you're looking for funding, there will always be people who might
                        implement your idea instead of funding it. This platform can provide better clarity on the timeline of idea
                        submissions. However, even if someone else steals your idea, you shouldn't lose hope. It's essential to try to
                        execute it in the best possible way. Success in business depends more on execution than just the idea.
                    </li>
                    <li>
                        Potential Website Hacks: While our platform leverages the security and transparency of blockchain technology for all
                        transactions, there remains a threat of potential hacks targeting our website. A successful hack could disrupt user
                        experience, compromise sensitive user data, and damage our reputation. However, it’s important to note that even in
                        the event of a website breach, the integrity of the transactions themselves would remain secure and unaffected due
                        to their execution on the blockchain. We must invest in robust cybersecurity measures to mitigate this risk and
                        ensure the continued trust of our users.
                    </li>
                    <li>
                        Competitive Market: The burgeoning blockchain and crowdfunding sectors are highly competitive, with many platforms
                        competing for market share.
                    </li>
                    <li>
                        Regulatory Challenges: Navigating the evolving regulatory landscape for blockchain and crowdfunding platforms can
                        pose significant risks.
                    </li>
                    <li>
                        Market Volatility: The value of cryptocurrencies can be highly volatile, affecting both investor confidence and the
                        platform's financial stability.
                    </li>
                </ul>
                <h3 id='Marketing Strategy'>Marketing Strategy</h3>
                <h4 id='Marketing-Objectives'>Marketing Objectives:</h4>
                <h4 id='Brand-Awareness'>Brand Awareness:</h4>
                <ul>
                    <li>
                        Phase 0 Success: In Phase 0, we successfully made approximately 15k people aware of our brand, who have already
                        minted or bought our contracts and gained substantial profit. These early adopters trust JRI and have experienced
                        firsthand the value we provide.
                    </li>
                    <li>
                        Expansion Strategy: Building on this foundation, we aim to further establish JRI as a trusted and innovative
                        platform in the blockchain and crowdfunding industry. Leveraging our initial success and the endorsements from our
                        profitable early adopters, we will expand our reach through targeted campaigns, strategic partnerships, and
                        high-profile events.
                    </li>
                    <li>
                        Goal: Increase brand visibility and recognition within the broader blockchain and crowdfunding communities, ensuring
                        JRI is synonymous with trust and innovation.
                    </li>
                </ul>
                <h4 id='Community-Building'>Community Building:</h4>
                <ul>
                    <li>
                        Engaged Early Adopters: Our early adopters, who have minted our contracts and profited from them, form a solid
                        foundation for our community and will act as ambassadors.
                    </li>
                    <li>
                        Community Initiatives: Foster a strong, active community through regular engagement activities such as AMAs,
                        webinars, and exclusive events. Encourage user-generated content and feedback to continuously improve the platform.
                    </li>
                    <li>
                        Goal: Cultivate a vibrant, supportive community where users are not only engaged and invested in the success of the
                        platform but also actively promote it, driving further growth and success.
                    </li>
                </ul>
                <h4 id='Target Audience'>Target Audience:</h4>
                <ul>
                    <li>Primary Audience: Builders, Innovators, entrepreneurs, and project creators seeking funding.</li>
                    <li>
                        Secondary Audience: Investors, including individuals and institutional investors interested in blockchain and NFT
                        investments.
                    </li>
                    <li>Tertiary Audience: Web 3 enthusiasts and early adopters of blockchain technology.</li>
                </ul>
                <h4 id='Marketing Channels'>Marketing Channels:</h4>
                <ul>
                    <li>
                        Social Media: Utilize platforms such as Farcaster, X, Guild, LinkedIn, and Discord to engage with our audience and
                        build a community.
                    </li>
                    <li>
                        Content Marketing: Create informative and engaging content, including blog posts, videos, and tutorials, to educate
                        users about our platform and the benefits of decentralized crowdfunding.
                    </li>
                    <li>
                        Influencer Partnerships: Collaborate with influencers and thought leaders in the blockchain and NFT space to promote
                        JRI.
                    </li>
                    <li>
                        Paid Advertising: During Phase 0, we implemented targeted advertising campaigns that successfully reached our target
                        audience. These campaigns played a crucial role in attracting the 11,100 people who minted our contracts. Now, these
                        contract holders are acting as our marketing ambassadors, as they have already profited from our platform and are
                        spreading the word about JRI.
                    </li>
                    <li>
                        Events and Webinars: We utilize apps like Farhouse to host and participate in industry events, webinars, and AMAs
                        (Ask Me Anything) to showcase our platform and connect with potential users.
                    </li>
                </ul>
                <h4 id='Growth Strategy'>Growth Strategy:</h4>
                <ul>
                    <li>Referral Program: Implement a referral program to incentivize users to invite others to join the platform.</li>
                    <li>
                        Strategic Partnerships: Form partnerships with other blockchain projects, NFT marketplaces, and relevant
                        organizations to expand our reach.
                    </li>
                    <li>
                        User Engagement: Regularly engage with our community through updates, Q&A sessions, and feedback mechanisms to
                        ensure user satisfaction and loyalty.
                    </li>
                </ul>
                <h3 id='Financial-Plan'>Financial Plan</h3>
                <h4 id='Revenue-Model'>Revenue Model:</h4>
                <p>
                    JRI's revenue model is based on transaction fees, premium services, and partnerships. We will charge a small fee for
                    each transaction on the platform, offer premium services for enhanced visibility and support, and explore strategic
                    partnerships for additional revenue streams.
                </p>
                <h4 id='Financial-Projections'>Financial Projections:</h4>
                <p>
                    Our financial projections are based on conservative estimates of user acquisition and transaction volume. Detailed
                    financial projections will include projected revenue, expenses, and profitability over the next three to five years.
                </p>
                <h4 id='Funding-Requirements'>Funding Requirements:</h4>
                <p>
                    To achieve our goals, we are seeking initial funding of $200,000. This funding will be used for platform development,
                    marketing, and operational costs. We will also explore additional funding rounds as we scale and expand our platform.
                </p>
                <h4 id='Use-of-Funds'>Use of Funds:</h4>
                <p id='Platform-Development'>Platform Development: 40% ($80,000)</p>
                <p id='Marketing-and-Community-Building'>Marketing and Community Building: 30% ($60,000)</p>
                <p id='Operational-Costs'>Operational Costs: 20% ($40,000)</p>
                <p id='Research-and-Development'>Research and Development: 10% ($20,000)</p>
                <h4 id='Explanation'>Explanation of Revenue Generation:</h4>
                <p>
                    Revenue for Phase 0 of the JRI project was generated through the distribution of 11,100 JRI Contracts NFTs across Gold,
                    Silver, and Bronze tiers. Minting these NFTs at varying price points resulted in revenue, which after subtracting
                    guaranteed payouts, operational costs, and a portion for further development, left a net revenue of 27 ETH, equivalent
                    to approximately $99,900 USD based on the exchange rate of 1 ETH = $3,700.
                </p>
                <h4 id='Net-Revenue-Calculation'>Net Revenue Calculation:</h4>
                <ul>
                    <li>Total Revenue from Minting: 210.5 ETH</li>
                    <li>Minus Sweeping Strategy Cost: 10.5 ETH</li>
                    <li>Minus Guaranteed Payouts: 173 ETH</li>
                    <li>Net Revenue: 210.5 ETH - 10.5 ETH - 173 ETH = 27 ETH</li>
                </ul>
                <p>Conversion to USD:</p>
                <ul>
                    <li>Net Revenue in USD: 27 ETH * $3,700/ETH = $99,900</li>
                </ul>
                <p>Additional Financial Insight:</p>
                <p>
                    From the total revenue of 210.5 ETH, subtracting the net revenue of 27 ETH leaves us with 183.5 ETH. Converting this to
                    USD:
                </p>
                <ul>
                    <li>Spent Inside the Community: 183.5 ETH * $3,700/ETH = approximately $700,000</li>
                </ul>
                <p>
                    This substantial investment is being spent within the community during Phase 0 to create organic marketing ambassadors.
                    By distributing these funds among the community members, we are effectively turning them into advocates for our
                    platform. These 11,100 contract holders, who have profited from our platform, will naturally spread the word about JRI.
                    This strategy is akin to having over 1,000 marketing experts working with us, driving organic growth and expanding our
                    reach through trusted, word-of-mouth promotion.
                </p>
                <h4 id='Risk-Analysis'>Risk Analysis:</h4>
                <p>
                    We have identified potential risks and developed strategies to mitigate them. These risks include market competition,
                    regulatory challenges, and technological issues. Our mitigation strategies include continuous technology updates, legal
                    compliance, and strategic partnerships.
                </p>
                <h4 id='Conclusion'>Conclusion:</h4>
                <p>
                    JUST READ IT (JRI) is poised to revolutionize the crowdfunding industry with its innovative use of blockchain technology
                    and NFTs. Our platform provides a secure, transparent, and collaborative environment for creators and investors to
                    connect and bring valuable projects to life. By joining us, you become part of a transformative movement that empowers
                    innovation and fosters economic growth. Together, we can create a thriving ecosystem where ideas flourish and
                    investments yield tangible results.
                </p>
                <h3 id='Organization-and-Management'>Organization and Management</h3>
                <h4 id='Organizational-Structure'>Organizational Structure:</h4>
                <p>
                    Our company is structured to ensure efficient development, management, and growth of our platform. We focus on building
                    a strong foundation with key roles in development, human resources, finance, and marketing, with plans to expand as we
                    grow. Below is an overview of our organizational structure:
                </p>
                <h4 id='Team-Members'>Team Members:</h4>
                <ul className='team-field'>
                    <li>
                        S. Sepehrnoush - CEO
                        <a href='https://www.linkedin.com/in/s-sepehrnoush/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        M. Sepehrnoush - CTO
                        <a href='https://www.linkedin.com/in/msepehrnoush' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        S. Ghafouri - CHRO
                        <a href='https://www.linkedin.com/in/shadi-ghafouri-b64792207/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        H.Jalouti - Business Developer
                        <a href='https://www.linkedin.com/in/hoomanjt/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        H. Karimi - Lead Developer
                        <a href='https://www.linkedin.com/in/karimi-hamid/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        A. Karimloo - Product Manager
                        <a href='https://www.linkedin.com/in/ali-karimloo-8b6215217/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        D. Sharifi - Designer
                        <a href='https://www.linkedin.com/in/danialsharifi/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        N. Ramezani - Designer
                        <a href='https://www.linkedin.com/in/negin-ramezani-5a5259204/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        S. Shamim - Marketing Specialist
                        <a href='https://www.linkedin.com/in/shadat-hossain-shamim/' target='_blank'>
                            LinkedIn
                        </a>
                    </li>
                </ul>
                <h3 id='Legal-and-Regulatory'>Legal and Regulatory Compliance</h3>
                <p>
                    At Just Read It (JRI), we recognize the importance of legal and regulatory compliance in our operations. While
                    blockchain technology offers significant advantages such as transparency and security, it does not exempt us from
                    adhering to applicable laws and regulations. Here's how we ensure compliance:
                </p>
                <h4 id='Blockchain-and-Legal-Compliance'>Blockchain and Legal Compliance</h4>
                <p>
                    Our utilization of blockchain technology enhances transparency and security in our platform. However, we understand that
                    legal compliance is paramount. We operate with full transparency and integrity within the legal frameworks of the
                    jurisdictions where we operate.
                </p>
                <h4 id='KYC'>Know Your Customer (KYC) and Anti-Money Laundering (AML) Compliance</h4>
                <p>
                    To prevent illicit activities, we implement robust KYC and AML procedures. These measures include verifying user
                    identities and monitoring transactions for suspicious activities, ensuring the integrity of our platform.
                </p>
                <h4 id='Data-Protection'>Data Protection and Privacy Regulations</h4>
                <p>
                    We respect user privacy and adhere to data protection regulations such as GDPR and CCPA. Our commitment to protecting
                    user data is unwavering, and we take proactive steps to safeguard sensitive information.
                </p>
                <h4 id='Smart-Contract-Audits'>Smart Contract Audits</h4>
                <p>
                    Our smart contracts undergo thorough audits to guarantee their security and compliance with applicable laws. These
                    audits are essential for identifying and mitigating potential vulnerabilities, ensuring a secure and reliable platform
                    for our users.
                </p>
                <h4 id='Intellectual'>Intellectual Property Rights</h4>
                <p>
                    We value intellectual property rights and take measures to protect our own intellectual property assets. Additionally,
                    we respect the intellectual property rights of others, fostering an environment of mutual respect and innovation.
                </p>
                <h4 id='Jurisdictional'>Jurisdictional Considerations</h4>
                <p>
                    Operating in multiple jurisdictions requires careful consideration of local laws and regulations. We meticulously study
                    and comply with the legal requirements in each jurisdiction where we operate, ensuring a seamless and compliant
                    experience for our users worldwide.
                </p>
                <h4 id='Legal-Counsel'>Legal Counsel and Compliance Oversight</h4>
                <p>
                    To guide us through regulatory complexities, we engage legal counsel with expertise in blockchain technology,
                    crowdfunding, and finance. Their guidance helps us navigate legal challenges and ensures that we operate ethically and
                    responsibly.
                </p>
                <h4 id='Final-Thoughts'>Final Thoughts:</h4>
                <p>
                    As we move forward, we have a promising vision for the next few months. We expect to complete Phase 0 in June 2024 and
                    aim to launch and test the initial version of Phase 1 within approximately three months. To achieve these goals, we are
                    building a strong development team. Currently, we have nine developers who are not only working on tasks related to
                    Phase 0 but also conducting necessary research for Phase 1.
                </p>
                <p>
                    In each of the following areas, we are forming dedicated teams. If you believe we can collaborate, please send your
                    resume to <a href='mailto:careers@justreadit.build'>careers@justreadit.build</a>
                </p>
                <p>
                    While each team currently has an initial setup, we need more individuals and additional funding, which we aim to secure
                    from Phase 0.
                </p>
                <p>
                    For companies interested in partnering with us, we are open to forming strategic alliances. Please send your partnership
                    proposals to <a href='mailto:partners@justreadit.build'>partners@justreadit.build</a>
                </p>
                <p> Together, we can enhance the platform's capabilities and reach new heights in the decentralized crowdfunding space.</p>
            </article>
        </FullVersionContainer>
    );
};

export default FullVersion;

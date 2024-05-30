// Assets
import { LittleArrow } from 'assets/icons';
import { FullVersionContainer, MainList } from './fullVersion.style';
import FV01 from 'assets/img/FV01.png';
import Persons from 'assets/img/person.png';
import RoadMap from 'assets/img/road-map.png';

const FullVersion = () => {
    return (
        <FullVersionContainer className='container'>
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
                                <div className='field'>
                                    Market Analysis <LittleArrow />
                                </div>
                                <MainList>
                                    <li className='field'>Industry Overview</li>
                                    <li>
                                        <div className='field'>
                                            Target Market <LittleArrow />
                                        </div>
                                        <MainList>
                                            <li className='field'>Perspective of Project Funders</li>
                                            <li className='field'>Perspective of Individuals with Ideas</li>
                                            <li className='field'>Perspective of Skilled Individuals</li>
                                        </MainList>
                                    </li>
                                    <li className='field'>Market Needs</li>
                                    <li className='field'>Market Trends</li>
                                    <li>
                                        <li>
                                            <div className='field'>
                                                Competitive Analysis <LittleArrow />
                                            </div>
                                            <MainList>
                                                <li>
                                                    <div className='field'>
                                                        SWOT Analysis <LittleArrow />
                                                    </div>
                                                    <MainList>
                                                        <li className='field'>Strengths</li>
                                                        <li className='field'>Weaknesses</li>
                                                        <li className='field'>Opportunities</li>
                                                        <li className='field'>Threats</li>
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
                                <div className='field'>
                                    Marketing Strategy <LittleArrow />
                                </div>
                                <MainList>
                                    <li>
                                        <div className='field'>
                                            Marketing Objectives <LittleArrow />
                                        </div>
                                        <MainList>
                                            <li className='field'>Brand Awareness</li>
                                            <li className='field'>Community Building</li>
                                        </MainList>
                                    </li>
                                    <li className='field'>Target Audience</li>
                                    <li className='field'>Marketing Channels</li>
                                    <li className='field'>Growth Strategy</li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <div className='field'>
                                    Financial Plan <LittleArrow />
                                </div>
                                <MainList>
                                    <li className='field'>Revenue Model</li>
                                    <li className='field'>Financial Projections</li>
                                    <li className='field'>Funding Requirements</li>
                                    <li>
                                        <div className='field'>
                                            Use of Funds <LittleArrow />
                                        </div>
                                        <MainList>
                                            <li className='field'>Platform Development</li>
                                            <li className='field'>Marketing and Community Building</li>
                                            <li className='field'>Operational Costs</li>
                                            <li className='field'>Research and Development</li>
                                        </MainList>
                                    </li>
                                    <li className='field'>Explanation of Revenue Generation</li>
                                    <li className='field'>Net Revenue Calculation</li>
                                    <li className='field'>Risk Analysis</li>
                                    <li className='field'>Conclusion</li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <div className='field'>
                                    Organization and Management <LittleArrow />
                                </div>
                                <MainList>
                                    <li className='field'>
                                        <li>
                                            <div className='field'>
                                                Organizational Structure <LittleArrow />
                                            </div>
                                            <MainList>
                                                <li className='field'>Team Members</li>
                                            </MainList>
                                        </li>
                                    </li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <div className='field'>
                                    Legal and Regulatory Compliance <LittleArrow />
                                </div>
                                <MainList>
                                    <li className='field'>Blockchain and Legal Compliance</li>
                                    <li className='field'>Know Your Customer (KYC) and Anti-Money Laundering (AML) Compliance</li>
                                    <li className='field'>Data Protection and Privacy Regulations</li>
                                    <li className='field'>Smart Contract Audits</li>
                                    <li className='field'>Intellectual Property Rights</li>
                                    <li className='field'>Jurisdictional Considerations</li>
                                    <li className='field'>Legal Counsel and Compliance Oversight</li>
                                </MainList>
                            </li>
                        </MainList>
                        <MainList>
                            <li>
                                <div className='field'>Final Thoughts:</div>
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
            </article>
        </FullVersionContainer>
    );
};

export default FullVersion;

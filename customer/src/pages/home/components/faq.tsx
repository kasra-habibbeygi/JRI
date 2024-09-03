// Assets
import { FAQContainer } from '../css';
import { CircleArrow } from 'assets/icons';

// MUI
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const FAQ = () => {
    return (
        <FAQContainer className='container'>
            <h3>Frequently Asked Questions</h3>
            <div className='accordion-field'>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel1-content' id='panel1-header'>
                        When will participants be able to sell their special NFTs with guaranteed values?
                    </AccordionSummary>
                    <AccordionDetails>
                        immediately following the collection reveal. At that moment, JRI will extend an unlimited time offer to all those
                        NFTs on OpenSea at their guaranteed price.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        How can I purchase JRI Contracts if I am not part of any of the whitelist tiers?
                    </AccordionSummary>
                    <AccordionDetails>
                        you will have the opportunity to purchase JRI Contracts from the secondary market after the initial minting phases
                        are complete.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        When does Phase 1 of the JRI project begin?
                    </AccordionSummary>
                    <AccordionDetails>
                        It has already commenced, and our development team is actively working on building the platform. Phase 0, which
                        focuses on distributing the NFT contracts, is essential for laying the foundation for Phase 1. Once it’s completed,
                        we will transition into Phase 1, where the blockchain-based crowdfunding platform will be fully operational,
                        expected within approximately three months.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        How can we trust the system?
                    </AccordionSummary>
                    <AccordionDetails>
                        The system consistently proves its reliability by staying one step ahead of its promises.To establish trust in our
                        guarantees, no team member participates in NFT minting. Before minting begins, we ensure that 0.5 ETH is allocated
                        to the OGs, equivalent to the entire first day minting earnings. On the following day, we allocate the entire second
                        day minting earnings of 3 ETH to Gold Tier members for floor-sweeping purposes. Then, on the third day, for every
                        150 mints that earn 0.3 ETH, we extend an unlimited-time offer for 0.3 ETH guaranteed ُSpecial contracts. By the
                        time minting concludes, we've generated approximately 7 ETH in market volume through JRI guaranteed contracts alone,
                        reaffirming the system's trustworthiness and effectiveness.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        Is this really gonna work?
                    </AccordionSummary>
                    <AccordionDetails>Just Read It 🙂</AccordionDetails>
                </Accordion>
            </div>
        </FAQContainer>
    );
};

export default FAQ;

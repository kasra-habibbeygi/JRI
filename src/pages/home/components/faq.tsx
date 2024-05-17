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
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nunc amet eleifend fames sit nulla leo sagittis. Non nunc
                        malesuada non sed sem ultricies. Dictum sit.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        How can I purchase JRI Contracts if I am not part of any of the whitelist tiers?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nunc amet eleifend fames sit nulla leo sagittis. Non nunc
                        malesuada non sed sem ultricies. Dictum sit.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        When does Phase 2 of the JRI project begin?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nunc amet eleifend fames sit nulla leo sagittis. Non nunc
                        malesuada non sed sem ultricies. Dictum sit.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<CircleArrow />} aria-controls='panel2-content' id='panel2-header'>
                        How can we trust this ?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet consectetur. Eget arcu nunc amet eleifend fames sit nulla leo sagittis. Non nunc
                        malesuada non sed sem ultricies. Dictum sit.
                    </AccordionDetails>
                </Accordion>
            </div>
        </FAQContainer>
    );
};

export default FAQ;

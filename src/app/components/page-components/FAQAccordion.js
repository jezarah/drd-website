import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQAccordion() {
    return (
        <>
            <h1 id="faq" className="text-2xl text-center font-bold mb-2 scroll-mt-16">FAQ&apos;s</h1>
            <div className="w-full">
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Why would you choose Waterproofing over Dampproofing?
                    </AccordionSummary>
                    <AccordionDetails>
                        Waterproofing gives you a peace of mind when your basement is situated in a higher risk environment. For example, Hill side, poor draining substrate, and below surface artesian like water pressures.
                        If you have below grade equipment or finishings that just demand that added protection, we recommend Waterproofing.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        How long should I allow for the process to take?
                    </AccordionSummary>
                    <AccordionDetails>
                        Typically a system will take 1-3 days to install. Factors will include weather, city and or envelope inspection of the coating before a dimple membrane can be installed. The size of the project may also be a determining factor.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        When should I book the Service?
                    </AccordionSummary>
                    <AccordionDetails>
                        We generally like 10 days to ensure priority service, however 1 week is often all we need.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        Can we get a site visit and risk assessment before booking service?
                    </AccordionSummary>
                    <AccordionDetails>
                        Absolutely, one of our service techs can meet you on site to go over potential risks and benefits to our different systems.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        How do you handle payments?
                    </AccordionSummary>
                    <AccordionDetails>
                        We will send a bill by email and upon completion allow you to get a Pass inspection from your local building inspector.
                        We accept cheque, cash or e-transfer and expect prompt payment in a week or two.
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}
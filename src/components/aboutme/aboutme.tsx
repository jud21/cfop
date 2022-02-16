import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

interface Props {
    title: string;
}

const useStyles = makeStyles({
    public: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px',
    }
});

export const AboutMe = (props: Props) => {
    const classes = useStyles();
    return (
        <div id="aboutme" className={classes.public}>
            <h2>About Me</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Answer
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
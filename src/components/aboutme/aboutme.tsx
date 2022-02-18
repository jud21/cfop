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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>How did I get interested in finance and investing?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I've always had an affinity for numbers and money. Appearently, as a toddler I would sit at the countertop with my great-grandmother and count the quarters in her change purse. I was that kid in math class that the teacher would be annoyed with because I'd find the right answer, but not with the method they taught.
                    </Typography>
                    <Typography>
                        Before my grandfather passed, a full-time swing trader in his so-called "retirement", he made a point of taking me down the rabbit hole of anything and everything you could find in the S&P. From 17 on, I would do quick analyses for him of any given stock, and offer him a youthful point-of-view, in exchange he'd gift me insight into his experience.
                    </Typography>
                    <Typography>
                        As I grew up and became responsible for all my own financial decisions, I discovered Crypto and was quickly in awe of all the possibilities the technology offered, finance and beyond. I can say I'm a true-believer in the space and am looking to become involved full-time.  I took a programming bootcamp to further familiarize myself with how computer systems work, and am currently studying Solidity in my spare time to understand the ins and outs of smart contracts.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>How can I benefit you?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Isn't that the million dollar question? I'm a hard worker with a clever and solution-oriented mindset. While this is a hard question to answer without the specifics of a job position, I trust you'll find I'm a very adaptable person with quick uptake, and a bit of a perfectionist attitude, for better or worse. I have a broad set of skills including business developement, client/patron relationship maintenance, software developement, and public speaking which allow me to analyze situations from multiple angles.  I like to try and view situations from a high-level point-of-view to ensure any problem is being solved coherently.  If hired by you, I expect you'll find me accomplishing feats for your project beyond my job description.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>What's my favorite quote?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <i>“Don’t let your boy’s schooling interfere with his education” -Mark Twain</i>. Perhaps a bit different than how we would state it now, the message remains the same- it's a big world out there, and while school can teach you what things are like, it can't necessarily give you the experiences to truly know what they are. I have no issues with school, I'm a graduate of a large high school and have completed many certficate programs to broaden my skill base. I see college as the perfect opportunity for many, but found the cost not worth the gain in my particular situation.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>What am I reading?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Let's stick to books because I don't think I have the space for an endless barrage of Twitter threads. One book I often return to is <i>Meditations</i> by Marcus Aurelius. The Lindy Effect suggests that the future relevancy of something, like a technology or an idea, is proportional to their current age. The wisdom offered by this journal of the last great Roman emperor has lasted for nearly two-thousand years, and I suspect it will last another two-thousand.
                    </Typography>
                    <Typography>
                    <i>Flash Boys: A Wall Street Revolt</i> by Michael Lewis is another interesting story. It takes you down a winding path with various, unorthodox, Wall Street traders as they search for answers about why the numbers on their computer screens are never the same as the numbers that end up executing on the market. What now seems like an intuitive, obvious answer: high-frequency trading, was then a world wide mystery for all but those who were directly benefitting. While we now know what was causing them trouble, there are many lessons we can take away from this period and look to apply, and benefit from, in the future.
                    </Typography>
                    <Typography>
                    <i>Entangled Life</i> by Merlin Sheldrake is another book that has fascinated me recently. It's a deep dive into the least understood kingdom of life, exploring our planet's reliance on fungal species, and the interconnectedness of our ecosystems as a whole.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>What's my favorite video game?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You're really putting me on the spot here! I'm a storyteller at heart, and as such, I like games that foster a sense of adventure and overcoming impossible odds. Games like <i>The Legend of Zelda: Majora's Mask</i>, where you traverse an anxious, bizarre land and live the end of the world over and over, until you eventually stop the cycle, and explore themes of loss and true sacrifice. Other favorites: <i>Super Mario Sunshine</i>, <i>Skyrim</i>, and <i>Super Mario 64</i>.
                    </Typography>

                    <Typography>
                        I also enjoy many player-vs-player games to feed the competitor in me. <i>Super Mario Strikers</i>, <i>Rocket League</i>, <i>Mario Superstar Baseball</i>, and <i>Mario Kart: Double Dash</i> are some of my top picks.  As you can see, most of my favorites are a bit outdated, maybe it's because they made better games around 2005, or maybe it's nostalgia. If I had to pick one... it's <i>Mario Kart: Double Dash</i>. I haven't lost a cup in twelve years, but I never turn down a new challenger!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import ourmission from '../../assets/images/ourmission.png'

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
    },
    my_photo: {
        backgroundImage: `url(${ourmission})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '600px',
        width: '600px',
    }
});

export const AboutMe = (props: Props) => {
    const classes = useStyles();
    return (
        <div id="aboutme" className={classes.public}>
            <div className={classes.my_photo}></div>
        </div>
    );
}
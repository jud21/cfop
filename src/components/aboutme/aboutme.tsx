import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import ourmission from '../../assets/images/ourmission.png'
import Grid from '@mui/material/Grid';
import youtube from '../../assets/images/youtube.png';
import tiktok from '../../assets/images/tiktok.png';
import insta from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png';

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
    },
    pro_photo: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ff6600",
    },
    tube: {
        borderRadius: '25px 25px 25px 25px',
        width: '175px',
        height: '60px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#12214b',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '15px',
        marginBottom: '25px'
    },
    photoyou: {
        height: '150px',
        width: '160px'
    },
    phototik: {
        height: '35px',
        width: '125px'
    },
    photoinsta: {
        height: '110px',
        width: '200px'
    },
    phototwitter: {
        height: '75px',
        width: '125px'
    }
});

export const AboutMe = (props: Props) => {
    const classes = useStyles();
    return (
        <div id="aboutme" className={classes.public}>
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={10}></Grid>
                            <div className={classes.pro_photo}>
                                <div className={classes.tube}>
                                    <a href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                                        <img src={youtube} className={classes.photoyou} alt="YouTube Logo" />
                                    </a>
                                </div>
                                <div className={classes.tube}>
                                    <a href="https://www.tiktok.com/@cryptoforoldpeople" target="_blank">
                                        <img src={tiktok} className={classes.phototik} alt="TikTok Logo" />
                                    </a>
                                </div>
                                {/* <div className={classes.tube}>
                                    <a href="https://www.instagram.com/cryptooldpeople/" target="_blank">
                                        <img src={insta} className={classes.photoinsta} alt="Instagram Logo" />
                                    </a>
                                </div> */}
                                <div className={classes.tube}>
                                    <a href="https://twitter.com/CryptoOldPeople" target="_blank">
                                        <img src={twitter} className={classes.phototwitter} alt="Twitter Logo" />
                                    </a>
                                </div>
                            </div>
                </Grid>
            </div>
            <div className={classes.my_photo}></div>
        </div>
    );
}
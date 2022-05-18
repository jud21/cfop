import React from 'react';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';
import { Contact, Projects, AboutMe } from '../../components';
import { borderRadius } from '@material-ui/system';
import Grid from '@mui/material/Grid';
import space from '../../assets/images/newbackground.png';
import space2 from '../../assets/images/back3.png'
import pnglogo from '../../assets/images/pnglogo.png';
import youtube from '../../assets/images/youtube.png';
import tiktok from '../../assets/images/tiktok.png';
import insta from '../../assets/images/instagram.png';
import twitter from '../../assets/images/twitter.png'
import { createMuiTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles'

const theme: Theme = createMuiTheme();

interface Props {
    title: string;
}


const useStyles = makeStyles({
    root: {
        padding: '0',
        margin: '0',
        fontFamily: "'Montserrat', sans-serif",
        overflow: 'visible',
    },
    navbar: {
        position: 'sticky',
        top: '0',
        alignSelf: 'flex-start',  
        marginBottom: '16px',
        backgroundColor: '#12214b'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        padding: '1rem 1rem 1rem 1rem',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'space-around'
        },
        color: '#ff6600',
        fontFamily: 'Chalkduster'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        textDecoration: 'none'
    },
    link_in_grid: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        color: '#ff6600',
        textDecoration: 'none',
        fontSize: '14pt',
        fontFamily: 'Chalkduster'
    },
    navigation: {
        display: 'flex',
        listStyle: 'none',
        justifyContent: 'flex-end'
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    main_text: {
        backgroundImage: `url(${space2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '80%',
        paddingBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        position: 'relative',
        padding: '5%',
        color: 'rgba(50,50,50,1)'
    },
    my_photo: {
        color: '#ff6600',
        fontFamily: 'Chalkduster',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '150px',
        width: '250px'
    },
    my_photo2: {
        color: '#ff6600',
        fontFamily: 'Chalkduster',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        height: '250px',
        width: '250px',
        marginBottom: '20vh'
    },
    pro_photo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#ff6600",
    },
    about_text: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10%',
        fontSize: '22pt',
        color: '#ff6600'
    },
    links_resume: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '40%',
        alignItems: 'center'

    },
    logo_adjust: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px'
    },
    Logos: {
        borderRadius: '30px 30px 30px 30px',
        width: '50px',
        height: '50px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '15px'
    },
    LinkedInLogo: {
        width: '25px'
    },
    GitHubLogo: {
        width: '25px'
    },
    tube: {
        borderRadius: '25px 25px 25px 25px',
        width: '175px',
        height: '60px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'white',
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

export const Home = (props: Props) => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <nav className={classes.navbar}>
                <Grid container className={classes.navbar_container}>
                    <Grid item xs={12} sm={12} md={4} className={classes.logo}>
                        <h1>
                            Crypto For Old People
                        </h1>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <Grid container className={`${classes.navigation} ${classes.logo_navigation}`}>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid} >
                                <HashLink
                                    to='/'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Home</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#aboutme'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Our Mission</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#projects'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Episodes</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#contact'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Contact</HashLink>
                            </Grid>
                            <Grid item xs={12} sm={12} md="auto" className={classes.link_in_grid}>
                                <HashLink
                                    to='/#contact'
                                    className={classes.nav_a}
                                    scroll={el => el.scrollIntoView({ behavior: 'smooth' })}
                                >Donate</HashLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </nav>
            <main className={classes.main}>
                    <div className={classes.main_text}>
                        <Grid container spacing={2}>
                            <Grid item sm={12} md={5}>
                                <div className={classes.pro_photo}>
                                    <div className={classes.my_photo}>
                                        <h1 className={classes.my_photo2}>Crypto moves pretty fast.
                                        </h1>
                                    </div>
                                    <div>
                                        <h1 className={classes.my_photo2}>If you don't stop and watch Crypto For Old People every other Monday, 
                                            you could miss it.
                                        </h1>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item sm={12} md={7} className={classes.about_text} sx={{ p: "10%" }}>
                            </Grid>
                        </Grid>
                        {/* <Grid container spacing={80}>
                            <Grid item sm={12} md={10}></Grid>
                                <div className={classes.pro_photo}>
                                    <h2>Subscribe to our Channels!</h2>
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
                                    <div className={classes.tube}>
                                        <a href="https://www.instagram.com/cryptooldpeople/" target="_blank">
                                            <img src={insta} className={classes.photoinsta} alt="Instagram Logo" />
                                        </a>
                                    </div>
                                    <div className={classes.tube}>
                                        <a href="https://twitter.com/CryptoOldPeople" target="_blank">
                                            <img src={twitter} className={classes.phototwitter} alt="Twitter Logo" />
                                        </a>
                                    </div>
                                </div>
                        </Grid> */}
                    </div>
                <AboutMe title={'aboutme'} />
                <Projects title={'projects'} />
                <Contact title={'contact'} />
            </main>

        </div>

    )
}
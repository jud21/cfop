import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { padding } from '@mui/system';
import InvestCalc from '../../assets/images/investcalc.png';
import Crypto from '../../assets/images/cryptotracker.png';
import Dealer from '../../assets/images/dealer.png';
import ShoppingCart from '../../assets/images/shoppingcart.jpg';
import Parking from '../../assets/images/parking.jpg';
import placeholderImage from '../../assets/images/placeholder.png';
import Weather from '../../assets/images/weatherpic.jpeg';
import myPort from '../../assets/images/portsite.png';
import comingsoon from '../../assets/images/comingsoon.png';
import { styled } from '@mui/material/styles';



interface Props {
    title: string;
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    proj: {
        marginBottom: '5vh',
        alignItems: 'center'
    }
});

const cardStyles = {
    width: 400,
    padding: '0',
    boxShadow: 10,
    margin: '2%'
}

export const Projects = (props: Props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();

    return (
        <div id="projects" className={classes.root}>

            {/* Blockchain----------------------------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Blockchain Explained:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            HIGH-LEVEL Overview
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming March 19th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Layer 1 ------------------------------------------------------------------------ */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Leading Layer 1 Blockchains:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            TVL, Volume, Wallets, and dApps TELL ALL
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming March 26th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Layer 2-------------------------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Leading Layer 2s:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Metrics KEEP NO SECRETS
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming April 2nd, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore 
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Oracles ------------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Leading Oracles:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            CRYPTO's Most UNDERAPPRECIATED NECCESSITY
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming April 9th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Decentralization--------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            The Importance of DECENTRALIZATION:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Crypto's Core Principles
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming April 16th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link> 
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* NFTs -----------------------------------------------------------------*/}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            NFTs:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            HIGH-LEVEL OVERVIEW
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming April 23rd, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* DeFi---------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            DeFi:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            HIGH-LEVEL OVERVIEW
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming April 30th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* NFT Series 1---------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            NFTs:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Generative Art | RENAISSANCE 2.0??
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming May 7th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* NFT Series 2---------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={comingsoon}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            NFTs:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            GameFi | Own Your Items
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming May 14th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                ---Paragraph here---
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
        </div>
    );
}
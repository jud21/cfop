import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
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
import blockchain from '../../assets/images/blockchain.png';
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
                        image={blockchain}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            blockchain finally explained in a way you can understand
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>New Release!</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/watch?v=9Rgf-o32dL4&t=6s" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                What a blockchain is and why they're important.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Sectors----------------------------------------------------------------------------------- */}
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
                            Sectors:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            The Current Crypto Landscape
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming May 1st, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming May 8th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming May 15th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming May 22nd, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming May 29th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            NFTs Explained:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            HIGH-LEVEL OVERVIEW
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming June 5th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            DeFi Explained:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            HIGH-LEVEL OVERVIEW
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming June 12th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Self Custody---------------------------------------------------------------- */}
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
                            Is Self Custody For You?
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            How Do YOU Want To Store YOUR Crypto
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming June 19th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Wallets---------------------------------------------------------------- */}
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
                            How To Set Up a Crypto Wallet:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            METAMASK
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming June 26th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Scams---------------------------------------------------------------- */}
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
                            Common Crypto SCAMS:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Don't Fall For Their Tricks
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming July 3rd, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Tokenomics---------------------------------------------------------------- */}
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
                            Tokenomics:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Why Some Tokens Have Value and Others Don't.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming July 10th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Merge---------------------------------------------------------------- */}
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
                            The ETHEREUM MERGE:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Crypto's BIGGEST EVENT TO DATE
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming July 17th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming July 24th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
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
                            <h3>Coming July 31st, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* NFT Series 3---------------------------------------------------------------- */}
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
                            Simplified transfer of OWNERSHIP
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 7th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* DeFi Series 1---------------------------------------------------------------- */}
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
                            Exchanges and Liquidity Pools
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 14th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* DeFi Series 2---------------------------------------------------------------- */}
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
                            Lending Protocols
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 21st, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* DeFi Series 3---------------------------------------------------------------- */}
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
                            Options Protocols- Leverage to the MAX
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 28th, 2022</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/channel/UCgwXq49c5l1LfHgeP4DNpSw" target="_blank">
                            <IconButton aria-label="github link">
                                <YouTubeIcon />
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
                                Coming Soon!
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
        </div>
    );
}
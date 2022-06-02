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
import scphoto from '../../assets/images/scphoto.png'
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
                            <h3>Released May, 2022</h3>
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
                                This episode covers what a blockchain is and why they're important.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/* Smart Contracts----------------------------------------------------------------------------------- */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={scphoto}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            smart contracts finally explained in a way you can understand
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>New Release!</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://www.youtube.com/watch?v=GRZYPWyJ6Hg" target="_blank">
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
                                This episode covers what a smart contract is, the potential uses of smart contracts, and the most popular smart contracts of today.
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
                            <h3>Coming June 20th, 2022</h3>
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
                            <h3>Coming July 11th, 2022</h3>
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
            {/* Stable Coins--------------------------------------------------- */}
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
                            On Stable Coins and Central Bank Digital Currencies:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Is There A Better Way?
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 1st, 2022</h3>
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
            {/* Law is Tech--------------------------------------------------- */}
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
                            A Journey Back To 1546:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            Sometimes The Best Evolutions in Technology Aren't Technological Evolutions
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming August 22nd, 2022</h3>
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
                            DeFi and Money Legos:
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" color='#12214b' fontFamily='Chalkduster'>
                            A System That Works Together
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming September 12th, 2022</h3>
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
                            <h3>Coming October 3rd, 2022</h3>
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
                            Why Some Tokens Have Value and Others Don't
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming October 24th, 2022</h3>
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
                            <h3>Coming November 14th, 2022</h3>
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
                            A Jump Through Two Hoops
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Coming December 5th, 2022</h3>
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
                            <h3>Coming December 26th, 2022</h3>
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
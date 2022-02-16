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
import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';
import InvestCalc from '../../assets/images/investcalc.png';
import Crypto from '../../assets/images/cryptotracker.png';
import Dealer from '../../assets/images/dealer.png';
import ShoppingCart from '../../assets/images/shoppingcart.jpg';
import Parking from '../../assets/images/parking.jpg';
import placeholderImage from '../../assets/images/placeholder.png';
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
        justifyContent: 'center'
        // alignItems: 'center'

    },
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

            {/*///////////////////////////////////////////////////////// My Portfolio Site ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={placeholderImage}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            JD's Portfolio Site
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>React, TypeScript, JavaScript</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com" target="_blank">
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
                                A Portfolio website, rendered with React, displaying various projects of mine, and introducing myself as a person.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Crypto Portfolio Tracker ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Crypto}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Crypto Portfolio Tracker
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>React, TypeScript, JavaScript</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://github.com/jud21/crypto_portfolio_tracker" target="_blank">
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
                                A full-stack multi-page web application with a React frontend that provides users with the option to save the contents and quantity 
                                of their crypto portfolio, and displays it's USD worth.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Weather App ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={placeholderImage}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather Application
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>JavaScript, HTML, CSS</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://github.com/jud21/Portfolio/tree/main/weekend%20project" target="_blank">
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
                                A web application that will display the temperature high, temperature low, humidity, and forecast for the day based on the user's city.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Investment Calculator ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={InvestCalc}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Investment Property Calculator
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Python</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/jud21/Portfolio/blob/main/Desktop/Operators-73/week-1/InvestCalc.py" target="_blank">
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
                                A calculator program that takes various components of your life as inputs, to project potential profit in property investment scenarios.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Parking Garage ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Parking}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Automated Parking Garage
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Python</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/jud21/Portfolio/blob/main/Desktop/Operators-73/week-1/Thursday_Lesson_Inclass-Updated2021.ipynb" target="_blank">
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
                                A Python program designed to manage a parking garage.  Accounting for capacity and payment.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Shopping Cart ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ShoppingCart}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Digital Shopping Cart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>Python</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                         <Link href="https://github.com/jud21/shoppingcart/blob/main/cart/shoppingcart.py" target="_blank">
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
                                A program that operates as a digital shopping cart with add item, delete item, show items, and quit shopping functionality.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
            {/*///////////////////////////////////////////////////////// Car Dealership Database ////////////////////////////////////////////////////////////////  */}
            <Card sx={cardStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Dealer}
                        alt="Project"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Car Dealership Database
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <h3>SQL</h3>
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Link href="https://github.com/jud21/Portfolio/blob/main/Desktop/Operators-73/week-1/cardealership1" target="_blank">
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
                                Designed an ERD for a car dealership and utilized it to build a database through PostgreSQL.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
        </div>
    );
}
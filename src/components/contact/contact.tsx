import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { padding } from '@mui/system';
import { createMuiTheme } from '@mui/material/styles';

const theme: Theme = createMuiTheme();


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        backgroundImage: 'linear-gradient(to right, cornflowerblue, lavender)'

    },
    nameEmailFields: {
        width: '49%'
    },
    form: {
        height: '400px',
        width: '800px',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            maxWidth: '800px'
        },
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        justifyContent: 'space-between'
    },
    nameEmail: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    footer:{
        margin: '30px auto'

    }

});


interface Props {
    title: string;
}

export const Contact = (props: Props) => {
    const classes = useStyles();
    return (
        <div id="contact" className={classes.root}>
            <h2>Contact me</h2>
            <form action="" className={classes.form}>
                <div className={classes.nameEmail}>
                    <TextField
                        id="Name"
                        label="Name"
                        variant="outlined"
                        className={classes.nameEmailFields}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        className={classes.nameEmailFields}
                    />
                </div>
                <TextField
                    id="Subject"
                    label="Subject"
                    variant="outlined"
                />
                <TextField
                    id="Message"
                    label="Message"
                    multiline
                    rows={4}
                    maxRows={5}
                />
                <Button variant="contained">Submit</Button>
                <div className={classes.footer}>
                    <p>© 2022 Joseph Fallon. All Rights Reserved</p>
                </div>

            </form>
        </div>
    )
}
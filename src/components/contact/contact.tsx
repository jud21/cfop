import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles'
import { padding } from '@mui/system';
import { createMuiTheme } from '@mui/material/styles';
import beach from '../../assets/images/beach.jpg';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { Props } from 'next/script';
import { url } from 'inspector';

const theme: Theme = createMuiTheme();


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        backgroundImage: `url(${beach})`

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
        margin: '30px auto',
        color: '#F5F5F5'
    },
    para:{
        marginTop: '2vh',
        fontFamily: 'fantasy',
        color: '#F5F5F5'
    },
    new: {
        marginTop: '2vh',
        color: '#F5F5F5'
    }

});
/**
export default async function async(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
        let transporter: Transporter = nodemailer.createTransport({
        	host: 'smtp.gmail.com',
        	port: 465,
            auth: {
              user: 'fakesender38@gmail.com',
              pass: 'simplepassword',
            },
      	});
        let options = {
            from: `${req.body.email}`,
            to: 'joe.d.fallon@gmail.com',
            subject: `${req.body.subject}`,
            text: `${req.body.message}`,
      	};
       let result: SMTPTransport.SentMessageInfo = 
       await transporter.sendMail(options);
       res.status(200);
    }
    catch(error){
    	res.status(400);
    }
}

interface Props {
    title: string;
}
*/
export const Contact = (props: Props) => {

    const [form, setForm] = useState({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
      ) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
      }
      const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
      };

    const classes = useStyles();
    return (
        <div id="contact" className={classes.root}>
            <h2 className={classes.new}>Contact me</h2>
            <p className={classes.para}>Reach out with any inquiries or opportunities and I'll respond as soon as possible.</p>
            <form action="" className={classes.form}>
                <div className={classes.nameEmail}>
                    <TextField
                        id="Name"
                        label="Name"
                        variant="outlined"
                        onChange={handleChange}
                        className={classes.nameEmailFields}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        className={classes.nameEmailFields}
                    />
                </div>
                <TextField
                    id="Subject"
                    label="Subject"
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    id="Message"
                    label="Message"
                    multiline
                    rows={4}
                    maxRows={5}
                    onChange={handleChange}
                />
                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                <div className={classes.footer}>
                    <p>© 2022 Joseph Fallon. All Rights Reserved</p>
                </div>

            </form>
        </div>
    )
}
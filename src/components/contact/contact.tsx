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
// import { url } from 'inspector';
// import sender from '../api/contact'

const theme: Theme = createMuiTheme();

interface IEmail {
    email: string;
    subject: string;
    message?:string;
    name?: string
}

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

// <a href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
//   Send mail with cc, bcc, subject and body
// </a>



export const Contact = (props: Props) => {

    const [form, setForm] = useState<IEmail>({
        email: '',
        subject: '',
        message: '',
        name: ''
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
      ) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
        console.log(form)
      }
    //   const handleSubmit = async (e: SyntheticEvent) => {
    //     e.preventDefault();
    //     try {
    //         let res = await axios.post(`/api/contact`, form);
    //         alert(`Email Sent! Thank You.`);
    //     } catch (error) {
    //         alert(`An error occured. Please Try Again.`);
    //     }
        // const handleSubmit = async (e: SyntheticEvent) => {
        //     e.preventDefault();
        //     try {
        //         let res = await sender(form[`name`], form.email, form.subject, form.message)
        //         alert(`Email Sent! Thank You.`);
        //     } catch (error) {
        //         alert(`An error occured. Please Try Again.`);
        //     }
// };
    
    const url: string = `mailto:joe.d.fallon@gmail.com?subject="${form.subject}"&body="${form.message}"`
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
                        name = "name"
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        variant="outlined"
                        onChange={handleChange}
                        className={classes.nameEmailFields}
                        name = "email"
                    />
                </div>
                <TextField
                    id="Subject"
                    label="Subject"
                    variant="outlined"
                    onChange={handleChange}
                    name = 'subject'
                />
                <TextField
                    id="Message"
                    label="Message"
                    multiline
                    rows={4}
                    maxRows={5}
                    onChange={handleChange}
                    name = "message"
                />
                {/* <Button variant="contained" onClick={handleSubmit}>Submit</Button> */}
                <Button variant="contained">
                    <a href={url}>Submit</a>
                </Button>
                <div className={classes.footer}>
                    <p>© 2022 Joseph Fallon. All Rights Reserved</p>
                </div>

            </form>
        </div>
    )
}
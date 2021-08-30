import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import { resetStore } from '../actions'
import { Redirect, useHistory } from "react-router-dom";
import NavBar from './NavBar'

import '../css/setting.css'
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40%',
        },
    },
    btn: {
        width: '40%'
    }
}));

export default function Settings() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [picUrl, setPicUrl] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.User.user)

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Email:', email, 'Password: ', password, 'userName: ', userName);
    }
    const handleSignOut = (event) => {
        event.preventDefault();
        localStorage.removeItem('jwt');
        dispatch(resetStore())
        history.push('/');
    }

    if (!user) return <Redirect to='/' />

    return (
        <>
            <NavBar
            />
            <div className="setting_title">
                <h1>Your Settings</h1>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="outlined-name"
                        label="User name"
                        value={userName}
                        onInput={e => setUserName(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Email"
                        value={email}
                        onInput={e => setEmail(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        value={password}
                        onInput={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Pic URL"
                        value={picUrl}
                        onInput={e => setPicUrl(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    SAVE SETTING
                </Button>

            </form>
            <br />
            <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
                onClick={handleSignOut}
            >
                SIGN OUT
            </Button>
        </>
    );
}

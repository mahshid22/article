import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import { signUpUsers, resetStore } from '../actions'
import ListErrors from './ShowErrors'
import '../css/register.css'

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

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabledStatus, setdisabledStatus] = useState(false);
    const userError = useSelector(state => state.User.userError)
    const user = useSelector(state => state.User.user)

    useEffect(() => {
        setdisabledStatus(false)
    }, [userError]);

    useEffect(() => {
        if (user) {
            history.push('/');
        }
    }, [user]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(signUpUsers({ user: { password, email, username } }))
        setdisabledStatus(true)
    }

    return (
        <>
            <NavBar
            />
            <div className="signUser_title">
                <h1>SIGN UP</h1>
            </div>
            {userError && <ListErrors errors={userError.data.errors} />}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <TextField
                            id="outlined-name"
                            label="username"
                            value={username}
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
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                    disabled={disabledStatus}
                >
                    Register
                </Button>
            </form>
        </>
    );
}

export default SignUp
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from "react-redux";
import {signInUsers} from '../actions'
import '../css/register.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40%',
        },
    },
    btn: {
        width: '40%',
    }
}));

export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.user.user)
    const logedIn = useSelector(state => state.user.logedIn)
    const dispatch = useDispatch();
    useEffect(() => {
        history.push('/');
    }, [logedIn, user]);
    function handleSubmit(event) {
        event.preventDefault();
        let data ={}
        data={user: { email, password }}
        dispatch(signInUsers(data))
    }

    return (
        <>
            <div className="signUser_title">
                <h1>SIGN IN</h1>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
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
                >
                    Login
                </Button>
            </form>
        </>
    );
}

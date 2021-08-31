import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { signInUsers } from '../actions'
import NavBar from './NavBar'
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
        width: '40%',
    }
}));

const SignIn = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.User.user)
    const userError = useSelector(state => state.User.userError)
    const logedIn = useSelector(state => state.User.logedIn)
    const [disabledStatus, setdisabledStatus] = useState(false);

    useEffect(() => {
        if (user) {
            localStorage.setItem('jwt', user.token);
            history.push('/');
        }
    }, [logedIn, user]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setdisabledStatus(true)
        let data = {}
        data = { user: { email, password } }
        dispatch(signInUsers(data))
    }
    return (
        <>
            <NavBar
            />
            <div className="signUser_title">
                <h1>SIGN IN</h1>
            </div>
            {userError && <ListErrors errors={userError.data.errors} />}
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
                    disabled={disabledStatus}
                >
                    Login
                </Button>
            </form>
        </>
    );
}

export default SignIn
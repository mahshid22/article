import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

export default function SignUp() {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <div className="signUser_title">
                <h1>SIGN UP</h1>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <div>
                        <TextField
                            id="outlined-name"
                            label="userName"
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
                </div>
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    Register
                </Button>
            </form>
        </>
    );
}

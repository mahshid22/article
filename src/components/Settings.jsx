import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    const [picUrl, setPicUrl] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // console.log('Email:', email, 'Password: ', password, 'userName: ', userName);
    }

    return (
        <>
            <h1>Your Settings</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="outlined-name"
                        // fullWidth={true}
                        label="Pic URL"
                        value={picUrl}
                        onInput={e => setPicUrl(e.target.value)}
                        variant="outlined"
                    />
                </div>
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
              
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    className={classes.btn}
                >
                    Publish Article
                </Button>
            </form>
        </>
    );
}

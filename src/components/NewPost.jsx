import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '60%',
        },
    },
    btn: {
        width: '60%'
    }
}));

export default function NewPost() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // console.log('Email:', email, 'Password: ', password, 'userName: ', userName);
    }

    return (
        <>
            <h1>NEW POST</h1>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="outlined-name"
                        // fullWidth={true}
                        label="title"
                        value={title}
                        onInput={e => setTitle(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="description"
                        value={desc}
                        onInput={e => setDesc(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Full body"
                        value={body}
                        onInput={e => setBody(e.target.value)}
                        variant="outlined"
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
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

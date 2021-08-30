import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'
import { addArticle , resetStore} from '../actions'
import { Redirect, useHistory } from "react-router-dom";

import '../css/Posts.css'
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
    const [description, setDesc] = useState('');
    const [body, setBody] = useState('');
    const [disabledStatus, setdisabledStatus] = useState(false);
    const user = useSelector(state => state.User.user)
    const addedArticle = useSelector(state => state.Articles.addArticle)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('addedArticle',addedArticle);
        if(addedArticle){
            history.push('/');
        }
        return ()=>{
            console.log('hereee');
            dispatch(resetStore())
        }
    }, [addedArticle])

    const handleSubmit = (event) => {
        event.preventDefault();
        setdisabledStatus(true)
        dispatch(addArticle({article:{title,description,body,tagList:[]}, jwt: localStorage.getItem('jwt')}, ))
    }

    if (!user) return <Redirect to='/' /> 
    return (
        <>
            <NavBar
            />
            <div className="post_title">
                <h1>NEW POST</h1>
            </div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div>
                    <TextField
                        id="outlined-name"
                        // fullWidth={true}
                        label="Title"
                        value={title}
                        onInput={e => setTitle(e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-name"
                        label="Description"
                        value={description}
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
                    disabled={disabledStatus}
                >
                    Publish Article
                </Button>
            </form>
        </>
    );
}

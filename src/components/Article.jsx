import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from './comment';
import { getSingleArticles, getSingleArticlesComments } from '../actions'
import '../css/Article.css';
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

export default function Article(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const article = useSelector(state => state.Articles.article)
    const comments = useSelector(state => state.Articles.comments)
    const [body, setBody] = useState('');
    // const [article, setArticle] = useState({});
    // const [comments, setComments] = useState({});
    let { slug } = useParams();

    useEffect(() => {
        dispatch(getSingleArticles(slug))
        dispatch(getSingleArticlesComments(slug))
    }, []);

    const handleSubmit=((event) =>{
        event.preventDefault();
        // console.log('Email:', email, 'Password: ', password, 'userName: ', userName);
    })
    if (!article) return <p>Loading...</p>
    return (
        <>
            <div className='single_article_header'>
                <p>{article.title}</p>
                <p>{article.author.username} </p>
                {/* <p>{article.author.username} {article.author.username === username? <span>Delete Article</span> : ''}</p> */}
            </div>
            {/* <div> */}
            <p className='single_article_body'>{article.body}</p>
            <hr style={{ width: '70%' }} />
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
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
                    Publish COMMENT
                </Button>
            </form>
            <Comment comments={comments} />
            {/* </div> */}

        </>
    );
}

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from './comment';
import NavBar from './NavBar'
import { getSingleArticles, getSingleArticlesComments, addComment } from '../actions'
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

const Article = (props) => {
    let { slug } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const article = useSelector(state => state.Articles.article)
    const comments = useSelector(state => state.Articles.comments)
    const user = useSelector(state => state.User.user)
    const [body, setBody] = useState('');

    useEffect(() => {
        dispatch(getSingleArticles(slug))
        dispatch(getSingleArticlesComments(slug))
    }, []); // get singlr articles and it's comments

    const handleAddComment = ((event) => {
        event.preventDefault();
        dispatch(addComment(slug, { body }))
    }) // add comment to the article

    if (!slug) return <Redirect to='/' />
    return (
        <>
            <NavBar
            />
            {!article && <p>Loading ...</p>}
            {article && <>
                <div className='single_article_header'>
                    <p>{article.title}</p>
                    <p>{article.author.username} {article.author.username === user ? <span>Delete Article</span> : ''}</p>
                </div>
                <p className='single_article_body'>{article.body}</p>
                <hr style={{ width: '70%' }} />
                <form className={classes.root} noValidate autoComplete="off" onSubmit={handleAddComment}>
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
                        onClick={handleAddComment}
                        className={classes.btn}
                    >
                        Publish COMMENT
                    </Button>
                </form>
                <Comment comments={comments} />
            </>}
        </>
    );
}
export default Article
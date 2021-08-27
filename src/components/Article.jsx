import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Comment from './comment';
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

export default function Article() {
    const classes = useStyles();
    const [body, setBody] = useState('');
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        // console.log('Email:', email, 'Password: ', password, 'userName: ', userName);
    }
    if (!Object.keys(article).length === 0) return <p>Loading...</p>
    return (
        <>
            <div className='single_article_header'>
                {/* <h1>{article.title}</h1>
                <p>{article.author.username} {article.author.username === username? <span>Delete Article</span> : ''}</p> */}
                <h1>article.title</h1>
                <div>article.author.username </div>
            </div>
            {/* <div> */}
            <p className='single_article_body'>article.body</p>
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
                    Publish Article
                </Button>
            </form>
            <Comment comments={[{ id: 104876, createdAt: "2021-08-27T08:06:02.479Z", updatedAt: "2021-08-27T08:06:02.479Z", body: "Cypress comment", author: {username: "cy828427870", bio: null, image: "https://static.productionready.io/images/smiley-cyrus.jpg", following: false}
},{ id: 104876, createdAt: "2021-08-27T08:06:02.479Z", updatedAt: "2021-08-27T08:06:02.479Z", body: "Cypress comment", author: {username: "cy828427870", bio: null, image: "https://static.productionready.io/images/smiley-cyrus.jpg", following: false}
 }]}/>
            {/* </div> */}

        </>
    );
}

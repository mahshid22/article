import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from "react-router-dom";
import '../css/Article.css'
import { getArticles, checkUser } from '../actions'
import NavBar from './NavBar'
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    ListItemTextHover: {
        cursor: 'pointer',
    }
}));

export default function AlignItemsList() {
    const articles = useSelector(state => state.Articles.articles)
    const articlesCount = useSelector(state => state.Articles.articlesCount)
    const user = useSelector(state => state.User.user)
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleRedirectToArticle = (slug) => {
        if (localStorage.getItem('jwt')) {
            history.push(`/article/${slug}`);
        }
    };

    useEffect(() => {
        dispatch(getArticles())
        dispatch(checkUser(localStorage.getItem('jwt')))
    }, []);

    
    return (
        <>
            <NavBar
            />
            <div className="article_title">
                <h1>ARTICLES LIST</h1>
            </div>
            {/* { <p>Loading...</p>} */}
            {!user && !articlesCount && <p>Loading ...</p>}
            {articlesCount && <List className={classes.root}>
                {articles.map((article) => {
                    return (
                        <>
                            <ListItem alignItems="flex-start" onClick={() => handleRedirectToArticle(article.slug)}>
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={article.author.image} />
                                </ListItemAvatar>
                                <ListItemText
                                    className={classes.ListItemTextHover}
                                    primary={article.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                {article.author.username}
                                            </Typography>
                                            {article.description}
                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="star" onClick={() => console.log('hello')}>
                                        {article.favoritesCount} {article.favorited ? <StarIcon /> : <StarBorderIcon />}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
                })}
            </List>}
            <Pagination count={articlesCount / 20} shape="rounded" page={page} onChange={handleChange} />
        </>
    );
}

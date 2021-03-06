import React, { useEffect } from 'react';
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
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Pagination from '@material-ui/lab/Pagination';
import { useHistory } from "react-router-dom";
import '../css/Article.css'
import { getArticles, checkUser, addStartToArticle, removeStarFromArticle } from '../actions'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
    const [nextPage, setnextPage] = React.useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getArticles())
        dispatch(checkUser(localStorage.getItem('jwt')))
    }, []);
    useEffect(() => {
        setnextPage(false)
    }, [articles]);

    const handleChange = (event, value) => {
        setPage(value);
        dispatch(getArticles((value - 1) * 20))
        setnextPage(true)
    };

    const handleRedirectToArticle = (slug) => {
        if (localStorage.getItem('jwt')) {
            history.push(`/article/${slug}`);
        }
    };

    const favoriteArticleHandler = (slug, fav) => {
        if (localStorage.getItem('jwt')) {
            // history.push(`/article/${slug}`);
            console.log(slug, fav);
            fav? dispatch(removeStarFromArticle({slug, jwt:localStorage.getItem('jwt')})): dispatch(addStartToArticle({slug, jwt:localStorage.getItem('jwt')}))
        }
    };
    console.log('articles', articles);
    return (
        <>
            <div className="article_title">
                <h1>ARTICLES LIST</h1>
            </div>
            {(!articlesCount || nextPage) && <p>Loading ...</p>}
            {articlesCount && !nextPage && <List className={classes.root}>
                {articles.map((article) => {
                    return (
                        <>
                            <ListItem alignItems="flex-start" >
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={article.author.image} />
                                </ListItemAvatar>
                                <ListItemText
                                    onClick={() => handleRedirectToArticle(article.slug)}
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
                                    <IconButton edge="end" aria-label="star" onClick={() => favoriteArticleHandler(article.slug, article.favorited)}>
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

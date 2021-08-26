import React, { useEffect, useState } from 'react';
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
import '../css/Article.css'
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    ListItemTextHover:{
        cursor: 'pointer',
    }
}));

export default function AlignItemsList() {
    const classes = useStyles();
    const [articles, setArticles] = React.useState([]);
    const [articlesCount, setArticlesCount] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        console.log(value);
        setPage(value);
    };

    useEffect(() => {
        axios.get('https://conduit.productionready.io/api/articles')
            .then(function (response) {
                // handle success
                console.log(response);
                setArticles(response.data.articles)
                setArticlesCount(response.data.articlesCount)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, []);
    console.log(articles);
    if (!articlesCount) return <p>Loading...</p>
    return (
        <>
            <List className={classes.root}>
                {articles.map((article) => {
                    return (
                        <>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={article.author.image}/>
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
                                                 {article.author.username } 
                                            </Typography>
                                             { article.description } 
                                        </React.Fragment>
                                    }
                                />
                                <ListItemSecondaryAction>
                                    <IconButton  edge="end" aria-label="star" onClick={() => console.log('hello')}>
                                       {article.favoritesCount} {article.favorited?<StarIcon/>:<StarBorderIcon />}
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
                })}


            </List>
            <Pagination count={articles.articlesCount/20} shape="rounded" page={page} onChange={handleChange} />
        </>
    );
}

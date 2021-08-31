import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from "@material-ui/core";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fonts: {
        fontWeight: "bold"
    },
    inline: {
        display: "inline",
        // fontSize: '18px',
    },
    deleteIcon: {
        paddingLeft: '5px',
        marginTop: '5px'
    }
}));

const Comment = ({ comments }) => {
    const classes = useStyles();
    const [userName, setUserName] = React.useState('');

    if (!comments) return 'Loading ...'
    return (
        <List className={classes.root}>
            {comments.map(comment => {
                return (
                    <React.Fragment key={comment.id}>
                        <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="avatar" src={comment.author.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography className={classes.fonts}>
                                        {comment.author.username}
                                    </Typography>
                                }
                                secondary={
                                    <>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {comment.body}
                                        </Typography>
                                        {` - ${comment.createdAt}`}
                                    </>
                                }
                            />
                            <ListItemSecondaryAction className={classes.deleteIcon}>
                                <IconButton edge="end" aria-label="star" onClick={() => console.log('hello')}>
                                    {userName !== comment.author.usernameer ? <DeleteIcon /> : ''}
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                );
            })}
        </List>
    );
};

export default Comment;
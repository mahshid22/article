import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import '../css/register.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '40%',
        },
    },
    btn: {
        width: '20%',
    }
}));

export default function Page404() {
    const classes = useStyles();
    const history = useHistory();

    const handle404page = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <>
            <div className="signUser_title">
                <h1>404 page</h1>
            </div>
            <br />
            <Button
                onClick={handle404page}
                className={classes.btn}
                variant="outlined"
                color="primary"
            >
                go to home page
            </Button>

        </>
    );
}

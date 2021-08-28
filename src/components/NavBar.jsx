import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CreateIcon from '@material-ui/icons/Create';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'block'
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();
    const preventDefault = (event) => event.preventDefault();
    if (true) {
        return (
            <div >
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    history.push(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" value={'/'} icon={<HomeIcon />}/>
                <BottomNavigationAction label="Sign in" value={'/SignIn'} icon={<LockOpenIcon />}/>
                <BottomNavigationAction label="Sign up" value={'/SignUp'} icon={<AssignmentIndIcon />}/>
            </BottomNavigation>
            </div>
        );
    }
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                history.push(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} value={'/'}/>
            <BottomNavigationAction label="New post" icon={<CreateIcon />} value={'/NewPost'}/>
            <BottomNavigationAction label="Setting" icon={<SettingsIcon />} value={'Settings'}/>
            <BottomNavigationAction label="Sign out" icon={<ExitToAppIcon />}/>
        </BottomNavigation>
    );
}

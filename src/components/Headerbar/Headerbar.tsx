import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { IconButton, Badge } from '@material-ui/core';

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

export interface HeaderbarProps extends WithStyles<typeof styles> { }

type HeaderbarState = {
    open: boolean
};

class Headerbar extends Component<HeaderbarProps, HeaderbarState> {

    constructor(props: HeaderbarProps) {
        const { classes } = props;
        super(props);
        this.state = {
            open: false
        }
    }
    render() {
        return (
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" color="inherit">Eloyeni</Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Headerbar);
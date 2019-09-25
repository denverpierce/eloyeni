import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { headerStyle } from './Header.style';
import { Tabs, Tab } from '@material-ui/core';

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
  }
});

function a11yProps(index: {}) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export type HeaderProps = {
  tab: number,
  handleChangeTab: (e: React.ChangeEvent<{}>, value: {}) => void
}

function Header(props: HeaderProps) {
  const { tab, handleChangeTab } = props;

  return (
    <AppBar color="primary" position={'relative'} className={headerStyle} >
      <Toolbar>
        <Typography variant="h6" color="inherit">Eloyeni</Typography>
        <Tabs value={tab} onChange={handleChangeTab} aria-label="tabs">
          <Tab label="Status" {...a11yProps(0)} />
          <Tab label="Buildings" {...a11yProps(1)} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);

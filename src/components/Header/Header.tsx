import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { headerStyle } from './Header.style';
import { Tabs, Tab } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
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
        <Typography variant="h6" color="inherit"><Link to={{ pathname: '/', search: window.location.search }}>Eloyeni</Link></Typography>
        <Link to={{ pathname: "/buildings/", search: window.location.search }}>Buildings</Link>
        <Link to={{ pathname: "/status/", search: window.location.search }}>Status</Link>
      </Toolbar >
    </AppBar >
  );
}

export default withStyles(styles)(Header);

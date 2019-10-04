import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { headerStyle } from './Header.style';
import MaterialLink from '@material-ui/core/Link';
import { useHistory } from "react-router"

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

export type HeaderProps = {
  tab: number,
  handleChangeTab: (e: React.ChangeEvent<{}>, value: {}) => void
}

function Header(props: HeaderProps) {
  const { tab, handleChangeTab } = props;
  let history = useHistory();

  const clickHome = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    history.push({ pathname: '/', search: window.location.search })
  }
  const clickBuildings = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    history.push({ pathname: "/buildings/", search: window.location.search })
  }
  const clickStatus = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    history.push({ pathname: "/status/", search: window.location.search })
  }

  return (
    <AppBar color="primary" position={'relative'} className={headerStyle} >
      <Toolbar>
        <MaterialLink variant="h4" color="inherit" onClick={clickHome}>Eloyeni</MaterialLink>
        <MaterialLink variant="h6" color="inherit" onClick={clickBuildings}>Buildings</MaterialLink>
        <MaterialLink variant="h6" color="inherit" onClick={clickStatus}>Status</MaterialLink>
      </Toolbar >
    </AppBar >
  );
}

export default withStyles(styles)(Header);

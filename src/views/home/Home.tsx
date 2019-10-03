import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { Tab } from 'components/NavShell/NavShell.types';

export type HomeProps = {
  tabs: Tab[]
}

function TabInfo(tab: Tab) {
  return (<Card>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {tab.id}
        </Typography>
        <Typography component="p">
          {tab.id}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="medium">
        <Link to={{ pathname: tab.route, search: window.location.search }}>Cast Spell</Link>
      </Button>
    </CardActions>
  </Card >)
}

export function Home(props: HomeProps) {
  const { tabs } = props;
  return (
    <React.Fragment>
      {tabs.map(TabInfo)}
    </React.Fragment>
  );
}

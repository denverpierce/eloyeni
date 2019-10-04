import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { EloyeniState } from 'Eloyeni';
import { BUCKET, EXPIRES, ACCESS_KEY } from 'utils/constants';
import { NavPayload, BuildingTab, TabId, Tab } from './NavShell.types';
import { body } from './NavShell.styles';
import { Route, Switch } from "react-router-dom";
import { navReducer, navInit } from 'state/Nav.reducer';
import { Home } from 'views/home/Home';
import { Buildings } from 'views/buildings/Buildings';
import { isEmpty } from 'lodash';

const assetSrcUrl = (strings: (string | number)[]) => {
  return `https://${strings[0]}${strings[1]}?AWSAccessKeyId=${strings[2]}&Signature=${strings[3]}&Expires=${strings[4]}`
}

type NavShellProps = {
  auth: EloyeniState,
  handleChangeTab: (e: React.ChangeEvent<{}>, value: {}) => void
}

const getTabData = (tabId: TabId, nav: NavPayload): Tab => {
  const retTab = nav.tabs.find(t => t.id === tabId);
  if (!retTab) {
    throw new TypeError('The tab couldn\'t be found');
  }
  return retTab;
}

function NavShell(props: NavShellProps) {
  let mapSrc: string | undefined;
  //const [state, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);
  const [navState, dispatch] = useReducer(navReducer, undefined, navInit);

  if (props.auth && props.auth.mapUrl && props.auth.mapSig) {
    // build the mapSrc string
    const { mapUrl, mapSig } = props.auth;
    mapSrc = assetSrcUrl([BUCKET, mapUrl, ACCESS_KEY, mapSig, EXPIRES]);
  }
  //const tab = resp.data.tabs.find((_t, idx) => idx === props.auth.tab) as BuildingTab;
  useEffect(() => {
    // get the navigation json file
    if (props.auth && props.auth.navUrl && props.auth.navSig) {
      const navSrc = assetSrcUrl([BUCKET, props.auth.navUrl, ACCESS_KEY, props.auth.navSig, EXPIRES]);
      axios.get<NavPayload>(navSrc).then((resp) => {
        dispatch({
          type: 'setTabs',
          tabs: resp.data.tabs
        });
      })
    }
  }, [props.auth]);

  return (
    <div className={body}>
      <Switch>
        <Route path="/" exact render={() =>
          (!isEmpty(navState.tabs) ? <Home tabs={navState.tabs} /> : null)
        } />
        <Route path="/:page?/" exact={true} render={(props) =>
          (!isEmpty(navState.tabs) ? <Buildings
            tabData={getTabData(props.match.params.page, navState) as BuildingTab}
            mapSrc={mapSrc}
          /> : null)
        } />
      </Switch>
    </div>
  );
}

export default NavShell;

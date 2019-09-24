import React, { useReducer, useEffect } from 'react';
import { buildingsReducer } from '../../state/Buildings.reducer';
import { buildingsInit } from './../../state/Buildings.reducer';
import Leftnav from '../Leftnav/Leftnav';
import axios from 'axios';
import LocationMap from '../LocationMap/LocationMap';
import BuildingInformation from '../BuildingInformation/BuildingInformation';
import { EloyeniState } from 'Eloyeni';
import { BUCKET, EXPIRES, ACCESS_KEY } from 'utils/constants';
import Headerbar from 'components/Headerbar/Headerbar';
import { NavPayload, BuildingTab } from './NavShell.types';

const assetSrcUrl = (strings: (string | number)[]) => {
  return `https://${strings[0]}${strings[1]}?AWSAccessKeyId=${strings[2]}&Signature=${strings[3]}&Expires=${strings[4]}`
}

type NavShellProps = {
  auth: EloyeniState,
  handleChangeTab: (e: React.ChangeEvent<{}>, value: {}) => void
}

function NavShell(props: NavShellProps) {
  let mapSrc: string | undefined;
  let nvUrl: string | undefined = undefined;
  let nvSig: string | undefined = undefined;
  const [state, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);

  if (props.auth && props.auth.mapUrl && props.auth.mapSig) {
    // build the mapSrc string
    const { mapUrl, mapSig } = props.auth;
    nvUrl = props.auth.navUrl;
    nvSig = props.auth.navSig;
    mapSrc = assetSrcUrl([BUCKET, mapUrl, ACCESS_KEY, mapSig, EXPIRES]);
  }

  useEffect(() => {
    // get the navigation json file
    if (props.auth && nvUrl && nvSig) {
      axios.get<NavPayload>(assetSrcUrl([BUCKET, nvUrl, ACCESS_KEY, nvSig, EXPIRES])).then((resp) => {
        const tab = resp.data.tabs.find((_t, idx) => idx === props.auth.tab) as BuildingTab;
        if (tab) {
          dispatch({
            type: 'setBuildings',
            buildings: tab.buildings
          });
        }
      })
    }
  }, [nvSig, nvUrl, props.auth, props.auth.tab]);

  return (
    <React.Fragment>
      <Headerbar tab={props.auth.tab} handleChangeTab={props.handleChangeTab} />
      <Leftnav
        buildings={state.buildings}
        selectBuilding={dispatch}
        selectedBuilding={state.selectedBuilding}
      />
      <LocationMap
        selectBuilding={dispatch}
        buildingState={state}
        mapSrc={mapSrc}
      />
      <BuildingInformation
        selectedBuilding={state.selectedBuilding}
      />
    </React.Fragment>
  );
}

export default NavShell;

import React, { useReducer, useEffect } from 'react';
import { buildingsReducer } from '../../state/Buildings.reducer';
import { buildingsInit } from './../../state/Buildings.reducer';
import Leftnav from '../Leftnav/Leftnav';
import axios from 'axios';
import LocationMap from '../LocationMap/LocationMap';
import BuildingInformation from '../BuildingInformation/BuildingInformation';
import { EloyeniState } from 'Eloyeni';
import { BUCKET, EXPIRES, ACCESS_KEY } from 'utils/constants';
import { NavPayload, BuildingTab } from './NavShell.types';
import { body } from './NavShell.styles';

const assetSrcUrl = (strings: (string | number)[]) => {
  return `https://${strings[0]}${strings[1]}?AWSAccessKeyId=${strings[2]}&Signature=${strings[3]}&Expires=${strings[4]}`
}

type NavShellProps = {
  auth: EloyeniState,
  handleChangeTab: (e: React.ChangeEvent<{}>, value: {}) => void
}

function NavShell(props: NavShellProps) {
  let mapSrc: string | undefined;
  const [state, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);

  if (props.auth && props.auth.mapUrl && props.auth.mapSig) {
    // build the mapSrc string
    const { mapUrl, mapSig } = props.auth;
    mapSrc = assetSrcUrl([BUCKET, mapUrl, ACCESS_KEY, mapSig, EXPIRES]);
  }

  useEffect(() => {
    // get the navigation json file
    if (props.auth && props.auth.navUrl && props.auth.navSig) {
      const navSrc = assetSrcUrl([BUCKET, props.auth.navUrl, ACCESS_KEY, props.auth.navSig, EXPIRES]);
      axios.get<NavPayload>(navSrc).then((resp) => {
        const tab = resp.data.tabs.find((_t, idx) => idx === props.auth.tab) as BuildingTab;
        if (tab) {
          dispatch({
            type: 'setBuildings',
            buildings: tab.buildings
          });
        }
      })
    }
  }, [props.auth]);

  return (
    <div className={body}>
      <Leftnav
        items={state.buildings}
        selectItem={dispatch}
        selectedItem={state.selectedBuilding}
        title={props.auth.tab.toString()}
      />
      <LocationMap
        selectBuilding={dispatch}
        buildingState={state}
        mapSrc={mapSrc}
      />
      <BuildingInformation
        selectedBuilding={state.selectedBuilding}
      />
    </div>
  );
}

export default NavShell;

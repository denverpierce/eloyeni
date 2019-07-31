import React, { useReducer, useEffect } from 'react';
import { buildingsReducer } from '../../state/Buildings.reducer';
import { buildingsInit } from './../../state/Buildings.reducer';
import Leftnav, { NavPayload } from '../Leftnav/Leftnav';
import axios from 'axios';
import LocationMap from '../LocationMap/LocationMap';
import BuildingInformation from '../BuildingInformation/BuildingInformation';
import { EloyeniState } from 'Eloyeni';
import { BUCKET, EXPIRES, ACCESS_KEY } from 'utils/constants';

type NavShellProps = {
  auth: EloyeniState | null
}

function NavShell(props: NavShellProps) {
  let mapSrc: string | undefined;
  let nvUrl: string | undefined = undefined;
  let nvSig: string | undefined = undefined;
  const [state, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);

  if (props.auth) {
    // build the mapSrc string
    const { mapUrl, mapSig } = props.auth;
    nvUrl = props.auth.navUrl;
    nvSig = props.auth.navSig;
    mapSrc = `https://${BUCKET}${mapUrl}?AWSAccessKeyId=${ACCESS_KEY}&Signature=${mapSig}&Expires=${EXPIRES}`
  }

  useEffect(() => {
    // get the navigation json file
    if (props.auth && nvUrl && nvSig) {
      axios.get<NavPayload>(`https://${BUCKET}${nvUrl}?AWSAccessKeyId=${ACCESS_KEY}&Signature=${nvSig}&Expires=${EXPIRES}`).then((resp) => {
        dispatch({
          type: 'setBuildings',
          buildings: resp.data.buildings
        })
      })
    }
  }, [nvSig, nvUrl, props.auth]);

  return (
    <React.Fragment>
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

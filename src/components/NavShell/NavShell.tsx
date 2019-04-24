import React, { useReducer, useEffect } from 'react';
import { buildingsReducer } from '../../state/Buildings.reducer';
import { buildingsInit } from './../../state/Buildings.reducer';
import Leftnav, { NavPayload } from '../Leftnav/Leftnav';
import axios from 'axios';
import LocationMap from '../LocationMap/LocationMap';
import BuildingInformation from '../BuildingInformation/BuildingInformation';

type NavShellProps = {
  navSrc: string
}

function NavShell(props: NavShellProps) {
  const [state, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);

  useEffect(() => {
    axios.get<NavPayload>(`${props.navSrc}`).then((resp) => {
      dispatch({
        type: 'setBuildings',
        buildings: resp.data.buildings
      })
    })
  }, [props.navSrc]);

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
        mapSrc={"../map.svg"}
      />
      <BuildingInformation
        selectedBuilding={state.selectedBuilding}
      />
    </React.Fragment>
  );
}

export default NavShell;

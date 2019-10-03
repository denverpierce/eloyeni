import React, { useReducer } from 'react';
import { Tab, BuildingTab } from 'components/NavShell/NavShell.types';
import LocationMap from 'components/LocationMap/LocationMap';
import BuildingInformation from 'components/BuildingInformation/BuildingInformation';
import { buildingsInit, buildingsReducer } from './../../state/Buildings.reducer';
import Leftnav from 'components/Leftnav/Leftnav';

export type BuildingsProps = {
  tabData: BuildingTab,
  mapSrc: string | undefined
}

export function Buildings(props: BuildingsProps) {
  const [buildingState, dispatch] = useReducer(buildingsReducer, undefined, buildingsInit);
  const { tabData, mapSrc } = props;

  return (
    <React.Fragment>
      <Leftnav items={tabData.items} selectItem={dispatch} selectedItem={buildingState.selectedBuilding} title={'a'} />
      <LocationMap
        selectBuilding={dispatch}
        buildingState={buildingState}
        mapSrc={mapSrc}
      />
      <BuildingInformation
        selectedBuilding={buildingState.selectedBuilding}
      />
    </React.Fragment>
  );
}

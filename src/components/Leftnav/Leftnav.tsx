import React, { Dispatch } from 'react';

import styles from './Leftnav.styles'
import { List, ListSubheader, MenuItem } from '@material-ui/core';
import { Building } from '../../state/Buildings.reducer';

export interface BasicItem {
  id: string;
  name: string;
}

export interface NavPayload {
  buildings: Building[]
}

export type LeftnavProps = {
  selectBuilding: Dispatch<any>
  selectedBuilding: Building | null;
  buildings: Building[]
};

const header: JSX.Element = (<ListSubheader component="div">City Buildings</ListSubheader>);
function Leftnav(props: LeftnavProps) {

  const renderBuilding = (building: Building, idx: number): JSX.Element => {
    const bldArrIndex = props.selectedBuilding ?
      props.buildings.findIndex(bld => bld.id === props.selectedBuilding!.id) : -1;

    return (
      <MenuItem
        key={idx}
        selected={idx === bldArrIndex}
        onClick={() => props.selectBuilding({
          type: 'selectBuilding',
          selectedBuilding: building
        })}

      >
        {building.name}
      </MenuItem >
    )
  }

  return (
    <React.Fragment>
      <List
        component="nav"
        subheader={header}
        className={styles.leftNavContainer}>
        {props.buildings.map(renderBuilding)}
      </List>
    </React.Fragment>
  );
}



export default Leftnav;

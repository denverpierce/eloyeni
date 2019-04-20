import React, { useState, useEffect, Dispatch } from 'react';

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
  buildings: Building[]
};

const header: JSX.Element = (<ListSubheader component="div">City Buildings</ListSubheader>);
function Leftnav(props: LeftnavProps) {

  const renderBuilding = (building: Building, idx: number): JSX.Element => {
    return (
      <MenuItem
        key={idx}
        onClick={(e: React.MouseEvent) => props.selectBuilding({
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

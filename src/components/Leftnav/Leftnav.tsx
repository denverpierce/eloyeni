import React, { Dispatch } from 'react';

import styles from './Leftnav.styles'
import { List, ListSubheader, MenuItem } from '@material-ui/core';
import { Building } from '../../state/Buildings.reducer';

export interface BasicItem {
  id: string;
  name: string;
}

export type LeftnavProps = {
  selectItem: Dispatch<any>,
  selectedItem: Building | null,
  items: BasicItem[],
  title: string
};


function Leftnav(props: LeftnavProps) {
  const header: JSX.Element = (<ListSubheader component="div">{props.title}</ListSubheader>);
  const renderItem = (item: BasicItem, idx: number): JSX.Element => {
    const bldArrIndex = props.selectedItem ?
      props.items.findIndex(bld => bld.id === props.selectedItem!.id) : -1;

    return (
      <MenuItem
        key={idx}
        selected={idx === bldArrIndex}
        onClick={() => props.selectItem({
          type: 'selectBuilding',
          selectedBuilding: item
        })}

      >
        {item.name}
      </MenuItem >
    )
  }

  return (
    <React.Fragment>
      <List
        component="nav"
        subheader={header}
        className={styles.leftNavContainer}>
        {props.items.map(renderItem)}
      </List>
    </React.Fragment >
  );
}

export default Leftnav;

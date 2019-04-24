import React, { Dispatch } from 'react';
import styles from './LocationMap.styles';
import ReactSVG from 'react-svg';
import { Building, BuildingState } from '../../state/Buildings.reducer';
import { get } from 'lodash';

type LocationMapProps = {
  mapSrc: string | undefined,
  selectBuilding: Dispatch<any>,
  buildingState: BuildingState
};

export default (props: LocationMapProps) => {
  const { mapSrc } = props;
  const { selectedBuilding, buildings } = props.buildingState;

  const findBuidling = (bldId: string): Building | void => {
    return buildings.find(bld => bld.id === bldId);
  }

  const handleClickBuilding = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const bldId = get(event, 'target.parentElement.id') as string;
    const bld = findBuidling(bldId);
    if (bld) {
      props.selectBuilding({
        type: 'selectBuilding',
        selectedBuilding: bld
      })
    }
  }
  const id = selectedBuilding ? selectedBuilding.id : 'b1'

  return (
    <main className={styles.mainContainer(id)}>
      {mapSrc ? (
        <ReactSVG
          src={mapSrc}
          onClick={handleClickBuilding}
        />
      ) : null}
    </main>
  );
}


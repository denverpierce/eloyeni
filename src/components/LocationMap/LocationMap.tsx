import React, { useState } from 'react';
import styles from './LocationMap.styles';
import ReactSVG from 'react-svg';

type LocationMapProps = {
  mapSrc: string,
};

export default (props: LocationMapProps) => {
  const { mapSrc } = props;
  const [bld, setBuilding] = useState('b');
  const [rdy, setRdy] = useState(false);

  if (rdy) {
    const b1 = document.querySelector('#b14');
    if (b1) {
      b1.addEventListener('click', (e) => { window.console.log(e) })
    }
  }

  return (
    <main className={styles.mainContainer}>
      <p>{bld}</p>
      <ReactSVG
        src={mapSrc}
        className={styles.mapContainer}
        onInjected={(er, svg) => setRdy(true)}
        onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
          // @ts-ignore
          setBuilding(e.target.parentElement.id)
          //window.console.log(e.target.parentNode.id)
        }}
      />
    </main>
  );
}


import React, { Component } from 'react';
import Headerbar from './components/Headerbar/Headerbar';
import LocationMap from './components/LocationMap/LocationMap';
import styles from './Eloyeni.styles';
import Leftnav from './components/Leftnav/Leftnav';
import NavShell from './components/NavShell/NavShell';

class Eloyeni extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Headerbar />
        <div className={'wrapper'}>
          <Leftnav navSrc={'../nav.json'} />
          <NavShell>
            <LocationMap
              mapSrc={"../map.svg"}
            />
          </NavShell>
        </div>
      </div >
    );
  }
}

export default Eloyeni;

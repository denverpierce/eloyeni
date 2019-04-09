import React, { Component } from 'react';
import Headerbar from './components/Headerbar/Headerbar';
import LocationMap from './components/LocationMap/LocationMap';
import styles from './Eloyeni.styles';
import Leftnav from './components/Leftnav/Leftnav';

class Eloyeni extends Component {
  render() {
    return (
      <main className={styles.container}>
        <Headerbar />
        <Leftnav navSrc={'../nav.json'} />
        <LocationMap
          mapSrc={"../unclear_map.jpg"}
        />
      </main >
    );
  }
}

export default Eloyeni;

import React, { Component } from 'react';
import Headerbar from './components/Headerbar/Headerbar';
import styles from './Eloyeni.styles';
import NavShell from './components/NavShell/NavShell';

class Eloyeni extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Headerbar />
        <div className={'wrapper'}>
          <NavShell navSrc={'../nav.json'} />
        </div>
      </div >
    );
  }
}

export default Eloyeni;

import React, { Component } from 'react';
import Headerbar from './components/Headerbar/Headerbar';
import styles from './Eloyeni.styles';
import NavShell from './components/NavShell/NavShell';
import qs from 'querystring';

export type EloyeniState = {
  mapUrl: string | undefined,
  mapSig: string | undefined
  navUrl: string | undefined,
  navSig: string | undefined
}

class Eloyeni extends Component<{}, EloyeniState> {

  componentDidMount() {
    // storing the auth in the query string
    // comes with the ? at the beginning so take it off
    const parsedQs = qs.parse(window.location.search.slice(1));
    if (parsedQs.mapUrl || parsedQs.navUrl) {
      this.setState({
        mapUrl: parsedQs.mapUrl as string,
        mapSig: parsedQs.mapSig as string,
        navUrl: parsedQs.navUrl as string,
        navSig: parsedQs.navSig as string
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Headerbar />
        <div className={'wrapper'}>
          <NavShell auth={this.state} />
        </div>
      </div >
    );
  }
}

export default Eloyeni;

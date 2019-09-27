import React, { Component } from 'react';
import styles from './Eloyeni.styles';
import NavShell from './components/NavShell/NavShell';
import Header from './components/Header/Header';
import qs from 'querystring';
import { BrowserRouter } from "react-router-dom";

export type EloyeniState = {
  mapUrl: string | undefined,
  mapSig: string | undefined
  navUrl: string | undefined,
  navSig: string | undefined,
  tab: number
}

class Eloyeni extends Component<{}, EloyeniState> {
  constructor(p: {}) {
    super(p);
    this.state = {
      tab: 1,
      mapUrl: undefined,
      mapSig: undefined,
      navUrl: undefined,
      navSig: undefined
    };
  }

  eventToTab = (e: React.ChangeEvent<{}>, value: {}): void => {
    const val = value as number;
    this.setState({ tab: val });
  }

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
        <BrowserRouter>
          <Header tab={this.state.tab} handleChangeTab={this.eventToTab} />
          <NavShell auth={this.state} handleChangeTab={this.eventToTab} />
        </BrowserRouter>
      </div >
    );
  }
}

export default Eloyeni;

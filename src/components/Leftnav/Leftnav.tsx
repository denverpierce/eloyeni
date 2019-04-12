import React, { Component } from 'react';
import { LeftnavProps, LeftnavState, Section, NavPayload, Building } from './Leftnav.types';
import axios from 'axios';
import styles from './Leftnav.styles'
import { List, ListSubheader, ListItem, MenuItem } from '@material-ui/core';

class Leftnav extends Component<LeftnavProps, LeftnavState> {
  private sections: Section[] = []
  private header: JSX.Element = (<ListSubheader component="div">City Sections</ListSubheader>)

  constructor(props: LeftnavProps) {
    super(props);
    this.state = {
      sections: [],
      currentBuilding: undefined
    }
  }

  private getNav = (navSrc: string) => {
    return axios.get<NavPayload>(`${navSrc}`).then(resp => {
      this.setState({ sections: resp.data.sections });
    });
  }

  componentDidMount() {
    this.getNav(this.props.navSrc)
  }

  renderSection = (section: Section): JSX.Element => {
    return (
      <div>
        <ListItem >
          {section.name}
          {section.buildings ? section.buildings.map(this.renderBuilding) : null}
        </ListItem >
      </div>
    )
  }

  findBuidling(bldId: HTMLElement): Building | void {
    const allBuildings = this.state.sections.map(section => section.buildings);
    return allBuildings[0].find(bld => bld.id == bldId.id) as any as Building;
  }

  handleClickBuilding = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const bld = this.findBuidling(event as any) as any as Building;
    if (bld) {
      return this.setState({
        currentBuilding: this.state.sections[0].buildings[0]
      });
    }

  }

  renderBuilding = (building: Building): JSX.Element => {
    return (
      <MenuItem
        onClick={this.handleClickBuilding}
      >
        {building.name}
      </MenuItem >
    )
  }

  render() {
    const { sections } = this.state;

    return (
      <List
        component="nav"
        className={styles.leftNavContainer}>
        {sections ? sections.map(this.renderSection) : null}
      </List>
    );
  }
}

export default Leftnav;

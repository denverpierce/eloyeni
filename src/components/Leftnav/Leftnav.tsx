import React, { Component } from 'react';
import { LeftnavProps, LeftnavState, Section, NavPayload, Building } from './Leftnav.types';
import axios from 'axios';
import { MenuItem } from '@material-ui/core';

class Leftnav extends Component<LeftnavProps, LeftnavState> {
    private sections: Section[] = []
    constructor(props: LeftnavProps) {
        super(props);
        this.state = {
            sections: [],
            currentBuilding: undefined
        }
    }

    private getNav(navSrc: string) {
        return axios.get<NavPayload>(`${navSrc}`).then(resp => {
            this.setState({ sections: resp.data.sections });
        });
    }

    private setBuilding(building: Building): string {
        return ''
    }

    componentDidMount() {
        // @ts-ignore
        this.getNav(this.props.navSrc)
    }

    renderSection(section: Section): JSX.Element {
        return (
            <MenuItem>{section.name}</MenuItem>
        )
    }

    render() {
        const { sections } = this.state;

        return (
            <nav>
                {sections ? sections.map(this.renderSection) : null}
            </nav>
        );
    }
}

export default Leftnav;
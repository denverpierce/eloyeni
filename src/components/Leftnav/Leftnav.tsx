import React, { Component } from 'react';
import { LeftnavProps, LeftnavState, Section, NavPayload } from './Leftnav.types';
import axios from 'axios';

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

    componentDidMount() {
        // @ts-ignore
        this.getNav(this.props.navSrc)
    }

    renderSection(section: Section): JSX.Element {
        return (
            <section>
                {section.name}
            </section>
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
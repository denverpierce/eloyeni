import React, { Component } from 'react';
import styles from './LocationMap.styles'

type LocationMapProps = {
    mapSrc: string
};

type LocationMapState = {

};

class LocationMap extends Component<LocationMapProps, LocationMapState> {
    constructor(props: LocationMapProps) {
        super(props);

    }
    render() {
        const { mapSrc } = this.props;
        return (
            <div className={styles.mainContainer}>
                <img
                    src={mapSrc}
                    className={styles.mapContainer}
                >
                </img>
            </div>
        );
    }
}

export default LocationMap;
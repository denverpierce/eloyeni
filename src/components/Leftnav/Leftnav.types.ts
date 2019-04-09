export interface BasicItem {
    id: string;
    name: string;
}

export interface Location {
    x: number;
    y: number;
}

export interface Building {
    location: Location
}

export interface Section extends BasicItem {
    building: Building[]
}

export interface NavPayload {
    sections: Section[]
}

export type LeftnavProps = {
    navSrc: string
};

export type LeftnavState = {
    currentBuilding: string | undefined,
    sections: Section[]
};
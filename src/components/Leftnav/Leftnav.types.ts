export interface BasicItem {
  id: string;
  name: string;
}

export interface Location {
  x: number;
  y: number;
}

export interface Building extends BasicItem {
  location: Location
}

export interface Section extends BasicItem {
  buildings: Building[]
}

export interface NavPayload {
  sections: Section[]
}

export type LeftnavProps = {
  navSrc: string
};

export type LeftnavState = {
  currentBuilding: Building | undefined,
  sections: Section[]
};

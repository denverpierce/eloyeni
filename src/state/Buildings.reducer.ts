import { Color } from "csstype";
import { BasicItem } from "../components/Leftnav/Leftnav";

export interface Building extends BasicItem {
  color: Color,
  description: string,
  status: 'Infested' | 'Pacified' | 'Online' | 'Unknown' | null,
  infestationLevel: number | null
}

export type BuildingState = {
  selectedBuilding: Building | null;
  buildings: Building[]
}

export function buildingsInit(): BuildingState {
  return {
    selectedBuilding: null,
    buildings: []
  };
}

export function buildingsReducer(state: BuildingState, action: any): BuildingState {
  switch (action.type) {
    case 'selectBuilding':
      return {
        ...state,
        selectedBuilding: action.selectedBuilding
      };
    case 'setBuildings':
      return {
        ...state,
        buildings: action.buildings
      };
    case 'reset':
      return buildingsInit();
    default:
      throw new Error();
  }
}

import { Building } from './../../state/Buildings.reducer';

export type NavPayload = {
  tabs: Tab[]
}

export type Tab = BuildingTab | StatusTab;

export type BuildingTab = {
  type: "building",
  id: "building",
  buildings: Building[]
}

export type StatusTab = {
  type: "status",
  id: "status",
  items: {}
}

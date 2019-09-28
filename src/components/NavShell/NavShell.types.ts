import { Building } from './../../state/Buildings.reducer';

export type NavPayload = {
  tabs: Tab[]
}

export type Tab = {
  type: 'building' | 'status',
  id: 'status' | 'status',
  route: string,
}

export type BuildingTab = Tab & {
  type: "building",
  id: "building",
  buildings: Building[]
}

export type StatusTab = Tab & {
  type: "status",
  id: "status",
  items: []
}

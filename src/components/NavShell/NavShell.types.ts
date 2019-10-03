import { Building } from './../../state/Buildings.reducer';
import { BasicItem } from './../Leftnav/Leftnav';

export type NavPayload = {
  tabs: Tab[]
}

export type TabId = 'status' | 'building';

export type Tab = {
  type: 'buildings' | 'status',
  id: TabId,
  route: string,
  items: BasicItem[]
}

export type BuildingTab = Tab & {
  type: "building",
  id: "buildings",
  items: Building[]
}

export type StatusTab = Tab & {
  type: "status",
  id: "status",
  items: []
}

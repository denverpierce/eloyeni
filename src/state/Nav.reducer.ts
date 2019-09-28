import { NavPayload } from "components/NavShell/NavShell.types";

export function navInit(): NavPayload {
  return {
    tabs: []
  };
}

export function navReducer(state: NavPayload, action: any): NavPayload {
  switch (action.type) {
    case 'setTabs':
      return {
        ...state,
        tabs: action.tabs
      };
    case 'reset':
      return navInit();
    default:
      throw new Error();
  }
}

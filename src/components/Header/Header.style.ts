import { style } from "typestyle";

export const headerStyle = style(
  {
    display: 'flex',
    flexDirection: 'column',
    $nest: {
      'li': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'baseline'
      }
    }
  }
);

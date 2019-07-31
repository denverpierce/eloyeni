import { style } from "typestyle";

const leftNavContainer = style(
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

const navItem = style({
})

export default {
  leftNavContainer,
  navItem
}

import { style } from "typestyle";

const container = style({
  height: '100%',
  width: '100%',
  $nest: {
    '.wrapper': {
      width: '100%',
      display: 'flex',
      $nest: {
        nav: {
          width: '300px'
        }
      }
    }
  }
});

export default {
  container
}

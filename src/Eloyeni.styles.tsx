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
          width: '20%'
        },
        main: {
          width: '80%'
        }
      }
    }
  }
});

export default {
  container
}
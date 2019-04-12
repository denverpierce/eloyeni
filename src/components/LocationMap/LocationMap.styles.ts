import { style } from "typestyle";

const mapContainer = style(
  {
    height: '100%',
    marginLeft: 'auto'
  }
);

const mainContainer = style({
  display: 'flex',
  width: '100%',
  $nest: {
    'img': {
      width: '100%'
    }
  }
})

export default {
  mapContainer,
  mainContainer
}

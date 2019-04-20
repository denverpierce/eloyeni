import { style } from "typestyle";

const mapContainer = style(
  {
    height: '100%',
    marginRight: 'auto'
  }
);

const mainContainer = style({
  display: 'flex',
  $nest: {
    'img': {
    }
  }
})

export default {
  mapContainer,
  mainContainer
}

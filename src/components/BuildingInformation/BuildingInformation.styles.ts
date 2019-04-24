import { style } from 'typestyle';

const buildingInfoContainer = style({
  margin: '2em',
  width: '400px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column'
});

const table = style({
  marginTop: 'auto',
  marginBottom: '1em'
})

export default {
  buildingInfoContainer,
  table
}

import { style } from "typestyle";
import { rgba } from 'csx';

const mainContainer = (buildingId: string | null) => {
  return style({
    display: 'flex',
    $nest: {
      [`#${buildingId}`]: {
        fill: rgba(255, 255, 255, 0.3).toString(),
        stroke: '#d93381 !important'
      },
      'g': {
        strokeWidth: 3,
        fill: '#00c4ff75',
      }
    }
  })
}

export default {
  mainContainer
}

import React from 'react';
import { Building } from './../../state/Buildings.reducer';
import { Card, CardActionArea, CardContent, Typography, CardActions, Table, TableHead, TableRow, TableCell, TableBody, Chip } from '@material-ui/core';
import styles from './BuildingInformation.styles';

type BuildingInformationProps = {
  selectedBuilding: Building | null
}

export default function (props: BuildingInformationProps) {
  const { selectedBuilding } = props;

  const dummyBuilding: Building = {
    id: '',
    name: 'Select a building',
    description: 'Select a building in the nav panel or on the map',
    color: '#fff',
    status: null,
    infestationLevel: null
  };

  const cardBuilding = selectedBuilding ? selectedBuilding : dummyBuilding;

  return (
    <Card className={styles.buildingInfoContainer}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardBuilding.name}
          </Typography>
          <Typography component="p">
            {cardBuilding.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.table}>
        {cardBuilding.status ? (
          <Table>
            <TableHead >
              <TableRow>
                <TableCell>Status</TableCell>
                <TableCell>Infestation Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{cardBuilding.status}</TableCell>
                <TableCell>{cardBuilding.infestationLevel ? (<Chip color="primary" label={cardBuilding.infestationLevel} />) : null}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : null}
      </CardActions>
    </Card>
  )
}

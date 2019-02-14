import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export const EpisodeTable = ({ episodes }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="right">Episode #</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Seen</TableCell>
          <TableCell>Mark Seen Up To</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {episodes.map(({ episode_number, name, overview, id }) => (
          <TableRow key={id}>
            <TableCell align="right">{episode_number}</TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{overview}</TableCell>
            <TableCell padding="checkbox"><Checkbox /></TableCell>
            <TableCell padding="checkbox"><Checkbox /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

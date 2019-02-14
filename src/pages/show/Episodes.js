import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Season } from './Season';

export const Episodes = ({ seasons, showId, seenEpisodes }) => {
  return (
    <div>
      <Typography variant="h4">Episodes</Typography>
      {seasons.map(season => <Season season={season} showId={showId} seenEpisodes={seenEpisodes} key={season.id} />)}
    </div>
  );
};

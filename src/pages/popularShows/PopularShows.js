import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const PopularShows = ({ shows, episodes, seenEpisodes, savedShows }) => {
  return (
    <div>
      <Typography variant="h3">
        Popular Shows
    </Typography>
      {shows && episodes ? <ShowGrid shows={shows} episodes={episodes} seenEpisodes={seenEpisodes} savedShows={savedShows} />
        : <CircularProgress />}
    </div>
  );
};

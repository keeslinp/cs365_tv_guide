import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const MyShows = ({ shows, episodes, seenEpisodes, savedShows }) => {
  return (
    <div>
      <Typography variant="h3">
        My Shows
    </Typography>
      {shows && episodes ? <ShowGrid shows={shows.filter(({ id }) => savedShows.includes(id))} episodes={episodes} seenEpisodes={seenEpisodes} savedShows={savedShows} />
        : <CircularProgress />}
    </div>
  );
};

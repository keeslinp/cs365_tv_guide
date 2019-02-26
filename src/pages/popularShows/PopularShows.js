import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const PopularShows = ({ shows, episodes, seenEpisodes, savedShows, history }) => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Popular Shows
    </Typography>
    {shows ?
        <ShowGrid
          shows={shows}
          episodes={episodes}
          seenEpisodes={seenEpisodes}
          savedShows={savedShows}
          history={history}
        />
        : <CircularProgress />}
    </div>
  );
};

import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const MyShows = ({ shows, episodes, seenEpisodes, savedShows, history }) => {
  return (
    <div>
      <Typography variant="h3">
        My Shows
    </Typography>
    {shows ?
        <ShowGrid
          shows={shows.filter(({ id }) => savedShows.includes(id))}
          seenEpisodes={seenEpisodes}
          savedShows={savedShows}
          history={history}
        />
        : <CircularProgress />}
    </div>
  );
};

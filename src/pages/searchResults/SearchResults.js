import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const SearchResults = ({ episodes, seenEpisodes, savedShows, searchResults, history }) => {
  return (
    <div>
      <Typography variant="h3">
        My Shows
    </Typography>
    {searchResults ?
        <ShowGrid
          shows={searchResults}
          seenEpisodes={seenEpisodes}
          savedShows={savedShows}
          history={history}
        />
        : <CircularProgress />}
    </div>
  );
};

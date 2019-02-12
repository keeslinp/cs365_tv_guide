import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ShowGrid } from '../../components';

export const SearchResults = ({ shows, episodes, seenEpisodes, savedShows, searchResults }) => {
  return (
    <div>
      <Typography variant="h3">
        My Shows
    </Typography>
      {shows && episodes && searchResults ? <ShowGrid shows={shows.filter(({ id }) => searchResults.includes(id))} episodes={episodes} seenEpisodes={seenEpisodes} savedShows={savedShows} />
        : <CircularProgress />}
    </div>
  );
};

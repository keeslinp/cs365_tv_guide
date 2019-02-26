import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import Portal from '@material-ui/core/Portal';
import { ShowGrid } from '../../components';

const AddButton = styled(Fab)`
  position: fixed !important;
  bottom: 4rem;
  right: 4rem;
`;

const startSearch = () => {
  document.getElementById('search_bar').focus();
};

export const MyShows = ({ shows, episodes, seenEpisodes, savedShows, history, deleteShow }) => {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        My Shows
    </Typography>
      {shows ?
        <ShowGrid
          shows={shows.filter(({ id }) => savedShows.includes(id))}
          seenEpisodes={seenEpisodes}
          savedShows={savedShows}
          history={history}
          deleteShow={deleteShow}
        />
        : <CircularProgress />}
      <Portal>
        <AddButton color="primary" aria-label="Add" onClick={startSearch}>
          <AddIcon />
        </AddButton>
      </Portal>
    </div>
  );
};

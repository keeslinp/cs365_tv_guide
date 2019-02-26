import React, { useReducer, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import { get } from 'lodash';
import { externalData, fetchShow } from '../../reducers';
import { Episodes } from './Episodes';

const ShowBody = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;

const ShowImage = styled.img`
  max-height: 400px;
`;

const Information = styled.div`
  padding-left: 50px;
  padding-right: 100px;
  max-width: 50%;
`;

export const Show = ({ showId, savedShows, seenEpisodes, saveShow, markEpisodeAsSeen, deleteShow }) => {
  const [{ show }, fetchData] = useReducer(externalData, {});
  useEffect(() => {
    fetchShow(showId).then(fetchData);
  }, [showId]);
  const readyToRender = Boolean(show) && Boolean(showId);
  if (!readyToRender) {
    return <CircularProgress />;
  }
  const handleSaveShowButtonClicked = () => {
    saveShow(showId);
  };
  const handleDeleteClick = () => {
    deleteShow(showId);
  };
  return (
    <div>
      <Typography variant="h3">
        {show.name}
      </Typography>
      <ShowBody>
        <ShowImage src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
        <Information>
          <Typography variant="h6" paragraph>
            {show.overview}
          </Typography>
          <Typography variant="h6">
            Next Episode: {get(show, 'next_episode_to_air.air_date', 'N/A')}
          </Typography>
          {savedShows.includes(showId) ?
              <div>
                <Typography inline color="textSecondary"><DoneIcon /> Show Saved</Typography>
                <IconButton onClick={handleDeleteClick}>
                  <DeleteIcon />
                </IconButton>
              </div>
              :
            <Button variant="contained" color="primary" onClick={handleSaveShowButtonClicked}>
              Add To My Shows
          </Button>
          }
        </Information>
      </ShowBody>
      <div>
        <Episodes seasons={show.seasons} seenEpisodes={seenEpisodes} showId={showId} markEpisodeAsSeen={markEpisodeAsSeen.bind(null, showId)} />
      </div>
    </div>
  );
};

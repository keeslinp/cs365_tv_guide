import React, { useEffect, useReducer } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import { EpisodeTable } from './EpisodeTable';
import { externalData, fetchSeason } from '../../reducers';

export const Season = ({ season: { id, name, season_number }, showId, seenEpisodes, markEpisodeAsSeen }) => {
  const [{ season }, fetchData] = useReducer(externalData, {});
  useEffect(() => {
    fetchSeason(showId, season_number).then(fetchData);
  }, [id]);
  return (
    <ExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {Boolean(season) ? <EpisodeTable episodes={season.episodes} seenEpisodes={seenEpisodes} markEpisodeAsSeen={markEpisodeAsSeen} /> : <CircularProgress />}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

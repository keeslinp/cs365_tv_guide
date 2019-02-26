import React, { useEffect, useReducer } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import { EpisodeTable } from './EpisodeTable';
import { externalData, fetchSeason } from '../../reducers';

const PanelTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const StyledExpansionPanel = styled(ExpansionPanel)`
  margin-left: 100px;
  margin-right: 100px;
`;

const StyledBadge = styled(Badge)`
  padding-right: 15px;
`;

export const Season = ({ season: { id, name, season_number }, showId, seenEpisodes, markEpisodeAsSeen }) => {
  const [{ season }, fetchData] = useReducer(externalData, {});
  useEffect(() => {
    fetchSeason(showId, season_number).then(fetchData);
  }, [id]);

  const unseenEpisodes = Boolean(season) ? season.episodes.filter(({ id }) =>
    seenEpisodes.every(({ episodeId }) => id !== episodeId))
    : [];

  const allEpisodesSeen = Boolean(season) && unseenEpisodes.length === 0;

  const markAllAsSeen = (_evt, value) => {
    if (Boolean(season)) {
      for (const episode of season.episodes) {
        markEpisodeAsSeen(episode.id, null, value);
      }
    }
  };


  const preventPropagation = evt => evt.stopPropagation();
  return (
    <StyledExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <PanelTitle>
          <StyledBadge badgeContent={unseenEpisodes.length} color="primary">
            <Typography inline>{name}</Typography>
          </StyledBadge>
          <div>
            <Typography inline>Mark Season as Seen</Typography>
            <Checkbox onClick={preventPropagation} checked={allEpisodesSeen} onChange={markAllAsSeen} />
          </div>
        </PanelTitle>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {Boolean(season) ? <EpisodeTable episodes={season.episodes} seenEpisodes={seenEpisodes} markEpisodeAsSeen={markEpisodeAsSeen} /> : <CircularProgress />}
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  );
};

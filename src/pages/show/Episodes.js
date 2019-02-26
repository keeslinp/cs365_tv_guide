import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { Season } from './Season';

const StyledTitle = styled(Typography)`
  margin: 50px 100px !important;
`;
export const Episodes = ({ seasons, showId, seenEpisodes, markEpisodeAsSeen }) => {
  return (
    <div>
      <StyledTitle variant="h4" gutterBottom>Episodes</StyledTitle>
      {seasons.map(season =>
        <Season season={season} showId={showId} seenEpisodes={seenEpisodes} key={season.id} markEpisodeAsSeen={markEpisodeAsSeen} />
      )}
    </div>
  );
};

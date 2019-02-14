const ACTIONS = Object.freeze({
  ADD_SHOW: 'ADD_SHOW',
  SEEN_EPISODE: 'SEEN_EPISODE',
});

export const markEpisodeAsSeen = (showId, id, seen) => ({
  type: ACTIONS.SEEN_EPISODE,
  id,
  showId,
  seen,
});

export const saveShow = showId => ({
  type: ACTIONS.ADD_SHOW,
  showId,
})

export const internalData = (state, action) => {
  console.log('internal action', action);
  switch (action.type) {
    case ACTIONS.SEEN_EPISODE: {
      const { seenEpisodes = [], ...rest } = state;
      if (action.seen) {
        return {
          ...rest,
          seenEpisodes: [
            ...seenEpisodes,
            { episodeId: action.id, showId: action.showId },
          ],
        };
      } else {
        return {
          ...rest,
          seenEpisodes: seenEpisodes.filter(({ episodeId }) => episodeId !== action.id),
        };
      }
    }
    case ACTIONS.ADD_SHOW: {
      const { savedShows = [], ...rest } = state;
      if (!savedShows.includes(action.showId)) {
        return {
          ...rest,
          savedShows: [
            ...savedShows,
            action.showId,
          ]
        };
      }
      return state;
    }
    default:
      return state;
  }
}

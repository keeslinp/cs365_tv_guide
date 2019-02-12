const ACTIONS = Object.freeze({
  ADD_SHOW: 'ADD_SHOW',
  SEEN_EPISODE: 'SEEN_EPISODE',
});

export const markEpisodeAsSeen = payload => ({
  type: ACTIONS.SEEN_EPISODE,
  payload,
});

export const saveShow = showId => ({
  type: ACTIONS.ADD_SHOW,
  showId,
})

export const internalData = (state, action) => {
  switch (action.type) {
    case ACTIONS.SEEN_EPISODE: {
      const { seenEpisodes = [], ...rest } = state;
      return {
        ...rest,
        seenEpisodes: [
          ...seenEpisodes,
          { ...action.payload },
        ],
      };
    }
    case ACTIONS.ADD_SHOW: {
      const { savedShows = [], ...rest } = state;
      return {
        ...rest,
        savedShows: [
          ...savedShows,
          action.showId,
        ]
      };
    }
    default:
      return state;
  }
}
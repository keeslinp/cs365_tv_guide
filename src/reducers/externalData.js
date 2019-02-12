const shows = [
  {
    name: 'Stranger Things',
    description: 'When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.',
    image: 'https://www.thetvdb.com/banners/fanart/original/5c54f71c7acf6.jpg',
    id: 'stranger_things',
  },
  {
    name: 'Lost',
    description: 'After their plane, Oceanic Air flight 815, tore apart whilst thousands of miles off course, the survivors find themselves on a mysterious deserted island where they soon find out they are not alone.',
    image: 'https://www.thetvdb.com/banners/fanart/original/73739-34.jpg',
    id: 'lost',
  },
];
const episodes = {
  'stranger_things': [
    { absoluteNumber: 1, airedSeason: 1 },
    { absoluteNumber: 2, airedSeason: 1 },
  ],
  'lost': [
    { absoluteNumber: 1, airedSeason: 1 },
    { absoluteNumber: 2, airedSeason: 1 },
    { absoluteNumber: 3, airedSeason: 1 },
    { absoluteNumber: 4, airedSeason: 1 },
  ],
};

const ACTIONS = Object.freeze({
  FETCH_SHOWS: 'FETCH_SHOWS',
  FETCH_EPISODES: 'FETCH_EPISODES',
  SEARCH_SHOWS: 'SEARCH_SHOWS',
});

export const fetchEpisodes = () => ({
  type: ACTIONS.FETCH_EPISODES,
});

export const fetchShows = () => ({
  type: ACTIONS.FETCH_SHOWS,
});

export const searchShows = query => ({
  type: ACTIONS.SEARCH_SHOWS,
  query,
});

export const externalData = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_EPISODES: return { ...state, episodes };
    case ACTIONS.FETCH_SHOWS: return { ...state, shows };
    case ACTIONS.SEARCH_SHOWS: return {
      ...state,
      searchResults: shows.filter(({ name }) => name.toLowerCase().includes(action.query.toLowerCase()))
        .reduce((ary, { id }) => [...ary, id], []),
    };
    default: return state;
  }
}

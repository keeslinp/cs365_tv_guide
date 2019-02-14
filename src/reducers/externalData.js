const API_KEY = 'ac50cb8b6b6b70ecb3696aeca60ab200';

const ACTIONS = Object.freeze({
  FETCH_POPULAR_SHOWS: 'FETCH_POPULAR_SHOWS',
  FETCH_MY_SHOWS: 'FETCH_MY_SHOWS',
  FETCH_SEASON: 'FETCH_EPISODES',
  SEARCH_SHOWS: 'SEARCH_SHOWS',
  FETCH_SHOW: 'FETCH_SHOW',
});

export const fetchSeason = async (showId, seasonNumber) => {
  const season = await fetch(`https://api.themoviedb.org/3/tv/${showId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`).then(resp => resp.json());
  return {
    type: ACTIONS.FETCH_SEASON,
    season,
  };
};

export const fetchPopularShows = async () => {
  const { results } = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json());
  return {
    type: ACTIONS.FETCH_POPULAR_SHOWS,
    results,
  };
}

export const searchShows = async query => {
  const { results } = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=1`).then(resp => resp.json());
  return {
    type: ACTIONS.SEARCH_SHOWS,
    searchResults: results,
  };
};

export const fetchMyShows = async (savedShows) => {
  const myShows = await Promise.all(savedShows.map(id => fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`).then(resp => resp.json())));
  return {
    type: ACTIONS.FETCH_MY_SHOWS,
    myShows,
  };
};

export const fetchShow = async showId => {
  const show = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=${API_KEY}&language=en-US`).then(resp => resp.json());
  return {
    type: ACTIONS.FETCH_SHOW,
    show,
  };
}

export const externalData = (state, action) => {
  console.log('ACTION', action);
  switch (action.type) {
    case ACTIONS.FETCH_POPULAR_SHOWS: return { ...state, popularShows: action.results, };
    case ACTIONS.FETCH_MY_SHOWS: return { ...state, myShows: action.myShows, };
    case ACTIONS.FETCH_SHOW: return { ...state, show: action.show };
    case ACTIONS.SEARCH_SHOWS: return {
      ...state,
      searchResults: action.searchResults,
    };
    case ACTIONS.FETCH_SEASON: return {
      ...state,
      season: action.season,
    };
    default: return state;
  }
}

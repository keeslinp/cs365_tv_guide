import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './components';
import { MyShows, PopularShows, SearchResults } from './pages';
import './App.css';
import { internalData, externalData, fetchEpisodes, fetchShows, markEpisodeAsSeen, saveShow, searchShows } from './reducers';


const Container = styled.div`
  margin: 20px;
`;

const App = () => {
  const [{ shows, episodes, searchResults, }, fetchData] = useReducer(externalData, {});
  const [{ savedShows, seenEpisodes }, updateState] = useReducer(internalData, {
    savedShows: [],
    seenEpisodes: [],
  });
  useEffect(() => {
    fetchData(fetchEpisodes());
    fetchData(fetchShows());
    updateState(markEpisodeAsSeen({
      showId: 'stranger_things',
      episodeNumber: 1,
    }));
    updateState(saveShow('stranger_things'));
  }, []);
  const search = (value) => {
    fetchData(searchShows(value));
  };
  return (
    <Router>
      <div>
        <AppBar search={search} />
        <Container>
          <Route exact path="/" render={() =>
            <MyShows
              shows={shows}
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
            />} />
          <Route exact path="/popular" render={() =>
            <PopularShows
              shows={shows}
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
            />} />
          <Route exact path="/search" render={() =>
            <SearchResults
              shows={shows}
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
              searchResults={searchResults}
            />} />
        </Container>
      </div>
    </Router>
  );
};

export default App;

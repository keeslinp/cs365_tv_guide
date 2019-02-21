import React, { useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './components';
import { MyShows, PopularShows, SearchResults, Show } from './pages';
import './App.css';
import { internalData, externalData, fetchPopularShows, markEpisodeAsSeen, saveShow, searchShows, fetchMyShows, removeShow } from './reducers';


const Container = styled.div`
  margin: 20px;
`;

const App = () => {
  const [{ myShows, episodes, searchResults, popularShows }, fetchData] = useReducer(externalData, {});
  const [{ savedShows, seenEpisodes }, updateState] = useReducer(internalData, {
    savedShows: [],
    seenEpisodes: [],
  });
  useEffect(() => {
    fetchPopularShows().then(fetchData);
    updateState(markEpisodeAsSeen({
      showId: 1402,
      episodeNumber: 1,
    }));
    updateState(saveShow(1402));
  }, []);
  useEffect(() => {
    fetchMyShows(savedShows).then(fetchData);
  }, [savedShows]);
  const search = (value) => {
    searchShows(value).then(fetchData);
  };
  const handleSaveShow = (id) => {
    updateState(saveShow(id));
  };
  const handleMarkAsSeen = (showId, id, _evt, value) => {
    updateState(markEpisodeAsSeen(showId, id, value));
  };
  const handleDeleteShow = (id) => {
    updateState(removeShow(id));
  }
  return (
    <Router>
      <div>
        <AppBar search={search} />
        <Container>
          <Route exact path="/" render={({ history }) =>
            <MyShows
              shows={myShows}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
              history={history}
              deleteShow={handleDeleteShow}
            />} />
          <Route exact path="/popular" render={({ history }) =>
            <PopularShows
              shows={popularShows}
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
              history={history}
            />} />
          <Route exact path="/search" render={({ history }) =>
            <SearchResults
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
              searchResults={searchResults}
              history={history}
            />} />
          <Route exact path="/show/:showId" render={({ match: { params: { showId } } }) =>
            <Show
              episodes={episodes}
              savedShows={savedShows}
              seenEpisodes={seenEpisodes}
              showId={parseInt(showId, 10)}
              saveShow={handleSaveShow}
              markEpisodeAsSeen={handleMarkAsSeen}
              deleteShow={handleDeleteShow}
            />} />
        </Container>
      </div>
    </Router>
  );
};

export default App;

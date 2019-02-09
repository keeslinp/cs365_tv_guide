import React, { useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import { AppBar } from './components';
import { MyShows } from './pages';
import './App.css';
import { reducer } from './reducers';

const initalState = {
  shows: [
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
  ],
  episodes: {
    'stranger_things': [
      { absoluteNumber: 1, airedSeason: 1, seen: true },
      { absoluteNumber: 1, airedSeason: 1, seen: false },
    ],
    'lost': [
      { absoluteNumber: 1, airedSeason: 1, seen: true },
      { absoluteNumber: 2, airedSeason: 1, seen: false },
      { absoluteNumber: 3, airedSeason: 1, seen: false },
      { absoluteNumber: 4, airedSeason: 1, seen: false },
    ],
  }
};

const Container = styled.div`
  margin: 20px;
`;

const App = () => {
  const [{ shows, episodes, }, dispatch] = useReducer(reducer, initalState);
  return (
    <Router>
      <div>
        <AppBar />
        <Container>
          <Route exact path="/" render={() => <MyShows shows={shows} episodes={episodes} />} />
        </Container>
      </div>
    </Router>
  );
};

export default App;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const MAX_LEN = 100;
const truncate = str => `${str.substring(0, MAX_LEN)}${str.length > MAX_LEN ? '...' : ''}`;

export const ShowGrid = ({ shows, savedShows, seenEpisodes, history }) => (
  <Grid container spacing={16}>
    {shows.map(({ name, overview, poster_path, id, number_of_episodes }) =>
      <Grid item xs={2} key={id}>
        <Card>
          <CardActionArea
            onClick={() => {
              history.push(`/show/${id}`);
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${poster_path}`}
              title={name}
            />
            <CardContent>
              <Typography variant="h5" inline>
                {name}
              </Typography>
              {savedShows.includes(id) && number_of_episodes &&
                <Typography color="secondary" variant="h5" inline>
                  ({(number_of_episodes - seenEpisodes.filter(({ showId }) => showId === id).length)} New)
                    </Typography>
              }
              <Typography component="p">
                {truncate(overview)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )}
  </Grid>
);

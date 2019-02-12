import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

export const ShowGrid = ({ shows, episodes, savedShows, seenEpisodes }) => (
  <Grid container spacing={16}>
    {shows.map(({ name, description, image, id }) =>
      <Grid item xs={2} key={id}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={image}
              title={name}
              height={200}
            />
            <CardContent>
              <Typography variant="h5" inline>
                {name}
              </Typography>
              {savedShows.includes(id) &&
                <Typography color="secondary" variant="h5" inline>
                  ({(episodes[id].length - seenEpisodes.filter(({ showId }) => showId === id).length)} New)
                    </Typography>
              }
              <Typography component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )}
  </Grid>
);

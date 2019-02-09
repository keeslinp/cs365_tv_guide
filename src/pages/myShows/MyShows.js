import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

export const MyShows = ({ shows, episodes })  => (
  <div>
    <Typography variant="h3">
      My Shows
    </Typography>
    <Grid container spacing={16}>
      {shows.map(({ name, description, image, id }) =>
        <Grid item xs={2}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                image={image}
                title={name}
                height={200}
              />
              <CardContent>
                <Typography variant="h5">
                  {name} ({episodes[id].reduce((sum, ep) => ep.seen ? sum : sum + 1, 0)} New)
                </Typography>
                <Typography component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  </div>
);

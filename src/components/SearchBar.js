import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { get } from 'lodash';
import { withRouter } from 'react-router'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'baseline',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

const SearchBar = ({ classes, history }) => {
  const handleSearchChange = ({ target: { value } }) => {
    const newUrl = `/search`;
    const state = { value };
    if (value.length === 1) {
      history.push(newUrl, state);
    } else {
      history.replace(newUrl, state);
    }
  };
  const searchValue = get(history, 'location.state.value', '');
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search Shows" onChange={handleSearchChange} value={searchValue}/>
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default withRouter(withStyles(styles)(SearchBar));

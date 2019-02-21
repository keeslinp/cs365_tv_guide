import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { get } from 'lodash';
import { withRouter } from 'react-router'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
};

const SearchBar = ({ classes, history, search }) => {
  const [ searchValue, setSearch ] = useState('');
  const isSearching = get(history, 'location.pathname', '') === '/search';
  const triggerSearch = (value) => {
    const newUrl = `/search`;
    if (!isSearching) {
      history.push(newUrl);
    }
    search(value);
    setSearch(value);
  };
  const handleSearchChange = ({ target: { value } }) => {
    triggerSearch(value);
  };
  const clearSearch = () => {
    setSearch('');
    if (history.length > 1) {
      history.goBack();
    } else {
      history.push('/');
    }
  };
  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="Search Shows" onChange={handleSearchChange} value={searchValue}/>
      <IconButton className={classes.iconButton} aria-label="Search">
        {isSearching ?
          <ClearIcon onClick={clearSearch} />
            : <SearchIcon onClick={() => triggerSearch(searchValue)}/>
        }
      </IconButton>
    </Paper>
  );
};

export default withRouter(withStyles(styles)(SearchBar));

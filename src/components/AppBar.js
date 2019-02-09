import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import LinkButton from './LinkButton';
import SearchBar from './SearchBar';

const StyledLinkButton = withStyles({
  root: {
    marginLeft: '10px',
    marginRight: '10px',
  }
})(LinkButton);

const StyledToolbar = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})(Toolbar);

const AppBar = () => (
  <div>
    <MuiAppBar position="static" color="default">
      <StyledToolbar>
        <div>
        <StyledLinkButton to={`/`}>My Shows</StyledLinkButton>
        <StyledLinkButton to={`/popular`}>Popular</StyledLinkButton>
      </div>
        <SearchBar />
      </StyledToolbar>
    </MuiAppBar>
  </div>
);

export default AppBar;

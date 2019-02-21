import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
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

const TABS = [
  { to: '/', label: 'My Shows' },
  { to: '/popular', label: 'Popular' },
];

const AppBar = ({ search, history, location }) => (
  <div>
    <MuiAppBar position="static" color="default">
      <StyledToolbar>
        <Tabs onChange={(_evt, val) => {
          console.log(val);
          history.push(TABS[val].to);
        }} value={TABS.findIndex(({ to }) => to === location.pathname)}>
          {TABS.map(({ label }) => <Tab label={label} />)}
        </Tabs>
        <SearchBar search={search} />
      </StyledToolbar>
    </MuiAppBar>
  </div>
);

export default withRouter(AppBar);

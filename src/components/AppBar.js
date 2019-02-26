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
  { value: '/', label: 'My Shows' },
  { value: '/popular', label: 'Popular' },
];

const AppBar = ({ search, history, location }) => (
  <div>
    <MuiAppBar position="static" color="default">
      <StyledToolbar>
        <Tabs
          onChange={(_evt, val) => {
            history.push(val);
          }}
          value={location.pathname}
        >
          {TABS.map((values) => <Tab {...values} />)}
        </Tabs>
        <SearchBar search={search} />
      </StyledToolbar>
    </MuiAppBar>
  </div>
);

export default withRouter(AppBar);

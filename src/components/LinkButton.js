import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router'
import styled from 'styled-components';

const CurrentPage = styled(Typography)`
  text-decoration: underline;
  margin: 5px;
`;

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  console.log(location, to);
  if (location.pathname === to) {
    return (
      <CurrentPage inline>{rest.children}</CurrentPage>
    );
  }
  return (
    <Button
      {...rest} // `children` is just another prop!
      variant="contained"
      onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)

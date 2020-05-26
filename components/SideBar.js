import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'sticky',
    top: 24
  },
  content: {
    padding: 0
  },
  title: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  container: {
    padding: theme.spacing(1)
  }
}));

const SideBar = props => {
  const classes = useStyles();
  const { data } = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title}>Stats</Typography>

        <Box className={classes.container}>
          <Typography variant="subtitle2" gutterBottom>
            Pages fetched: {data.page}
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            Posts fetched: {data.postsLength}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

SideBar.propTypes = {
  data: PropTypes.object.isRequired
};

export default SideBar;

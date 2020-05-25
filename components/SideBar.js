import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

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

const SideBar = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography className={classes.title}>Stats</Typography>
        <Typography className={classes.container}>Data</Typography>
      </CardContent>
    </Card>
  );
};

export default SideBar;

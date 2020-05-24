import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import FeedContainer from '../components/FeedContainer';
import SideBar from '../components/SideBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.light,
    height: '100vh'
  },
  appBar: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    color: theme.palette.text.dark
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static" elevation={0}>
        <Toolbar className={classes.toolbar} variant="dense">
          <Typography variant="h6" color="inherit">
            Infinite Scroll
          </Typography>
        </Toolbar>
      </AppBar>

      <Box px={3} py={3}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <FeedContainer />
            </Grid>

            <Grid item xs={3}>
              <SideBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

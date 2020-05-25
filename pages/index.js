import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import PostsContainer from '../components/PostsContainer';
import SideBar from '../components/SideBar';
import { grey, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: blueGrey[100],
    minHeight: '100vh'
  },
  appBar: {
    backgroundColor: '#ffffff'
  },
  toolbar: {
    color: grey[900]
  }
}));

const Home = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isFetchingPosts, setIsFetchingPosts] = useState(false);

  useEffect(() => {
    getPosts();
  }, [page]);

  const getPosts = async () => {
    try {
      setIsFetchingPosts(true);

      const res = await fetch(`/api/posts?page=${page}`);
      const { data } = await res.json();

      setPosts(data);
    } catch (err) {
      setIsFetchingPosts(false);
    }
  };

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
            <Grid item xs={8}>
              <PostsContainer data={posts} isFetchingPosts={isFetchingPosts} />
            </Grid>

            <Grid item xs={4}>
              <SideBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

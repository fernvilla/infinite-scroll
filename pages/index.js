import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import PostsContainer from '../components/PostsContainer';
import SideBar from '../components/SideBar';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  const [isLoading, setIsLoading] = useState(false);
  const postsData = {
    page,
    postsLength: posts.length
  };

  useEffect(() => {
    getPosts();
  }, [page]);

  const getPosts = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/posts?page=${page}`);
      const { data } = await res.json();

      setPosts([...posts, ...data]);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  const updatePage = () => setPage(page + 1);

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
              <PostsContainer data={posts} isLoading={isLoading} loadMorePosts={updatePage} currentPage={page} />
            </Grid>

            <Grid item xs={4}>
              <SideBar data={postsData} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;

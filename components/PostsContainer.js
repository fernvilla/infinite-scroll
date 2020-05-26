import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles(theme => ({
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(2)
  }
}));

const PostsContainer = props => {
  const classes = useStyles();
  const { data, isLoading, loadMorePosts } = props;
  const [lastPost, setLastPost] = useState(null);

  useEffect(() => {
    const ref = lastPost;
    const observer = new IntersectionObserver(interSectionCallback, { threshold: 0 });

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [lastPost, data]);

  const interSectionCallback = (entries, observer) => {
    const first = entries[0];

    if (first.isIntersecting) {
      loadMorePosts();
    }
  };

  return (
    <div>
      {data.map((d, i) => (
        <div ref={i === data.length - 1 ? setLastPost : undefined} key={d.id}>
          <Box my={3} mt={0}>
            <Post data={d} />
          </Box>
        </div>
      ))}

      {isLoading && (
        <div className={classes.progressContainer}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

PostsContainer.props = {
  data: PropTypes.array.isRequired,
  loadMorePosts: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default PostsContainer;

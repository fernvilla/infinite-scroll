import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Avatar, CardMedia, CircularProgress, RootRef } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { ArrowUpward, ArrowDownward, ChatBubble } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flex: 1,
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${grey[700]}`
    }
  },
  content: {
    flex: 1,
    paddingBottom: 0
  },
  votes: {
    backgroundColor: grey[100],
    minHeight: '100%',
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1)
  },
  topText: {
    display: 'flex',
    alignItems: 'center'
  },
  media: {
    height: 480
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  arrow: {
    color: grey[600]
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: -theme.spacing(2)
  },
  bubble: {
    color: grey[400],
    marginRight: theme.spacing(1)
  }
}));

const Post = props => {
  const { data } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <div className={classes.votes}>
        <ArrowUpward className={classes.arrow} fontSize="small" />

        <Typography variant="caption">{data.votes}</Typography>

        <ArrowDownward className={classes.arrow} fontSize="small" />
      </div>

      <CardContent className={classes.content}>
        <div className={classes.topText}>
          <Avatar alt="Remy Sharp" src={data.avatar} className={classes.avatar} />

          <Typography variant="caption" color="textSecondary">
            {`r/${data.subreddit}`}
          </Typography>

          <span className={classes.bullet}>•</span>

          <Typography variant="caption" color="textSecondary">
            Posted by {data.userName}
          </Typography>
        </div>

        <Typography variant="subtitle1">
          <strong>{data.title}</strong>
        </Typography>

        {data.image ? (
          <div>
            <CardMedia className={classes.media} image={data.image} />
          </div>
        ) : (
          <Typography variant="body1" color="textSecondary">
            <strong>{data.text}</strong>
          </Typography>
        )}

        <div className={classes.actions}>
          <ChatBubble className={classes.bubble} fontSize="small" />

          <Typography variant="caption" color="textSecondary">
            {data.comments} Comments
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

Post.props = {
  data: PropTypes.array.isRequired
};

export default Post;

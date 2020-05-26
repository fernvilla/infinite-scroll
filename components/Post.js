import React, { useRef, useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Avatar, CardMedia, RootRef, Box } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import { ArrowUpward, ArrowDownward, ChatBubble } from '@material-ui/icons';
import clsx from 'clsx';
import { Skeleton } from '@material-ui/lab';

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
  },
  hidden: {
    display: 'none'
  },
  skeleton: {
    backgroundColor: '#fff'
  }
}));

const Post = props => {
  const { data, currentPage } = props;
  const [displayComponent, setDisplayComponent] = useState(true);
  const classes = useStyles();
  const cardRef = useRef(null);
  const hideComponent = !displayComponent && currentPage !== data.page;

  useEffect(() => {
    const ref = cardRef.current;
    const observer = new IntersectionObserver(interSectionCallback, {
      rootMargin: `${window.innerHeight / 2}px 0px 0px 0px`,
      threshold: 0
    });

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  const interSectionCallback = (entries, observer) => {
    const first = entries[0];

    setDisplayComponent(first.isIntersecting);
  };

  return (
    <RootRef rootRef={cardRef}>
      <Box my={3} mt={0}>
        <Card
          className={clsx([classes.card], hideComponent && [classes.hidden])}
          variant="outlined"
          style={hideComponent ? { height: cardRef.current.offsetHeight } : {}}
        >
          {hideComponent ? (
            <Skeleton height={300} variant="rect" animation="wave" />
          ) : (
            <Fragment>
              <div className={classes.votes}>
                <ArrowUpward className={classes.arrow} fontSize="small" />

                <Typography variant="caption">{data.votes}</Typography>

                <ArrowDownward className={classes.arrow} fontSize="small" />
              </div>

              <CardContent className={classes.content}>
                <div className={classes.topText}>
                  <Avatar src={data.avatar} className={classes.avatar} />

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
            </Fragment>
          )}
        </Card>
      </Box>
    </RootRef>
  );
};

Post.props = {
  data: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Post;
